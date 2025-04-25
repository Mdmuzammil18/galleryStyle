import React, { useEffect, useRef } from "react";

const codeLines = [
  "const ticket = {",
  "  subject: \"Login issue\",",
  "  description: \"User can't access dashboard\"",
  "};",
  "",
  "// Call your AI categorization endpoint",
  "const category = await fetch('/api/ai/categorize', {",
  "  method: 'POST',",
  "  body: JSON.stringify(ticket)",
  "}).then(res => res.json());",
  "",
  "// Use the AI result in workflow",
  "if (category === 'Authentication') {",
  "  escalateTo('Auth Team');",
  "}",
];

const CodingTemplate: React.FC = () => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    // Optionally, scroll animation for code typing effect
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#181F2C] to-[#21214d] rounded-xl shadow-2xl border border-blue-900/30 p-5 w-full max-w-md mx-auto md:mx-0 text-left relative overflow-hidden">
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="w-3 h-3 bg-red-400 rounded-full inline-block" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
        <span className="w-3 h-3 bg-green-400 rounded-full inline-block" />
      </div>
      <pre
        ref={codeRef}
        className="mt-8 text-xs md:text-sm font-mono text-blue-100 whitespace-pre leading-relaxed animate-typewriter"
        style={{ minHeight: 120 }}
      >
        {codeLines.map((line, i) => (
          <div key={i} className="animate-typewriter-line" style={{ animationDelay: `${i * 0.3}s` }}>
            {line}
          </div>
        ))}
      </pre>
      <style>{`
        @keyframes typewriter-line {
          from { width: 0; opacity: 0.3; }
          to { width: 100%; opacity: 1; }
        }
        .animate-typewriter-line {
          overflow: hidden;
          white-space: nowrap;
          display: block;
          width: 100%;
          animation: typewriter-line 0.9s steps(30, end) forwards;
        }
      `}</style>
    </div>
  );
};

export default CodingTemplate;
