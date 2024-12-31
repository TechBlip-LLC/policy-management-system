import React from 'react';
import { FormField } from '../FormField';
import { Policy } from '../../types/policy';
import { maskSSN } from '../../utils/formatUtils';

interface PolicyHolderInfoProps {
  formData: Policy;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const PolicyHolderInfo: React.FC<PolicyHolderInfoProps> = ({
  formData,
  onChange
}) => {
  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Store the raw value but display masked
    const rawValue = e.target.value.replace(/\D/g, '');
    onChange({
      ...e,
      target: {
        ...e.target,
        name: 'policyHolder.ssn',
        value: rawValue
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h2 className="text-lg font-semibold text-gray-800 col-span-full">Policy Holder Information</h2>
      <FormField
        label="Insured Name"
        name="policyHolder.insuredName"
        type="text"
        value={formData.policyHolder.insuredName}
        onChange={onChange}
      />
      <FormField
        label="Date of Birth"
        name="policyHolder.dateOfBirth"
        type="date"
        value={formData.policyHolder.dateOfBirth}
        onChange={onChange}
      />
      <FormField
        label="Gender"
        name="policyHolder.gender"
        type="select"
        value={formData.policyHolder.gender}
        onChange={onChange}
        options={genderOptions}
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">SSN</label>
        <input
          type="text"
          name="policyHolder.ssn"
          value={maskSSN(formData.policyHolder.ssn)}
          onChange={handleSSNChange}
          maxLength={11}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <FormField
        label="Email"
        name="policyHolder.email"
        type="text"
        value={formData.policyHolder.email}
        onChange={onChange}
      />
      <FormField
        label="Phone"
        name="policyHolder.phone"
        type="text"
        value={formData.policyHolder.phone}
        onChange={onChange}
      />
    </div>
  );
};