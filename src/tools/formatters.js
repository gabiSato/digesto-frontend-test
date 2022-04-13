export function formatPrice(number) {
  if (typeof number !== "number") return;

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
