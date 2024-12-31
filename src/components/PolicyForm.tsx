import React, { useState } from 'react';
import { Search, Save, RotateCcw } from 'lucide-react';
import { findPolicyByNumber, savePolicy } from '../services/policyService';
import { Policy } from '../types/policy';
import { PolicyBasicInfo } from './sections/PolicyBasicInfo';
import { PolicyHolderInfo } from './sections/PolicyHolderInfo';
import { FinancialDetails } from './sections/FinancialDetails';
import { StatusBadge } from './ui/StatusBadge';
import { initialPolicyState } from '../utils/initialState';
import { FormHeader } from './ui/FormHeader';
import { FormActions } from './ui/FormActions';
import { Toast } from './ui/Toast';

const PolicyForm: React.FC = () => {
  const [formData, setFormData] = useState<Policy>(initialPolicyState);
  const [isSearching, setIsSearching] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handlePolicyNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const policyNumber = e.target.value;
    setFormData(prev => ({ ...prev, policyNumber }));
    setIsSearching(true);
    
    const policy = findPolicyByNumber(policyNumber);
    if (policy) {
      setFormData(policy);
    }
    setIsSearching(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialPolicyState);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await savePolicy(formData);
      setToastMessage('Policy saved successfully!');
      setShowToast(true);
    } catch (error) {
      setToastMessage('Error saving policy. Please try again.');
      setShowToast(true);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <FormHeader 
          title="Policy Information"
          subtitle="Search by policy number or policy holder name"
          status={formData.policyStatus}
        />

        <form className="p-6 space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <PolicyBasicInfo 
                formData={formData}
                onChange={handleInputChange}
                onPolicyNumberChange={handlePolicyNumberChange}
                isSearching={isSearching}
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <PolicyHolderInfo 
                formData={formData}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <FinancialDetails 
                formData={formData}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <FormActions onReset={handleReset} onSave={handleSave} isSaving={isSaving} />
        </form>
      </div>
      {showToast && (
        <Toast 
          message={toastMessage} 
          onClose={() => setShowToast(false)} 
          type={toastMessage.includes('Error') ? 'error' : 'success'}
        />
      )}
    </div>
  );
};

export default PolicyForm;