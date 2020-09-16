import moment from 'moment';

export const isEmptyObj = (obj): boolean => {
  return obj !== null && Object.entries(obj).length === 0 && obj.constructor === Object;
};

export const trimAndConvertToLower = (str: string): string => {
  return str.trim().toLocaleLowerCase();
};

export const areEqualStrings = (str: string, compareWith: string): boolean => {
  return trimAndConvertToLower(str) === trimAndConvertToLower(compareWith);
};

export const getFormattedDate = (timestamp: number | Date, withoutDash = false) => {
  if (!timestamp) {
    return '';
  }

  return moment(+timestamp).format(!withoutDash ? 'DD-MMM-YYYY' : 'DD MMM YYYY');
};