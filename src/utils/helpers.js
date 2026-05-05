
export const generateInvoiceId = () => {
  return "INV-" + Math.floor(Math.random() * 1000000);
};

export const getCurrentDate = () => {
  return new Date().toLocaleString("ar-EG");
};
