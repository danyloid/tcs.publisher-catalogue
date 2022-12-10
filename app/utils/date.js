export const ensureDate = (date) => {
  if (!date) return null;

  if (date instanceof Date) return date;
  if (typeof date === 'string') {
    return new Date(date);
  }

  throw new Error('Argument conversion to date is not supported');
};

export const toStanardDateString = (date) => {
  return ensureDate(date).toISOString().substr(0, 10);
};
