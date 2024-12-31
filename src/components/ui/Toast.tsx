import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: 'success' | 'error';
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  onClose, 
  type = 'success',
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';
  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <div className={`fixed bottom-4 right-4 flex items-center gap-2 p-4 rounded-lg border ${bgColor} ${textColor} ${borderColor} shadow-lg animate-slide-up`}>
      <Icon className="w-5 h-5" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};