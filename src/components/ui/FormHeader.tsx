import React from 'react';
import { Search } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface FormHeaderProps {
  title: string;
  subtitle: string;
  status?: 'Active' | 'Inactive' | 'Pending' | 'Expired';
}

export const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle, status }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-white" />
            <h1 className="text-2xl font-bold text-white">{title}</h1>
          </div>
          <p className="mt-2 text-blue-100">{subtitle}</p>
        </div>
        {status && <StatusBadge status={status} />}
      </div>
    </div>
  );
};