export const normalizedText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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
