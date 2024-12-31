import { Policy } from '../types/policy';

export const mockPolicies: Policy[] = [
  {
    policyNumber: "POL001",
    productName: "Term Life Insurance",
    issueDate: "2024-01-15",
    policyStatus: "Active",
    
    premiumAmount: 250.00,
    coverageAmount: 500000.00,
    policyTerm: 20,
    paymentFrequency: "Monthly",
    nextPaymentDate: "2024-04-15",
    policyEndDate: "2044-01-15",
    cashValue: 0,
    loanBalance: 0,
    
    agentName: "Michael Smith",
    agentCode: "MS1234",
    designatedBeneficiary: "Jane Doe",
    beneficiaryRelationship: "Spouse",
    contingentBeneficiary: "Robert Doe",
    
    policyHolder: {
      insuredName: "John Doe",
      dateOfBirth: "1980-05-15",
      gender: "Male",
      ssn: "XXX-XX-4567",
      occupation: "Software Engineer",
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      address: "123 Main St, Anytown, ST 12345"
    },
    
    medicalInfo: {
      smokingStatus: "Non-smoker",
      height: 70,
      weight: 180,
      preExistingConditions: []
    },
    
    riders: {
      accidentalDeath: true,
      disabilityWaiver: true,
      criticalIllness: false,
      termConversion: true
    },
    
    riskClass: "Preferred",
    underwritingDecision: "Approved",
    underwritingDate: "2024-01-10"
  }
];