
export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};
