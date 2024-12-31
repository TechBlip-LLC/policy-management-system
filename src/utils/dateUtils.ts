export const generateRandomDate = (start: Date, end: Date): string => {
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split('T')[0];
};

export const calculateEndDate = (startDate: string, termYears: number): string => {
  const date = new Date(startDate);
  date.setFullYear(date.getFullYear() + termYears);
  return date.toISOString().split('T')[0];
};