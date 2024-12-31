import React from 'react';

type StatusType = 'Active' | 'Inactive' | 'Pending' | 'Expired';

interface StatusBadgeProps {
  status: StatusType;
}

const statusStyles = {
  Active: 'bg-green-100 text-green-800 border-green-200',
  Inactive: 'bg-gray-100 text-gray-800 border-gray-200',
  Pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Expired: 'bg-red-100 text-red-800 border-red-200'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusStyles[status]}`}>
      {status}
    </span>
  );
};