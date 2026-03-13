import {
  Diamond,
  Eye,
  Focus,
  Gem,
  Linkedin,
  Phone,
  Target,
} from "lucide-react";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import ButtonReflexo from "../interactives/ButtonReflexo";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import {
  ButtonsLps,
  defaultButtonThemes,
} from "../../context/UseContextArchive";
import { Button } from "../interactives/ButtonNovoTemplate";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

function StrategicSection({ ButtonModal, colorMode, benefits }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(content.texts.about.title);
    setVisible(true);
  };

  // Definindo classes conforme colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    buttonBg,
    textDestaque,
    image,
    textOpacityModal;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textOpacityModal = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-white/10";
      iconBg = "bg-primaryDark/10 text-primaryDark";
      buttonBg = "bg-primaryDark";
      image = " border-[8px] border-white";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textOpacityModal = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";
      cardBg = "bg-gray-800/20";
      iconBg = "bg-primaryLight/20 text-primaryLight";
      buttonBg = "bg-primaryLight";
      image = " border-[8px] border-borderImage";
      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textOpacityModal = "text-corOutrosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-white/10";
      iconBg = "bg-primaryDark/10 text-primaryDark";
      buttonBg = "bg-primaryDark";
      image = " border-[8px] border-white";
      break;
    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosBranca";
      textOpacityModal = "text-corOutrosPreto";
      textDestaque = "text-white";
      cardBg = "bg-white/10";
      iconBg = "bg-primaryDark/10 text-primaryDark";
      buttonBg = "bg-primaryDark";
      image =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_60%)]";
  }

  const { showGlobalButtonsLps } = ButtonsLps();

  return (
    <SectionArea
      id="about"
      data-theme={colorMode}
      className={`${backgroundMode}`}
      paddingtop={false}
    >
      <SectionWrapper>
        <section className="w-full relative overflow-visible">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-0 desktop1:gap-16 items-center">
              {/* Imagem com destaque */}
              <MotionDivDownToUp
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative w-full mt-4 tablet1:mt-8 desktop1:mt-0 m-auto overflow-visible mb-10 desktop1:mb-0"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden  ${image}`}
                  >
                    <img
                      src={content.texts.strategicSection.img}
                      alt={content.texts.strategicSection.alt}
                      className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1rem]"
                      width={621}
                      height={829}
                    />
                  </div>
                </div>
              </MotionDivDownToUp>
              {/* Conteúdo textual */}
              <div className="space-y-8">
                <div>
                  <SectionHeaderNovo
                    miniTitle={content.texts.strategicSection.minitag}
                    title={content.texts.strategicSection.title}
                    subtitle={content.texts.strategicSection.subtitle}
                    type="article"
                    colorMode={colorMode}
                  />

                  <MotionDivDownToUp>
                    {ButtonModal && (
                      <Button
                        onClick={onClick}
                        className={`bg-transparent mt-4 border-none shadow-primary/20 font-secondFont py-0 uppercase font-bold transition-all px-0 scale-100 hover:scale-95 duration-500 outline-none flex items-center gap-2 ${textDestaque}`}
                      >
                        {content.texts.about.buttonModalLabelAbout}
                        <ArrowRight width={24} height={24} />
                      </Button>
                    )}
                  </MotionDivDownToUp>
                </div>

                <MotionDivDownToUp>
                  <p
                    className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed mt-14 ${textOpacity}`}
                  >
                    {content.texts.strategicSection.paragraph}
                  </p>
                </MotionDivDownToUp>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default StrategicSection;
