/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import emailjs from "emailjs-com";
import {
  User,
  Phone,
  Mail,
  FileText,
  DollarSign,
  ListChecks,
  Calendar,
  AlertTriangle,
  Send,
  MessageSquare,
} from "lucide-react";
import ButtonReflexo from "./ButtonReflexo";
import content from "../../content/content";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contractInfo, setContractInfo] = useState("");
  const [type, setType] = useState("");
  const [financedValue, setFinancedValue] = useState("");
  const [installments, setInstallments] = useState("");
  const [paidInstallments, setPaidInstallments] = useState("");
  const [installmentValue, setInstallmentValue] = useState("");
  const [lateInstallments, setLateInstallments] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendToEmail = () => {
    setIsSubmitting(true);
    const validationErrors = {};

    // if (!name) validationErrors.name = "O campo Nome é obrigatório.";
    // if (!phone) validationErrors.phone = "O campo Telefone é obrigatório.";
    // if (!email) validationErrors.email = "O campo Email é obrigatório.";
    if (!contractInfo)
      validationErrors.contractInfo =
        "O campo Informações do contrato é obrigatório.";
    if (!type) validationErrors.type = "O campo Tipo é obrigatório.";
    if (!financedValue)
      validationErrors.financedValue =
        "O campo Valor Financiado é obrigatório.";
    if (!installments)
      validationErrors.installments =
        "O campo Quantidade de Parcelas é obrigatório.";
    if (!paidInstallments)
      validationErrors.paidInstallments =
        "O campo Quantidade de parcelas pagas é obrigatório.";
    if (!installmentValue)
      validationErrors.installmentValue =
        "O campo Valor da Parcela é obrigatório.";
    if (!lateInstallments)
      validationErrors.lateInstallments =
        "O campo Parcelas em atraso é obrigatório.";
    if (!message) validationErrors.message = "O campo Mensagem é obrigatório.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name,
      phone,
      email,
      contractInfo,
      type,
      financedValue,
      installments,
      paidInstallments,
      installmentValue,
      lateInstallments,
      message,
    };

    emailjs
      .send(
        "service_gik4w8p", // substitua pelo seu Service ID
        "template_o4kc0ak", // substitua pelo seu Template ID
        templateParams,
        "8bJXn-qPMOzTraXbd", // substitua pela sua Public Key
      )
      .then(
        () => {
          alert("Mensagem enviada por email com sucesso!");
          setIsSubmitting(false);
          // Limpar campos
          setName("");
          setPhone("");
          setEmail("");
          setContractInfo("");
          setType("");
          setFinancedValue("");
          setInstallments("");
          setPaidInstallments("");
          setInstallmentValue("");
          setLateInstallments("");
          setMessage("");
          setErrors({});
        },
        (error) => {
          alert("Erro ao enviar email: " + error.text);
          setIsSubmitting(false);
        },
      );
  };

  const sendToWhatsApp = () => {
    setIsSubmitting(true);

    const validationErrors = {};

    // Só a mensagem é obrigatória
    if (!message) validationErrors.message = "O campo Mensagem é obrigatório.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const phoneWhatsApp = "5571993064270";

    const text = `
Nova mensagem enviada pelo site.

Tipo: ${type || "Não informado"}
Nome: ${name || "Não informado"}
Telefone: ${phone || "Não informado"}
E-mail: ${email || "Não informado"}

Mensagem: ${message}
`;

    const url = `https://wa.me/${phoneWhatsApp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // limpa só depois de enviar
    setType("");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Entre em Contato</h2>
      <p className="text-center text-gray-400 mb-6">
        Preencha o formulário abaixo e entraremos em contato
      </p>

      {/* Assunto */}
      <div className="mb-4">
        <label className="block font-light mb-1">
          Assunto <span className="text-primaryLight">*</span>
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">Selecione o assunto</option>
          <option value="Vendas e Informações Comerciais">
            Vendas e Informações Comerciais
          </option>
          <option value="Dúvidas sobre LGPD">
            Dúvidas ou Solicitações sobre LGPD
          </option>
          <option value="Canal de Denúncias">
            Canal de Denúncias (Ética e Conduta)
          </option>
        </select>
      </div>

      {/* Nome */}
      <div className="mb-4">
        <label className="block font-light mb-1">
          <p className="flex items-center gap-2">
            <User width={18} /> Nome{" "}
            <span className="text-primaryLight">*</span>
          </p>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block font-light mb-1">
          <p className="flex items-center gap-2">
            <Mail width={18} /> Email{" "}
            <span className="text-primaryLight">*</span>
          </p>{" "}
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* WhatsApp */}
      <div className="mb-4">
        <label className="block font-light mb-1">
          <p className="flex items-center gap-2">
            <Phone width={18} /> WhatsApp{" "}
            <span className="text-primaryLight">*</span>
          </p>{" "}
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(00) 00000-0000"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Mensagem */}
      <div className="mb-2">
        <label className="block font-light mb-1">
          <p className="flex items-center gap-2">
            <MessageSquare width={18} /> Mensagem{" "}
            <span className="text-primaryLight">*</span>
          </p>{" "}
          {errors.message && (
            <p className="text-red-500 mt-2">{errors.message}</p>
          )}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          maxLength={1000}
          className="w-full border rounded-lg px-3 py-2 h-28 resize-none"
          required
        />
        <div className="text-right text-sm text-gray-400">
          {message.length}/1000 caracteres
        </div>
      </div>

      {/* Botão */}
      <button
        onClick={sendToWhatsApp}
        disabled={isSubmitting}
        className="mt-6 w-full bg-primaryLight hover:scale-90 duration-500 transition-all text-white py-3 rounded-lg flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <p className="flex gap-2 items-center">
            <span>
              <Send width={18} />
            </span>
            Enviar Mensagem
          </p>
        )}
      </button>

      <p className="text-xs text-center text-gray-400 mt-4">
        Ao enviar este formulário, você concorda com nossa{" "}
        <span className="text-primaryLight cursor-pointer">
          Política de Privacidade
        </span>
      </p>
    </div>
  );
};

export default WhatsappForm;
