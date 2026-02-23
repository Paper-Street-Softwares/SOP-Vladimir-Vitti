import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import WhatsappForm from "../interactives/WhatsappForm";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function FormNovoTemplate({ colorMode }) {
  return (
    <SectionArea>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle="ENTRE EM CONTATO"
          title="Fale conosco com facilidade e segurança"
          subtitle="Envie sua mensagem pelo formulário e receba um atendimento claro, direto e profissional."
          colorMode={colorMode}
        />
        <MotionDivDownToUp className={`w-full`}>
          <WhatsappForm />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FormNovoTemplate;
