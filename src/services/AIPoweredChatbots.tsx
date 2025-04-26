import React from "react";

const AIPoweredChatbots: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-blue-300">AI-Powered Chatbots</h1>
    <p className="mb-4 text-white/90">Learn how our chatbots integrate with your systems to answer developer questions about the codebase, DevOps processes, and company standards—instantly.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>Connects to Slack, Teams, or custom portals.</li>
      <li>Answers FAQs and technical queries 24/7.</li>
      <li>Provides contextual links to docs and code.</li>
      <li>Trains on your internal knowledge base.</li>
    </ul>
  </div>
);

export default AIPoweredChatbots;
