import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, FileText, GitFork, TestTube, Database, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: FileText,
    title: 'Process Design Documents',
    description: 'Create comprehensive process documentation with ease'
  },
  {
    icon: GitFork,
    title: 'Solution Architecture',
    description: 'Generate detailed architectural diagrams automatically'
  },
  {
    icon: Brain,
    title: 'Smart Documentation',
    description: 'AI-powered documentation generation and insights'
  },
  {
    icon: TestTube,
    title: 'Test Case Generation',
    description: 'Automatically create test cases from requirements'
  },
  {
    icon: Database,
    title: 'Data Modeling',
    description: 'Create and visualize data models effortlessly'
  }
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Documentation Made <span className="text-blue-600">Effortless</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transform your project documentation workflow with AI-powered automation. From architecture diagrams to test cases, Unsloth handles it all.
          </p>
          <button
            onClick={() => navigate('/signin')}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to streamline your documentation?
            </h2>
            <p className="text-blue-100 mb-8">
              Join thousands of teams who trust Unsloth for their documentation needs.
            </p>
            <button
              onClick={() => navigate('/signin')}
              className="px-8 py-3 text-blue-600 bg-white rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;