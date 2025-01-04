import React from 'react';
import PolicyForm from './components/PolicyForm';
import { Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Policy Management System</h1>
        </div>
        <PolicyForm />
        <footer className="text-center text-gray-600 text-sm mt-8 pb-4 space-y-1">
          <p>Copyright © 2024 - 2025 Ed Bates (TECHBLIP LLC)</p>
          <p>This software is released under the Apache-2.0 license. See the LICENSE file for details.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
