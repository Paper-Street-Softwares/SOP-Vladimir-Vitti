import React from "react";
import { Button } from "../interactives/ButtonNovoTemplate";
import { motion } from "framer-motion";
import { Phone, Check, BriefcaseBusiness, Building } from "lucide-react";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ButtonReflexo from "../interactives/ButtonReflexo";
import ButtonAlert from "../interactives/ButtonAlert";
import { useColorMode } from "../../context/UseContextArchive";

function HeroTemplateNovo({
  colorMode,
  text,
  textOpacity,
  backgroundMode,
  bgFaixaHero,
  bgMinitag,
  textObs,
  image,
  bgAlertHero,
  textDestaque,
  borderColor,
  obs,
  obsTwo,
}) {
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-black/40";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgMinitag = "bg-transparent border-primaryDark text-primaryDark";
      image = " border-[8px]";
      bgAlertHero = "bg-white";
      borderColor = "bg-white";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-black/50";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgMinitag = "bg-transparent border-primaryLight text-primaryLight";
      image = " border-[8px]";
      bgAlertHero = "bg-black text-white/60";
      borderColor = "border-borderImage";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-black/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgMinitag = "bg-transparent border-primaryLight text-primaryLight";
      image = " border-[8px]";
      bgAlertHero = "bg-black text-white/60";
      borderColor = "border-primaryDark";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-black/40";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      bgMinitag = "bg-transparent border-white text-white";
      image = " border-[8px]";
      bgAlertHero = "bg-white";
      borderColor = "bg-white";
      break;

    default:
      break;
  }

  const { showGlobalButton } = useColorMode();

  return (
    <SectionArea
      data-theme={colorMode}
      id="home"
      paddingTopAndBottom={false}
      style={{
        backgroundImage: `url(${content.texts.hero.bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="relative w-full pt-[130px] phone2:pt-[140px] phone3:pt-[160px] tablet1:pt-[164px] tablet2:pt-[177px] desktop1:pt-[195px] desktop2:pt-[235px] pb-[64px] desktop1:pb-[96px] flex items-center justify-center overflow-hidden font-mainFont">
        {/* overlay escuro */}
        <div className={`absolute inset-0 z-0 ${bgFaixaHero}`} />
        <div className="absolute inset-0 bg-black/70" />

        <SectionWrapper>
          <div className="relative z-10 grid gap-4 phone2:gap-6 lg:gap-20 items-center w-full">
            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 order-2 lg:order-1 flex flex-col items-center"
            >
              {/* <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm text-[8px] phone2:text-xs font-secondFont font-bold tracking-wide uppercase ${bgMinitag}`}
              >
                <BriefcaseBusiness className="w-4 h-4" />
                {content.texts.hero.miniTag}
              </div> */}

              <h1
                className={`text-[31px] phone2:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-center ${text}`}
              >
                {content.texts.hero.FirstPart}{" "}
                <span className={`${textDestaque}`}>
                  {content.texts.hero.Destaque}
                </span>{" "}
                {content.texts.hero.SecondPart}
              </h1>

              <p
                className={`text-lg md:text-xl leading-relaxed max-w-lg font-secondFont font-extralight text-center ${textOpacity}`}
              >
                {content.texts.hero.subtitle}
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <ButtonReflexo
                  icon={content.texts.svgs.wpp}
                  link={content.texts.links.ctaWhatsapp}
                  label={content.texts.hero.ctaButtonText}
                  colorMode={colorMode}
                />

                <ButtonReflexo
                  id="ligar"
                  link={`tel:${content.texts.infos.phone}`}
                  label="Emergência? Ligue agora!"
                  colorMode={colorMode}
                />
              </div>

              {obs && (
                <div className="flex flex-col justify-center items-center text-center gap-3 text-sm w-full">
                  <div className="relative flex items-center gap-2">
                    {" "}
                    <div className="relative flex ">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                    </div>
                    <span
                      className={`font-secondFont font-light flex gap-2 items-center ${textOpacity}`}
                    >
                      {content.texts.hero.obsHero.text}
                    </span>
                  </div>

                  {obsTwo && (
                    <span
                      className={`font-secondFont font-light flex gap-2 items-center ${textOpacity}`}
                    >
                      <div className="relative flex ">
                        <Building width={18} />
                      </div>
                      {content.texts.hero.obsHero.textTwo}
                    </span>
                  )}
                </div>
              )}
            </motion.div>

            {/* IMAGEM */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div
                className={`relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl ring-1 ring-black/5 ${borderColor} ${image}`}
              >
                <img
                  src={content.texts.hero.heroDefaultImage}
                  alt={content.texts.hero.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div> */}
          </div>
        </SectionWrapper>
      </section>
    </SectionArea>
  );
}

export default HeroTemplateNovo;
