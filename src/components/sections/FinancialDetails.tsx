import React from 'react';
import { FormField } from '../FormField';
import { Policy } from '../../types/policy';

interface FinancialDetailsProps {
  formData: Policy;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const FinancialDetails: React.FC<FinancialDetailsProps> = ({
  formData,
  onChange
}) => {
  const frequencyOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Semi-Annual', label: 'Semi-Annual' },
    { value: 'Annual', label: 'Annual' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h2 className="text-lg font-semibold text-gray-800 col-span-full">Financial Details</h2>
      <FormField
        label="Premium Amount ($)"
        name="premiumAmount"
        type="number"
        value={formData.premiumAmount}
        onChange={onChange}
      />
      <FormField
        label="Coverage Amount ($)"
        name="coverageAmount"
        type="number"
        value={formData.coverageAmount}
        onChange={onChange}
      />
      <FormField
        label="Cash Value ($)"
        name="cashValue"
        type="number"
        value={formData.cashValue}
        onChange={onChange}
      />
      <FormField
        label="Loan Balance ($)"
        name="loanBalance"
        type="number"
        value={formData.loanBalance}
        onChange={onChange}
      />
      <FormField
        label="Payment Frequency"
        name="paymentFrequency"
        type="select"
        value={formData.paymentFrequency}
        onChange={onChange}
        options={frequencyOptions}
      />
      <FormField
        label="Next Payment Date"
        name="nextPaymentDate"
        type="date"
        value={formData.nextPaymentDate}
        onChange={onChange}
      />
    </div>
  );
};