export const formatAddress = (str?: string) =>
  str && str.substring(0, 6) + new Array(4).join('.') + str.substring(str.length - 4, str.length);
