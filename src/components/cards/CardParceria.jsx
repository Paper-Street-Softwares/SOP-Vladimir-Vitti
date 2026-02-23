import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, ArrowRight } from "lucide-react";

function ParceriaCard({ img, alt, text, name, role, colorMode }) {
  const [visible, setVisible] = useState(false);

  let titleColor, descrptionColor, bgCard;

  switch (colorMode) {
    case "light":
      titleColor = "text-corTitulosBranca";
      descrptionColor = "text-corOutrosTextosBranca";
      bgCard = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      break;
    case "dark":
      titleColor = "text-corTitulosPreto";
      descrptionColor = "text-corOutrosTextosPreto";
      bgCard = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      break;
    case "defaultDark":
    case "defaultLight":
      titleColor = "text-corTitulosBranca";
      descrptionColor = "text-corOutrosTextosBranca";
      bgCard = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      break;
  }

  return (
    <>
      {/* CARD */}
      <div
        className={`font-secondFont flex flex-col justify-between 
        p-[52px] 
        w-full max-w-[426px] desktop1:max-w-[800px] h-auto
        rounded-sm shadow-sm ${bgCard}`}
      >
        {/* Logo */}
        {img && (
          <div className="w-16 phone3:w-24 phone3:h-16 mb-6 bg-white p-2 rounded-sm">
            <img src={img} alt={alt} className="w-full h-full object-contain" />
          </div>
        )}

        {/* Role */}
        <div className="mb-4">
          <p
            className={`font-semibold text-paragraph4 phone3:text-title1 leading-6 ${titleColor}`}
          >
            {role}
          </p>
        </div>

        {/* Description (resumida) */}
        <div className="flex-1">
          <p
            className={`text-base leading-relaxed text-paragraph2 phone3:text-paragraph4 line-clamp-3 ${descrptionColor}`}
          >
            {text}
          </p>
        </div>

        {/* Name */}
        <div className="mt-6">
          <p className={`font-semibold text-paragraph3 ${titleColor}`}>
            {name}.
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={() => setVisible(true)}
          className={`mt-4 mr-auto text-sm hover:scale-90 transition-all duration-500 ${titleColor}`}
        >
          <p className="font-secondFont flex items-center gap-1 underline">
            {" "}
            Saiba mais{" "}
            <span>
              <ArrowRight width={18} />
            </span>
          </p>
        </button>
      </div>

      {/* MODAL */}
      <Dialog
        className="font-secondFont bg-white p-4 rounded-md"
        closeIcon={<X size={20} />}
        header={<span className="font-secondFont px-4">{role}</span>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "1024px": "70vw",
          "641px": "90vw",
        }}
      >
        <div className="px-4 pb-4">
          <p className={`text-paragraph3 leading-relaxed`}>{text}</p>
        </div>
      </Dialog>
    </>
  );
}

export default ParceriaCard;
