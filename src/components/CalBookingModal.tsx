import React from "react";
import Cal from "@calcom/embed-react";
import { createPortal } from "react-dom";

interface CalBookingModalProps {
  open: boolean;
  onClose: () => void;
}

const modalRoot = typeof window !== 'undefined' ? document.getElementById('modal-root') : null;

const CalBookingModal: React.FC<CalBookingModalProps> = ({ open, onClose }) => {
  if (!open || !modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-lg px-2 py-4" onClick={onClose}>
      <div
        className="relative z-[9999] flex flex-col md:flex-row w-full max-w-2xl rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden min-h-[320px] max-h-[90vh]"
        style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.45)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Left Panel: CTA and Value Props */}
        <div className="flex flex-col justify-center items-start p-5 md:w-1/2 w-full bg-gradient-to-br from-blue-700 via-purple-700 to-cyan-500/80 text-white min-h-[320px] max-h-[90vh]">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 font-sans">Book Your Free Consultation</h3>
          <p className="mb-3 text-base md:text-lg font-light opacity-90">Get expert insights on how to supercharge your business with AI. We'll help you identify opportunities, analyze your workflow, and deliver a personalized action plan.</p>
          <ul className="space-y-2 mb-2 text-base md:text-lg">
            <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-cyan-400/90 text-white"><svg width="12" height="12" fill="none" viewBox="0 0 16 16"><path d="M6.2 11.2l-2.4-2.4 1.1-1.1 1.3 1.3 3.3-3.3 1.1 1.1-4.4 4.4z" fill="currentColor"/></svg></span>AI Opportunity Audit</li>
            <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-cyan-400/90 text-white"><svg width="12" height="12" fill="none" viewBox="0 0 16 16"><path d="M6.2 11.2l-2.4-2.4 1.1-1.1 1.3 1.3 3.3-3.3 1.1 1.1-4.4 4.4z" fill="currentColor"/></svg></span>Workflow Analysis</li>
            <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-cyan-400/90 text-white"><svg width="12" height="12" fill="none" viewBox="0 0 16 16"><path d="M6.2 11.2l-2.4-2.4 1.1-1.1 1.3 1.3 3.3-3.3 1.1 1.1-4.4 4.4z" fill="currentColor"/></svg></span>Personalized Action Plan</li>
          </ul>
          <div className="text-xs md:text-sm opacity-80">No obligation. 100% free.</div>
        </div>
        {/* Right Panel: Cal.com Embed */}
        <div className="relative flex-1 bg-[#181c2f] p-2 md:p-5 flex items-center justify-center min-h-[320px] max-h-[90vh] overflow-y-auto">
          {/* Close Button (top right for mobile) */}
          <button
            className="absolute top-2 right-2 text-xl text-neutral-400 hover:text-white focus:outline-none md:hidden z-10"
            aria-label="Close booking modal"
            onClick={onClose}
          >
            ×
          </button>
          <Cal
            calLink="webflowai/30min"
            style={{ minHeight: 340, maxHeight: 480, width: '100%', border: 'none', background: 'transparent', maxWidth: 320 }}
          />
        </div>
        {/* Close Button (top right for desktop) */}
        <button
          className="absolute top-2 right-2 text-xl text-neutral-400 hover:text-white focus:outline-none hidden md:block z-10"
          aria-label="Close booking modal"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default CalBookingModal;
