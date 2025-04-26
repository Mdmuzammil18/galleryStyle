import React from "react";

const IntelligentBugTriage: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-red-400">Intelligent Bug Triage</h1>
    <p className="mb-4 text-white/90">See how our AI analyzes bug reports, categorizes them by severity and context, and helps your team prioritize the most critical issues in Azure DevOps or Jira.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>Natural language processing parses bug descriptions for context.</li>
      <li>Severity and affected area are automatically assigned.</li>
      <li>Duplicates and regressions are detected using historical data.</li>
      <li>Critical bugs are surfaced for immediate action.</li>
    </ul>
  </div>
);

export default IntelligentBugTriage;
