import React from 'react';
import { FormField } from '../FormField';
import { SearchInput } from '../ui/SearchInput';
import { Policy } from '../../types/policy';
import { findPolicyByHolderName } from '../../services/policyService';

interface PolicyBasicInfoProps {
  formData: Policy;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onPolicyNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching: boolean;
}

export const PolicyBasicInfo: React.FC<PolicyBasicInfoProps> = ({
  formData,
  onChange,
  onPolicyNumberChange,
  isSearching
}) => {
  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Expired', label: 'Expired' }
  ];

  const handleHolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const policy = findPolicyByHolderName(e.target.value);
    if (policy) {
      Object.entries(policy).forEach(([key, value]) => {
        const event = {
          target: {
            name: key,
            value: value
          }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Basic Policy Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SearchInput
          label="Policy Number"
          value={formData.policyNumber}
          onChange={onPolicyNumberChange}
          isSearching={isSearching}
          placeholder="Enter policy number"
          helpText="Valid range: POL-2024-00001 to POL-2024-00500"
        />
        <SearchInput
          label="Policy Holder Name"
          value={formData.policyHolder.insuredName}
          onChange={handleHolderNameChange}
          placeholder="Search by policy holder name"
        />
        <FormField
          label="Product Name"
          name="productName"
          type="text"
          value={formData.productName}
          onChange={onChange}
        />
        <FormField
          label="Issue Date"
          name="issueDate"
          type="date"
          value={formData.issueDate}
          onChange={onChange}
        />
        <FormField
          label="Policy Status"
          name="policyStatus"
          type="select"
          value={formData.policyStatus}
          onChange={onChange}
          options={statusOptions}
        />
      </div>
    </div>
  );
};