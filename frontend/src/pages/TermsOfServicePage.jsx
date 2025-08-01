// src/pages/TermsOfServicePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        Terms of Service
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto prose prose-lg">
        <p className="mb-4">
          Welcome to MBTI Analyser! These Terms of Service ("Terms") govern your access to and use of our website and services. By using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using MBTI Analyser, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">2. Description of Service</h2>
        <p className="mb-4">
          MBTI Analyser provides an AI-powered tool for predicting MBTI personality types based on text input, or text extracted from audio, video, and image files. Our services are provided for informational and entertainment purposes only and should not be considered professional psychological or diagnostic advice.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">3. User Data Handling and Privacy</h2>
        <p className="mb-4">
          MBTI Analyser does not require user registration or store any personal identifying information. All data submitted for analysis (text, audio, video, images) is processed in real-time and is immediately deleted from our servers after the prediction is generated. We do not retain copies of your input data. For more details, please refer to our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">4. User Responsibilities</h2>
        <p className="mb-4">
          You agree to use our services responsibly and lawfully. You are solely responsible for the content you submit for analysis. You must not use our services to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Upload or transmit any content that is illegal, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable.</li>
          <li>Infringe upon the intellectual property rights or privacy of others.</li>
          <li>Attempt to disrupt or interfere with the security or integrity of our services.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">5. Intellectual Property</h2>
        <p className="mb-4">
          All content, features, and functionality on MBTI Analyser, including but not limited to text, graphics, logos, and software, are the exclusive property of MBTI Analyser or its licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">6. Disclaimer of Warranties</h2>
        <p className="mb-4">
          Our services are provided "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. MBTI Analyser does not warrant that the service will be uninterrupted, secure, or error-free.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">7. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall MBTI Analyser, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">8. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., the Republic of Türkiye] without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">9. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <p className="text-sm text-gray-600 mt-8">
          Last updated: August 1, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
