import React from "react";
import { styled } from "@mui/material/styles";

interface TooltipProviderProps {
  children: React.ReactNode;
}

interface TooltipContentProps {
  title: string | React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
  children: React.ReactElement;
}

const StyledTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#ffffff",
    color: "rgb(17 24 39)",
    borderRadius: "0.375rem",
    border: "1px solid rgba(229, 231, 235, 0.7)",
    padding: "0.375rem 0.75rem", // px-3 py-1.5
    fontSize: "0.875rem", // text-sm
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)", // shadow-md
    zIndex: 50,
    animation: "fadeIn 0.2s ease-in-out",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
  },
}));

/** Just a wrapper for consistency (like Radix TooltipProvider) */
export const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export const Tooltip: React.FC<TooltipContentProps> = ({
  title,
  placement = "top",
  className,
  children,
}) => {
  return (
    <StyledTooltip
      title={title}
      placement={placement}
      arrow
      className={className}
    >
      {children}
    </StyledTooltip>
  );
};

export const TooltipTrigger: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => children;

export const TooltipContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;
