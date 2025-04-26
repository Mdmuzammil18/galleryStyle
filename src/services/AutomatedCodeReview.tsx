import React from "react";

const AutomatedCodeReview: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-blue-400">Automated Code Review</h1>
    <p className="mb-4 text-white/90">Learn how we use AI tools like Cursor AI to analyze pull requests for best practices, coding standards, and potential bugs. Our process speeds up code review and delivers consistent, actionable feedback to your development team.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>PRs are automatically scanned for code quality and standards compliance.</li>
      <li>Potential bugs and anti-patterns are flagged in real-time.</li>
      <li>Team leads receive summarized, prioritized feedback.</li>
      <li>Integrates with your existing GitHub/GitLab workflows.</li>
    </ul>
  </div>
);

export default AutomatedCodeReview;
