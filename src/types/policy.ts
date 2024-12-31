export interface PolicyHolder {
  insuredName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  ssn: string;
  occupation: string;
  email: string;
  phone: string;
  address: string;
}

export interface MedicalInformation {
  smokingStatus: 'Non-smoker' | 'Smoker';
  height: number; // in inches
  weight: number; // in pounds
  preExistingConditions: string[];
}

export interface RiderInformation {
  accidentalDeath: boolean;
  disabilityWaiver: boolean;
  criticalIllness: boolean;
  termConversion: boolean;
}

export interface Policy {
  // Basic Policy Info
  policyNumber: string;
  productName: string;
  issueDate: string;
  policyStatus: 'Active' | 'Inactive' | 'Pending' | 'Expired';
  
  // Financial Details
  premiumAmount: number;
  coverageAmount: number;
  policyTerm: number;
  paymentFrequency: 'Monthly' | 'Quarterly' | 'Semi-Annual' | 'Annual';
  nextPaymentDate: string;
  policyEndDate: string;
  cashValue: number;
  loanBalance: number;
  
  // People
  agentName: string;
  agentCode: string;
  designatedBeneficiary: string;
  beneficiaryRelationship: string;
  contingentBeneficiary: string;
  
  // Additional Information
  policyHolder: PolicyHolder;
  medicalInfo: MedicalInformation;
  riders: RiderInformation;
  
  // Underwriting
  riskClass: 'Preferred Plus' | 'Preferred' | 'Standard Plus' | 'Standard' | 'Substandard';
  underwritingDecision: string;
  underwritingDate: string;
}