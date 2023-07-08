import { format, parseISO } from "date-fns";

export const getFormatDate = (date: string) => {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, "yyyy.MM.dd");
  return formattedDate;
};
