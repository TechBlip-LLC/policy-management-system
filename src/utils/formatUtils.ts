export const maskSSN = (ssn: string): string => {
  // Remove any non-numeric characters
  const cleanSSN = ssn.replace(/\D/g, '');
  // Only show last 4 digits
  return `XXX-XX-${cleanSSN.slice(-4)}`;
};