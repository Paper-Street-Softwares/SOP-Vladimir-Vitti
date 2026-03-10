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

function AboutNovoTemplate({ ButtonModal, colorMode, benefits }) {
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
    >
      <SectionWrapper>
        <section className="w-full relative overflow-visible">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-0 desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <div className="space-y-8">
                <div>
                  <SectionHeaderNovo
                    miniTitle={content.texts.about.miniTag}
                    title={content.texts.about.FirstPart}
                    destaque={content.texts.about.Destaque}
                    secondPart={content.texts.about.SecondPart}
                    subtitle={content.texts.about.subtitle}
                    type="article"
                    colorMode={colorMode}
                  />
                  <MotionDivDownToUp>
                    <p
                      className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed mt-6 ${textOpacity}`}
                    >
                      {content.texts.about.paragraph}
                    </p>
                  </MotionDivDownToUp>

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
                    Advogado há 12 anos nas áreas do Direito Criminal,
                    Administrativo e Civil/ Empresarial:
                    <br />
                    <br />
                    • Atuante em Compliance e LGPD há 4 anos
                    <br />
                    • Certificações CPC-A (LEC/ FGV) e CEHCC (ESENI/ ARC)
                    <br />
                    • Bacharel em Direito pela USCS
                    <br />
                    • Pós-graduação em Ciências Criminais PUC
                    <br />
                    • Presidente da Comissão de Direito Constitucional e
                    Secretário da Comissão de Compliance da OAB Santo André/SP
                    <br />
                  </p>

                  <a
                    href={content.texts.links.linkedin}
                    target="_blank"
                    className="flex gap-2 items-center w-fit font-secondFont mt-4 text-white py-2 px-4 bg-primaryLight rounded-full hover:scale-95 transition-all duration-500 cursor-pointer"
                  >
                    <span>
                      <Linkedin width={18} />
                    </span>
                    LinkedIn
                  </a>
                </MotionDivDownToUp>

                {/* Lista de benefícios */}
                <MotionDivDownToUp>
                  {benefits && (
                    <div className="space-y-4">
                      {[
                        {
                          title: "Defesa estratégica desde a primeira hora",
                          desc: "Atuação imediata para proteger sua liberdade em cada decisão do caso.",
                        },
                        {
                          title: "Transparência Real ",
                          desc: "Você sabe exatamente o que pode acontecer, os riscos envolvidos e os próximos passos.",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg ${iconBg} mt-1`}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h1 className={`font-bold font-secondFont ${text}`}>
                              {item.title}
                            </h1>
                            <p
                              className={`text-sm font-secondFont font-light ${textOpacity}`}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </MotionDivDownToUp>

                {showGlobalButtonsLps && (
                  <MotionDivDownToUp>
                    <div className="desktop1:flex flex-col gap-4 pt-4 w-fit justify-center items-start m-auto desktop1:m-0 hidden">
                      <ButtonReflexo
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                          </svg>
                        }
                        link={content.texts.links.ctaWhatsapp}
                        label={content.texts.about.ctaButtonText}
                        bgClass={
                          colorMode === "defaultDark" || colorMode === "light"
                            ? defaultButtonThemes.light
                            : defaultButtonThemes.dark
                        }
                        className={`clickevent`}
                      />
                      <ButtonReflexo
                        id="ligar"
                        icon={<Phone width={20} />}
                        link={`tel:${content.texts.infos.phone}`}
                        label="Emergência? Ligue agora!"
                        colorMode={colorMode}
                        className="text-white mx-auto desktop1:m-0"
                      />
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>

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
                      src={content.texts.about.imagem.img}
                      alt={content.texts.about.imagem.alt}
                      className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1rem]"
                      width={621}
                      height={829}
                    />
                  </div>
                </div>
              </MotionDivDownToUp>

              {showGlobalButtonsLps && (
                <div className="flex flex-col gap-4 w-fit justify-center items-center mx-auto desktop1:hidden">
                  <ButtonReflexo
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                      </svg>
                    }
                    link={content.texts.links.ctaWhatsapp}
                    label={content.texts.about.ctaButtonText}
                    colorMode={colorMode}
                    className={`clickevent`}
                  />
                  <ButtonReflexo
                    id="ligar"
                    icon={<Phone width={20} />}
                    link={`tel:${content.texts.infos.phone}`}
                    label="Emergência? Ligue agora!"
                    colorMode={colorMode}
                    className="text-white"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-wrap mx-auto gap-8 justify-center desktop1:gap-2 desktop1:justify-between desktop1:mt-4 desktop2:mt-8">
              <div className="max-w-[90%] desktop1:max-w-[32%] font-secondFont flex flex-col text-start items-start gap-2 bg-primaryDark p-4 rounded-lg h-fit">
                <span>
                  <Target className="size-[30px] text-white" />
                </span>
                <h1 className={`text-white`}>Missão</h1>
                <p className="text-[12px] text-corOutrosTextosBranca opacity-80">
                  Usar o conhecimento prático em advocacia criminal e
                  administrativa para promover a integridade ética e garantir a
                  segurança jurídica às pessoas e aos empreendedores em todo o
                  cenário brasileiro, levando a expertise de grandes empresas
                  adaptadas aos pequenos negócios.
                </p>
              </div>

              <div className="max-w-[90%] desktop1:max-w-[32%] font-secondFont flex flex-col text-start items-start gap-2 bg-primaryDark p-4 rounded-lg h-fit">
                <span>
                  <Eye className="size-[30px] text-white" />
                </span>
                <h1 className={`text-white`}>Visão</h1>
                <p className="text-[12px] text-corOutrosTextosBranca opacity-80">
                  Ser o principal agente de disseminação da cultura de
                  conformidade e integridade para micro e pequenos empresários
                  na Grande São Paulo até 2030, construindo um ambiente de
                  negócios mais justo e seguro.
                </p>
              </div>

              <div className="max-w-[90%] desktop1:max-w-[32%] font-secondFont flex flex-col text-start items-start gap-2 bg-primaryDark p-4 rounded-lg h-fit">
                <span>
                  <Gem className="size-[30px] text-white" />
                </span>
                <h1 className={`text-white`}>Valores</h1>
                <p className="text-[12px] text-corOutrosTextosBranca opacity-80">
                  Todas nossas ações são guiadas por princípios inegociáveis:
                  <br />
                  <br />
                  <div className="text-[12px] flex ">
                    <ul className="flex flex-col gap-1 text-start">
                      <li>
                        • Ética: fazer o certo mesmo quando não tiver alguém
                        olhando.
                      </li>
                      <li>
                        • Transparência: Clareza total em processos e
                        comunicações.
                      </li>
                      <li>
                        • Lealdade: Compromisso com os interesses do cliente.
                      </li>
                      <li>
                        • Adaptabilidade (Ju 柔): Flexibilidade para encontrar a
                        solução de compliance mais adequada ao seu negócio.
                      </li>
                      <li>
                        • Eficiência (Seiryoku Zen'yo 精力善用): Máxima entrega
                        com mínimo desperdício de recursos.
                      </li>
                      <li>
                        • Prosperidade Mútua (Jita Kyoei 自他共栄): Crescimento
                        junto com clientes e parceiros.
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* Modal */}
          <Dialog
            className="font-secondFont bg-white p-4 rounded-md"
            closeIcon={<X size={20} />}
            header={
              <span className="font-secondFont px-4">
                {content.texts.about.titleModal}
              </span>
            }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "50vw" }}
            breakpoints={{
              "4000px": "641px",
              "1024px": "641px",
              "641px": "85vw",
            }}
          >
            <div className="text-paragraph3 px-4 pb-4">
              <p className={`mt-[15px] mb-[20px] ${textOpacityModal}`}>
                {content.texts.about.modal}
              </p>
              <ButtonReflexo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
                link={content.texts.links.ctaWhatsapp}
                label={content.texts.navbar.ctaButtonText}
                bgClass={
                  colorMode === "defaultDark" || colorMode === "defaultLight"
                    ? defaultButtonThemes.light
                    : defaultButtonThemes.dark
                }
                className={`clickevent`}
              />
            </div>
          </Dialog>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default AboutNovoTemplate;
