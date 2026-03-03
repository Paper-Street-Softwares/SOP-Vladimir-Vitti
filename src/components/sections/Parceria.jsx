import React from "react";
import { Carousel } from "primereact/carousel";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ParceriaCard from "../cards/CardParceria";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function Parceria({ colorMode }) {
  const imgListClient = Object.values(content.texts.parceria.imagesClient);
  const imgListPaceria = Object.values(content.texts.parceria.imagesParcerias);

  // Classes dinâmicas conforme colorMode
  let backgroundMode, text, textOpacity;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;
  }

  // 🔹 Breakpoints do carousel
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const clientTemplate = (item) => {
    return (
      <MotionDivDownToUp className="flex justify-center px-0 tablet2:px-2">
        <ParceriaCard
          role={item.role}
          img={item.img}
          alt={item.alt}
          text={item.description}
          name={item.name}
          colorMode={colorMode}
          textClass={text}
          textOpacityClass={textOpacity}
        />
      </MotionDivDownToUp>
    );
  };

  const parceriaTemplate = (item) => {
    return (
      <MotionDivDownToUp className="flex justify-center px-0 tablet2:px-2">
        <ParceriaCard
          role={item.role}
          img={item.img}
          alt={item.alt}
          text={item.description}
          name={item.name}
          colorMode={colorMode}
          textClass={text}
          textOpacityClass={textOpacity}
        />
      </MotionDivDownToUp>
    );
  };

  return (
    <SectionArea className={backgroundMode} data-theme={colorMode}>
      <SectionWrapper>
        <div>
          <SectionHeaderNovo
            miniTitle={content.texts.parceria.miniTag}
            title={content.texts.parceria.title}
            subtitle={content.texts.parceria.subtitle}
            colorMode={colorMode}
          />
          <div className="flex flex-col desktop1:flex-row items-center gap-10">
            <div className="">
              <SectionHeaderNovo
                title={"Nossos clientes"}
                colorMode={colorMode}
                className={`mb-2`}
              />
              <Carousel
                value={imgListClient}
                itemTemplate={clientTemplate}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                circular
                autoplayInterval={4000}
                showIndicators
                showNavigators
                className="max-w-[300px] phone3:max-w-[400px] tablet1:max-w-[450px] w-full mx-auto"
              />
            </div>
            <div className="">
              <SectionHeaderNovo
                title={"Parcerias"}
                colorMode={colorMode}
                className={`mb-2`}
              />
              <Carousel
                value={imgListPaceria}
                itemTemplate={parceriaTemplate}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                circular
                autoplayInterval={4000}
                showIndicators
                showNavigators
                className="max-w-[300px] phone3:max-w-[400px] tablet1:max-w-[450px] w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Parceria;
