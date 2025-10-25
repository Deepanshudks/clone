import { Divider } from "@mui/material";
import image1 from "../../assets/1st.svg";
import image3 from "../../assets/3rd.svg";
import image4 from "../../assets/4th.png";
import image5 from "../../assets/5th.png";

const Partners = () => {
  const sources = [image1, image3, image4, image5];

  return (
    <section className="bg-gradient-to-b from-[#687273] via-zinc-400 to-white backdrop-blur-xs py-10 w-full flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-8 px-6 max-w-8xl">
        {sources.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-18 flex-shrink-0"
          >
            <img
              src={src}
              alt={`partner-${index + 1}`}
              className="h-10 sm:h-14 md:h-16 lg:h-28 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
            />

            {index !== sources.length - 1 && (
              <Divider
                orientation="vertical"
                className="hidden md:block !bg-zinc-400 !h-28"
                flexItem
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
