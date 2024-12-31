import React from 'react';
import { Save, RotateCcw, Loader } from 'lucide-react';

interface FormActionsProps {
  onReset: () => void;
  onSave: () => void;
  isSaving?: boolean;
}

export const FormActions: React.FC<FormActionsProps> = ({ onReset, onSave, isSaving = false }) => {
  return (
    <div className="flex justify-end gap-4 pt-4">
      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
      >
        <RotateCcw className="w-4 h-4" />
        Reset
      </button>
      <button
        type="button"
        onClick={onSave}
        disabled={isSaving}
        className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSaving ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Save className="w-4 h-4" />
        )}
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
};