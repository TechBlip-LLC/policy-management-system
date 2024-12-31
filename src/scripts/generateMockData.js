import { faker } from '@faker-js/faker';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const POLICY_COUNT = 500;

const generatePolicyNumber = (index) => {
  const year = new Date().getFullYear();
  const sequence = String(index + 1).padStart(5, '0');
  return `POL-${year}-${sequence}`;
};

const generateRandomDate = (start, end) => {
  return faker.date.between({ from: start, to: end }).toISOString().split('T')[0];
};

const PRODUCTS = [
  'Term Life Insurance',
  'Whole Life Insurance',
  'Universal Life Insurance',
  'Variable Life Insurance',
  'Final Expense Insurance'
];

const OCCUPATIONS = [
  'Software Engineer',
  'Teacher',
  'Doctor',
  'Lawyer',
  'Accountant',
  'Sales Representative',
  'Business Owner',
  'Nurse',
  'Construction Worker',
  'Chef'
];

const RELATIONSHIPS = [
  'Spouse',
  'Child',
  'Parent',
  'Sibling',
  'Other'
];

const generatePolicy = (index) => {
  const issueDate = generateRandomDate(new Date(2020, 0, 1), new Date());
  const policyTerm = faker.number.int({ min: 10, max: 30 });
  const endDate = new Date(issueDate);
  endDate.setFullYear(endDate.getFullYear() + policyTerm);

  const smokingStatus = faker.helpers.arrayElement(['Smoker', 'Non-smoker']);
  const riskFactors = smokingStatus === 'Smoker' ? ['Smoking'] : [];
  const height = faker.number.int({ min: 60, max: 78 }); // 5'-6'6"
  const weight = faker.number.int({ min: 100, max: 300 });

  const gender = faker.person.sex();
  const firstName = faker.person.firstName(gender);
  const lastName = faker.person.lastName();

  return {
    policyNumber: generatePolicyNumber(index),
    productName: faker.helpers.arrayElement(PRODUCTS),
    issueDate,
    policyStatus: faker.helpers.arrayElement(['Active', 'Pending', 'Inactive', 'Expired']),
    
    premiumAmount: faker.number.float({ min: 50, max: 1000, precision: 0.01 }),
    coverageAmount: faker.number.int({ min: 100000, max: 1000000, precision: 10000 }),
    policyTerm,
    paymentFrequency: faker.helpers.arrayElement(['Monthly', 'Quarterly', 'Semi-Annual', 'Annual']),
    nextPaymentDate: generateRandomDate(new Date(), new Date(2025, 0, 1)),
    policyEndDate: endDate.toISOString().split('T')[0],
    cashValue: faker.number.float({ min: 0, max: 50000, precision: 0.01 }),
    loanBalance: faker.number.float({ min: 0, max: 10000, precision: 0.01 }),
    
    agentName: faker.person.fullName(),
    agentCode: faker.string.alphanumeric({ length: 6, casing: 'upper' }),
    designatedBeneficiary: faker.person.fullName(),
    beneficiaryRelationship: faker.helpers.arrayElement(RELATIONSHIPS),
    contingentBeneficiary: faker.person.fullName(),
    
    policyHolder: {
      insuredName: `${firstName} ${lastName}`,
      dateOfBirth: generateRandomDate(new Date(1950, 0, 1), new Date(2000, 0, 1)),
      gender,
      ssn: faker.string.numeric(9),
      occupation: faker.helpers.arrayElement(OCCUPATIONS),
      email: faker.internet.email({ firstName, lastName }),
      phone: faker.phone.number('(###) ###-####'),
      address: faker.location.streetAddress(true)
    },
    
    medicalInfo: {
      smokingStatus,
      height,
      weight,
      preExistingConditions: riskFactors
    },
    
    riders: {
      accidentalDeath: faker.datatype.boolean(),
      disabilityWaiver: faker.datatype.boolean(),
      criticalIllness: faker.datatype.boolean(),
      termConversion: faker.datatype.boolean()
    },
    
    riskClass: faker.helpers.arrayElement(['Preferred Plus', 'Preferred', 'Standard Plus', 'Standard', 'Substandard']),
    underwritingDecision: faker.helpers.arrayElement(['Approved', 'Pending', 'Declined']),
    underwritingDate: generateRandomDate(new Date(2020, 0, 1), new Date())
  };
};

const generateMockData = () => {
  const policies = Array.from({ length: POLICY_COUNT }, (_, index) => generatePolicy(index));
  const outputPath = join(__dirname, '..', 'data', 'mockPolicies.json');
  
  // Ensure the data directory exists
  const dataDir = join(__dirname, '..', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  fs.writeFileSync(outputPath, JSON.stringify(policies, null, 2));
  console.log(`Generated ${POLICY_COUNT} mock policies in ${outputPath}`);
};

generateMockData();