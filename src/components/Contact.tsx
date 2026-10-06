import React from 'react';
import { MessageCircle, Instagram, Phone, ArrowUpRight, Copy } from 'lucide-react';
import { getConsultationUrl, openWhatsApp, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface ContactProps {
  onCopyPhoneSuccess?: () => void;
  onInstagramClick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyPhoneSuccess, onInstagramClick }) => {
  const handleChatWhatsApp = () => {
    openWhatsApp(getConsultationUrl());
  };

  const handleCopyNumber = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('081222634834');
    }
    if (onCopyPhoneSuccess) {
      onCopyPhoneSuccess();
    }
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-blue-900/10 text-center relative overflow-hidden">
          {/* Subtle geometric circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-amber-400/10 pointer-events-none"></div>

          <div className="relative max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>Admin Siap Merespons</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Masih Bingung?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
              Daripada bingung sendiri, langsung konsultasikan kebutuhanmu.
            </p>

            {/* Contact Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleChatWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 active:bg-slate-100 font-bold text-base rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                <span>Chat WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                onClick={() => {
                  if (onInstagramClick) onInstagramClick();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/20 text-white font-medium text-base rounded-xl transition-all cursor-pointer"
              >
                <Instagram className="w-5 h-5 text-pink-300" />
                <span>Instagram (Demo)</span>
              </button>
            </div>

            {/* Quick Number Card with Copy */}
            <div className="pt-6 flex items-center justify-center">
              <button
                type="button"
                onClick={handleCopyNumber}
                title="Salin nomor WhatsApp"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20 hover:bg-black/30 border border-white/10 text-xs sm:text-sm font-mono text-blue-100 transition-colors cursor-pointer"
              >
                <span>WhatsApp Admin: {WHATSAPP_DISPLAY}</span>
                <Copy className="w-3.5 h-3.5 text-blue-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
