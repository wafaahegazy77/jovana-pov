
// export const generateInvoiceId = () => {
//   return "INV-" + Math.floor(Math.random() * 1000000);
// };
export const generateInvoiceId = () => {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${day}${month}${year}${hours}${minutes}${seconds}`;
};

export const getCurrentDate = () => {
  return new Date().toLocaleString("ar-EG");
};
