export const OPTIONS = ["Typescript", "React", "Html", "Css", "Next", "Nest"];

export const capitalizedString = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const getMessage = (data: any, value: any) => data[value]?.message;

export const patternValidation = {
  pattern: {
    value: /^.{1,8}$/,
    message: "Password must be a number with a maximum of 8 digits",
  },
};
