import React, { useState } from 'react';
import { Mic, FileText, Settings, User, LogOut } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const documentTypes = [
  'Process Design',
  'Solution Design',
  'Architectural Diagram',
  'Solution Diagram',
  'Data Model',
  'Test Cases'
];

export default function Dashboard() {
  const [isRecording, setIsRecording] = useState(false);
  const [convertedText, setConvertedText] = useState('');
  const [selectedDocType, setSelectedDocType] = useState(documentTypes[0]);
  const { isDarkMode } = useTheme();
  const { user, logout } = useAuth();

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
  };

  const handleGenerate = () => {
    // Add document generation logic here
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-gray-50'}`}>
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`${isDarkMode ? 'bg-dark-surface' : 'bg-white'} shadow-sm`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">{user?.email}</div>
              <button
                onClick={logout}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <LogOut className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className={`${isDarkMode ? 'bg-dark-surface' : 'bg-white'} rounded-lg shadow p-6`}>
              <div className="flex items-center justify-center mb-6">
                <button
                  onClick={toggleRecording}
                  className={`p-4 rounded-full ${
                    isRecording
                      ? 'bg-red-100 text-red-600'
                      : isDarkMode
                      ? 'bg-blue-900 text-blue-300'
                      : 'bg-blue-100 text-blue-600'
                  } hover:opacity-80 transition-colors`}
                >
                  <Mic className="h-8 w-8" />
                </button>
              </div>
              <textarea
                value={convertedText}
                onChange={(e) => setConvertedText(e.target.value)}
                className={`w-full h-40 p-4 rounded-lg ${
                  isDarkMode
                    ? 'bg-dark-bg border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                    : 'border focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                placeholder="Speak or type your documentation content here..."
              />
            </div>

            <div className={`${isDarkMode ? 'bg-dark-surface' : 'bg-white'} rounded-lg shadow p-6`}>
              <label className="block text-sm font-medium mb-2">
                Document Type
              </label>
              <select
                value={selectedDocType}
                onChange={(e) => setSelectedDocType(e.target.value)}
                className={`block w-full rounded-md ${
                  isDarkMode
                    ? 'bg-dark-bg border-gray-600'
                    : 'border-gray-300'
                } focus:ring-blue-500 focus:border-blue-500`}
              >
                {documentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FileText className="mr-2 h-5 w-5" />
                Generate Document
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}