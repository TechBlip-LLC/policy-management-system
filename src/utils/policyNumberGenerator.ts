export const generatePolicyNumber = (index: number): string => {
  // Format: POL-YYYY-XXXXX where XXXXX is a padded sequence number
  const year = new Date().getFullYear();
  const sequence = String(index + 1).padStart(5, '0');
  return `POL-${year}-${sequence}`;
};