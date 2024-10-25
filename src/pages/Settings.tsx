import React from 'react';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { user } = useAuth();

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-gray-50'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`${isDarkMode ? 'bg-dark-surface' : 'bg-white'} shadow-sm`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-semibold">Settings</h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className={`bg-white dark:bg-dark-surface rounded-lg shadow p-6 ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
              <h2 className="text-lg font-medium mb-4">Appearance</h2>
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isDarkMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className={`mt-6 bg-white dark:bg-dark-surface rounded-lg shadow p-6 ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
              <h2 className="text-lg font-medium mb-4">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <div className="mt-1">
                    <input
                      type="email"
                      disabled
                      value={user?.email || ''}
                      className={`block w-full rounded-md ${
                        isDarkMode
                          ? 'bg-dark-bg border-gray-600'
                          : 'bg-gray-100 border-gray-300'
                      } disabled:cursor-not-allowed`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}