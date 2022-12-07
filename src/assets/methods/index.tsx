import { toast } from "react-toastify";

export const normalizedText = (text: string) => {
  if (text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
};

export const formatPrices = (value: number) => {
  if (value) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
};

export const deliveryDate = (date?: Date) => {
  if (date) {
    return date.toLocaleDateString("pt-br", { dateStyle: "long" });
  } else {
    let newDate = new Date()
      .toLocaleDateString("pt-br", { dateStyle: "long" })
      .split(" ");
    let day = newDate.shift();

    return `${Number(day) + 7} ${[...newDate].join(" ").replace(/,/gi, "")}`;
  }
};

export const handleErrorMessages = (message: string) => {
  if (message) {
    const errorCode = message.split(" ")[0];
    if (errorCode === "[4000]") {
      return toast.error(
        "[4000]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4001]") {
      return toast.error(
        "[4001]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4002]") {
      return toast.error(
        "[4002]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4003]") {
      return toast.error(
        "[4003]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4004]") {
      return toast.error(
        "[4004]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4005]") {
      return toast.error(
        "[4005]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4006]") {
      return toast.error(
        "[4006]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4007]") {
      return toast.error(
        "[4007]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4008]") {
      return toast.error(
        "[4008]Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4009]") {
      return toast.error("Já existe um usuário com este e-mail.");
    } else if (errorCode === "[4010]") {
      return toast.error(
        "Números não são válidos nos campos de nome e sobrenome."
      );
    } else if (errorCode === "[4011]") {
      return toast.error("E-mail inválido.");
    } else if (errorCode === "[4012]") {
      return toast.error("Verifique se o e-mail e a senha estão corretos.");
    } else if (errorCode === "[4013]") {
      return toast.error("Você já adicionou este item ao carrinho.");
    } else if (errorCode === "[4014]") {
      return toast.error("Seu carrinho está vazio.");
    } else if (errorCode === "[4015]") {
      return toast.error("Nenhum endereço para entrega foi cadastrado.");
    } else if (errorCode === "[4016]") {
      return toast.error(
        "Erro interno da aplicação. Por favor, contacte o administrador do sistema."
      );
    } else if (errorCode === "[4017]") {
      return toast.error(
        "Seu token de acesso expirou. Por favor, faça o login novamente."
      );
    } else if (errorCode === "[4018]") {
      return toast.error("Você não possui autorização para esta ação.");
    }
  }
};
