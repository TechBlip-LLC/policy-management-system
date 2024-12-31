import React from 'react';
import { Search, Loader } from 'lucide-react';

interface SearchInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching?: boolean;
  placeholder?: string;
  helpText?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
  isSearching = false,
  placeholder,
  helpText
}) => {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {isSearching ? (
            <Loader className="h-4 w-4 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-4 w-4 text-gray-400" />
          )}
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 p-2.5 rounded-lg border-gray-300 border bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>
      {helpText && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};