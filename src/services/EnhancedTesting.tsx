import React from "react";

const EnhancedTesting: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-pink-400">Enhanced Testing Automation</h1>
    <p className="mb-4 text-white/90">Discover how AI suggests and generates new test cases based on code changes—improving coverage and catching bugs early.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>Analyzes code diffs and PRs for test gaps.</li>
      <li>Auto-generates unit and integration tests.</li>
      <li>Integrates with Jest, Mocha, and other frameworks.</li>
      <li>Boosts test coverage and reliability.</li>
    </ul>
  </div>
);

export default EnhancedTesting;
