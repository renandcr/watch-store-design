export const normalizedText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export const formatPrices = (value: number) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const deliveryDate = () => {
  const newDate = new Date().toDateString().split(" ");
  return `${Number(newDate[2]) + 7} de ${newDate[1]} ${newDate[3]}`;
};
