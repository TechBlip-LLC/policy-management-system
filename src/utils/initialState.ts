import { Policy } from '../types/policy';

export const initialPolicyState: Policy = {
  policyNumber: '',
  productName: '',
  issueDate: '',
  policyStatus: 'Pending',
  
  premiumAmount: 0,
  coverageAmount: 0,
  policyTerm: 0,
  paymentFrequency: 'Monthly',
  nextPaymentDate: '',
  policyEndDate: '',
  cashValue: 0,
  loanBalance: 0,
  
  agentName: '',
  agentCode: '',
  designatedBeneficiary: '',
  beneficiaryRelationship: '',
  contingentBeneficiary: '',
  
  policyHolder: {
    insuredName: '',
    dateOfBirth: '',
    gender: 'Male',
    ssn: '',
    occupation: '',
    email: '',
    phone: '',
    address: ''
  },
  
  medicalInfo: {
    smokingStatus: 'Non-smoker',
    height: 0,
    weight: 0,
    preExistingConditions: []
  },
  
  riders: {
    accidentalDeath: false,
    disabilityWaiver: false,
    criticalIllness: false,
    termConversion: false
  },
  
  riskClass: 'Standard',
  underwritingDecision: '',
  underwritingDate: ''
};