import { format } from "date-fns";

export const getLocalizedDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return format(d, "PPP");
};

export const getLocalizedTime = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return format(d, "p");
};

export const getDate = (date) => {
  const d = new Date(date);
  return format(d, "d");
};
