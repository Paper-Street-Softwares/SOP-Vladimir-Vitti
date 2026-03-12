import content from "../../content/content";
import Accordion from "@mui/material/Accordion";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SectionArea from "../sectionElements/SectionArea";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import { Dialog } from "primereact/dialog";
import labels from "../../assets/imgs/features/labels.webp";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ArrowRight } from "lucide-react";

function FeaturesNovaTemplate({ colorMode, accordion }) {
  const [visible, setVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const features = Object.values(content.texts.features.cards);

  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    image,
    bgAccordion,
    textDestaque;

  switch (colorMode) {
    case "dark":
      backgroundMode = "bg-transparent";
      bgAccordion = "rgba(0,0,0,0.8)";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      cardBg = "bg-dark";
      iconBg = "bg-darkOpacity text-primaryLight";
      image = "border-[8px] border-borderImage";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      bgAccordion = "rgba(0,0,0,0.8)";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      cardBg = "bg-dark";
      iconBg = "bg-darkOpacity text-primaryLight";
      image = "border-[8px] border-borderImage";
      break;

    case "light":
      backgroundMode = "bg-transparent";
      bgAccordion = "rgba(0,0,0,0.8)";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      cardBg = "bg-dark";
      iconBg = "bg-darkOpacity text-primaryLight";
      image = "border-[8px] border-borderImage";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-white";
      cardBg = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      iconBg = "bg-terciary/10 text-white";
      image =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_60%)]";
  }

  return (
    <SectionArea id="feature" data-theme={colorMode} className={backgroundMode}>
      <SectionWrapper>
        <section className="relative font-mainFont w-full">
          <div className="flex flex-col gap-12 items-center">
            <SectionHeaderNovo
              miniTitle={content.texts.features.miniTag}
              title={content.texts.features.FirstPart}
              destaque={content.texts.features.Destaque}
              secondPart={content.texts.features.SecondPart}
              subtitle={content.texts.features.subtitle}
              colorMode={colorMode}
              className={`mb-2`}
            />

            <MotionDivDownToUp>
              <img
                src={labels}
                alt={content.texts.features.alt}
                className={`relative rounded-[2rem] w-full mb-3`}
                width={621}
                height={828}
              />
              <div
                className={`relative rounded-[1rem] overflow-hidden shadow-2xl ring-black/5 ${image}`}
              >
                {" "}
                <img
                  src={content.texts.features.imgFeatures}
                  alt={content.texts.features.alt}
                  className={`relative  shadow-xl w-full m-auto scale-105 hover:scale-100 transition-transform duration-700`}
                  width={621}
                  height={828}
                />
              </div>
            </MotionDivDownToUp>

            {/* CARDS */}
            <div className="flex flex-wrap gap-3 font-secondFont justify-evenly w-full">
              {features.map((feature, idx) => (
                <MotionDivDownToUp
                  className={`w-full tablet1:w-[30%]`}
                  key={idx}
                >
                  <div
                    onClick={() => {
                      setSelectedFeature(feature);
                      setVisible(true);
                      setExpanded(false);
                    }}
                    className={`group p-6 rounded-xl ${cardBg} hover:scale-105 transition-all duration-700 w-[90%] tablet1:w-full mx-auto cursor-pointer `}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${iconBg} mb-4 flex items-center justify-center`}
                    >
                      {feature.icon}
                    </div>

                    <h1 className={`font-bold text-md mb-2 text-white w-full`}>
                      {feature.title}
                    </h1>

                    <p className="text-white/70 pt-2 text-md flex gap-2 items-center">
                      {" "}
                      <span>
                        <ArrowRight width={18} />
                      </span>
                      Saiba mais
                    </p>
                  </div>
                </MotionDivDownToUp>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        <Dialog
          header={selectedFeature?.title}
          visible={visible}
          onHide={() => {
            setVisible(false);
            setSelectedFeature(null);
            setExpanded(false);
          }}
          style={{ width: "500px" }}
          breakpoints={{ "1280px": "450px", "960px": "80vw", "641px": "90vw" }}
        >
          {/* DESCRIÇÃO DO CARD PRINCIPAL */}
          {/* {selectedFeature?.description && (
            <div className="mb-4">
              <Typography className={textOpacity}>
                {selectedFeature.description}
              </Typography>
            </div>
          )} */}

          {/* ACCORDION DOS SUBCARDS */}
          {selectedFeature &&
            Object.values(selectedFeature.subCards).map((subCard, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => setExpanded(expanded === index ? false : index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={textDestaque} />}
                  sx={{ backgroundColor: bgAccordion }}
                >
                  <Typography className={text}>
                    {subCard.title} -{" "}
                    <span className="font-secondFont text-sm text-primaryDark">
                      Veja +
                    </span>
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: bgAccordion }}>
                  <Typography className={textOpacity}>
                    {subCard.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Dialog>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FeaturesNovaTemplate;
