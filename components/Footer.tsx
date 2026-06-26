
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-12 px-4 mt-auto">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-6 text-slate-500 text-xs md:text-sm leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-700 mb-1">Corporate Turnaround Centre Pte Ltd</h4>
            <p>
              An AI Powerhouse democratizing elite turnaround strategy anywhere, anytime. Incorporated in 2008. 
              Corporate Turnaround Centre and all its associated platforms provide management consultancy information 
              for educational use only and are not a licensed financial advisor.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-700 mb-2">Support the Mission</h4>
            <p className="mb-3">
              Sustaining this legacy requires ongoing server costs. We invite your support through a Sustainability Contribution:
            </p>
            <a 
              href="https://www.paypal.com/ncp/payment/435RXVXTDUCZL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition-colors mb-4"
            >
              Make a Contribution via PayPal
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border-t border-slate-200 pt-6">
            <div>
              <span className="font-bold text-slate-700 mr-2">Email:</span>
              <a href="mailto:admin@corporateturnaroundcentre.com" className="hover:text-accent transition-colors">admin@corporateturnaroundcentre.com</a>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-slate-700">Websites:</span>
              <a href="https://www.corporateturnaroundcentre.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.corporateturnaroundcentre.com</a>
              <span className="text-slate-300">|</span>
              <a href="https://www.miketeng.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.miketeng.com</a>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-amber-800">
            <span className="font-bold mr-2">Disclaimer:</span>
            AI is subject to “hallucinations.” Verified strategic decisions and outcomes remain your sole responsibility. 
            We disclaim all liability for financial losses.
          </div>

          <div className="pt-4 text-slate-400">
            © 2026 Corporate Turnaround Centre. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
