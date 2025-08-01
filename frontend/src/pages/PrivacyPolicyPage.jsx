// src/pages/PrivacyPolicyPage.jsx
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        Privacy Policy
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto prose prose-lg">
        <p className="mb-4">
          Your privacy is paramount to us at MBTI Analyser. We are committed to providing a secure and transparent service. Our core principles are:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>We do not require user accounts or collect any personal identifying information.</li>
          <li>We do not store any of your input data (text, audio, video, or images) after processing.</li>
          <li>We aim for full transparency on how your data is handled for the purpose of providing our service.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Information Handling</h2>
        <p className="mb-4">
          MBTI Analyser operates on a strict "no data storage" policy for user-submitted content.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Input Data (Text, Audio, Video, Image):</h3>
        <p className="mb-4">
          When you submit text, or upload audio, video, or image files for MBTI analysis, this data is processed in real-time by our backend server.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Text Input:</strong> Text directly entered into the analysis tool is processed in memory, including any necessary translation to English, and is not stored on our servers.</li>
          <li><strong>File Uploads (Audio, Video, Image):</strong> Uploaded files are temporarily stored on our server solely for the purpose of processing and extracting text for analysis. This extracted text is then processed in memory, including translation to English if needed, for prediction. Immediately after the MBTI prediction is generated and sent back to you, these temporary files and any extracted/translated text are automatically and permanently deleted from our server. We do not retain copies of your uploaded media or the processed text.</li>
          <li>The extracted text from audio, video, or images is processed in memory for prediction and is also not stored persistently.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Personal Accounts:</h3>
        <p className="mb-4">
          MBTI Analyser does not feature user registration or login. Therefore, we do not collect or store any personal account information such as usernames, email addresses, or passwords.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">Automatically Collected Information:</h3>
        <p className="mb-4">
          Like most websites, our web servers may automatically collect standard, non-identifying log information such as your IP address, browser type, and access times. This data is used for general website analytics, to ensure proper functioning of our service, and to diagnose technical issues. This information is aggregated and cannot be used to personally identify you.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">How We Use Information</h2>
        <p className="mb-4">
          The information processed (your input data) is used exclusively to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Provide you with your MBTI personality type prediction.</li>
          <li>Improve the accuracy and performance of our MBTI prediction model (this involves aggregate, anonymized data analysis, not individual user data).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Sharing Information</h2>
        <p className="mb-4">
          We do not sell, rent, or share any of your personal data or input content with third parties. Given our "no data storage" policy, there is no user data to share.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Service Providers:</strong> We utilize standard web hosting and infrastructure services to run our website and backend. These providers may have access to transient data necessary for the operation of the service (e.g., temporary file storage during processing), but they are contractually bound to handle data securely and in accordance with our privacy principles.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Security</h2>
        <p className="mb-4">
          We implement robust security measures to protect the integrity and confidentiality of your data during transmission and processing. While no system is entirely foolproof, our commitment to not storing your input data significantly minimizes privacy risks.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We will post any changes on this page, and we encourage you to review it regularly.
        </p>

        <p className="text-sm text-gray-600 mt-8">
          Last updated: August 1, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
