import { Policy } from '../types/policy';
import mockPoliciesData from '../data/mockPolicies.json';

const mockPolicies: Policy[] = mockPoliciesData;

export const findPolicyByNumber = (policyNumber: string): Policy | undefined => {
  return mockPolicies.find(policy => policy.policyNumber === policyNumber);
};

export const findPolicyByHolderName = (name: string): Policy | undefined => {
  const normalizedName = name.toLowerCase().trim();
  return mockPolicies.find(policy => 
    policy.policyHolder.insuredName.toLowerCase().includes(normalizedName)
  );
};

export const savePolicy = (policy: Policy): Promise<Policy> => {
  return new Promise((resolve) => {
    // In a real application, this would be an API call
    // For now, we'll simulate a save with a delay
    setTimeout(() => {
      const index = mockPolicies.findIndex(p => p.policyNumber === policy.policyNumber);
      if (index !== -1) {
        mockPolicies[index] = policy;
      } else {
        mockPolicies.push(policy);
      }
      resolve(policy);
    }, 500);
  });
};