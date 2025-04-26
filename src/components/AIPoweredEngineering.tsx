import React from "react";
import { FaRobot } from "react-icons/fa";

const AIPoweredEngineering: React.FC = () => (
  <section className="relative z-20 py-16 bg-[#131A2B] overflow-hidden">
    {/* Ultra-faint noise overlay for premium depth */}
    <div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: "url('/noise.png')", backgroundRepeat: "repeat"}} />
    {/* Abstract blurred blobs for modern effect */}
    <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30 pointer-events-none" />
    <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-30 pointer-events-none" />
    <div className="max-w-3xl mx-auto px-4 bg-black/40 rounded-2xl p-8 shadow-xl relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <FaRobot className="text-4xl text-blue-400" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          AI-Powered Engineering Transformation
        </h2>
      </div>
      <p className="text-white/80 mb-4">
        Supercharge your development workflow with a comprehensive suite of AI-driven enhancements:
      </p>
      <ol className="list-decimal list-inside space-y-3 text-white/90 pl-4">
        <li>
          <b>Automated Code Review:</b> Implement AI tools like Cursor AI to analyze pull requests for best practices, coding standards, and potential bugs. This can speed up the review process and provide consistent feedback to developers, reducing the workload on team leads.
        </li>
        <li>
          <b>Intelligent Bug Triage:</b> Use AI to analyze bug reports and categorize them based on severity, area of code, or even past issues. This can help prioritize the most critical bugs and streamline the workflow in Azure DevOps.
        </li>
        <li>
          <b>Predictive Sprint Planning:</b> Leverage AI to analyze historical sprint data, user stories, and team performance to provide insights and predictions for future sprints. This could help with better estimating task completion times and improving sprint planning.
        </li>
        <li>
          <b>Contextual Documentation Generation:</b> Use GPT-4 to automatically generate or suggest documentation based on code comments, user stories, and PR descriptions. This can help maintain up-to-date documentation with less manual effort.
        </li>
        <li>
          <b>AI-Powered Chatbots:</b> Develop a chatbot integrated with your existing systems that can assist developers with common queries about the codebase, Azure DevOps processes, or company standards. This can reduce the time spent on repetitive questions.
        </li>
        <li>
          <b>Code Quality Insights Dashboard:</b> Create a dashboard that uses AI to visualize code quality metrics, security vulnerabilities, and technical debt over time. This can guide teams in addressing issues proactively.
        </li>
        <li>
          <b>Enhanced Testing Automation:</b> Integrate AI into your testing framework to suggest new test cases based on changes in the codebase or even generate test scripts automatically, improving test coverage and efficiency.
        </li>
        <li>
          <b>Personalized Learning & Development:</b> Use AI to analyze individual developer performance and suggest tailored learning resources or projects to help them grow their skills in areas relevant to the company's needs.
        </li>
      </ol>
    </div>
  </section>
);

export default AIPoweredEngineering;
