import React from 'react';
import {
  Zap,
  BookOpen,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  FileCheck2,
  Smile,
} from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#layanan');
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="beranda"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>⚡ Bantuan Tugas • Cepat • Praktis</span>
            </div>

            {/* Headlines */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Tugas Wadhwani Numpuk?
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 tracking-tight leading-[1.15]">
                Biar Kami Bantu Beresin.
              </h2>
            </div>

            {/* Subtitle & Tagline */}
            <div className="space-y-2 max-w-xl">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Daripada pusing sendirian menghadapi deadline, kirim detail tugasmu dan
                konsultasikan kebutuhanmu bersama kami.
              </p>
              <p className="text-xs sm:text-sm font-medium text-amber-700 bg-amber-50/80 border border-amber-200/60 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                <span>Karena deadline tidak mengenal kata kasihan. 😭</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 cursor-pointer text-base"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#layanan"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl shadow-xs hover:border-slate-300 transition-all cursor-pointer text-base"
              >
                <span>Lihat Layanan</span>
              </a>
            </div>

            {/* Demo Notice */}
            <p className="text-xs text-slate-400 italic">
              * Website ini merupakan proyek demo.
            </p>

            {/* 3 Value Highlight Cards */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-800">⚡ Pengerjaan Cepat</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Bantuan sesuai kebutuhan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-800">📚 Berbagai Jenis Tugas</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Essay, presentasi, quiz, dan lainnya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-800">💬 Konsultasi Mudah</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Langsung melalui WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
                {/* Header of mock window */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    Wadhwani Portal • Workspace
                  </span>
                </div>

                {/* Illustration Scene */}
                <div className="py-6 flex flex-col items-center text-center">
                  {/* Modern SVG Illustration of Student with Laptop, Clock & Papers */}
                  <div className="relative w-full max-w-[320px] aspect-[4/3] flex items-center justify-center">
                    <svg
                      viewBox="0 0 400 300"
                      className="w-full h-full drop-shadow-sm select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Desk surface */}
                      <rect x="30" y="240" width="340" height="12" rx="6" fill="#E2E8F0" />
                      <line x1="80" y1="252" x2="80" y2="290" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
                      <line x1="320" y1="252" x2="320" y2="290" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />

                      {/* Stack of Wadhwani Module Papers */}
                      <rect x="50" y="200" width="70" height="40" rx="4" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
                      <rect x="46" y="206" width="70" height="34" rx="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
                      <path d="M54 216 H96 M54 222 H85 M54 228 H102" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
                      
                      {/* Coffee Cup with Steam */}
                      <rect x="290" y="210" width="22" height="30" rx="5" fill="#F59E0B" />
                      <path d="M312 218 C318 218 318 228 312 228" stroke="#D97706" strokeWidth="3" fill="none" />
                      <path d="M296 202 C296 196 299 194 299 190" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
                      <path d="M304 200 C304 194 307 192 307 188" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />

                      {/* Student Body */}
                      {/* Chair */}
                      <rect x="160" y="140" width="80" height="100" rx="16" fill="#E2E8F0" />

                      {/* Head & Hair */}
                      <circle cx="200" cy="110" r="32" fill="#FBBF24" />
                      {/* Hair */}
                      <path d="M172 108 C172 80 228 80 228 108 C228 92 216 84 200 84 C184 84 172 92 172 108 Z" fill="#1E293B" />
                      {/* Glasses */}
                      <circle cx="190" cy="112" r="8" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                      <circle cx="210" cy="112" r="8" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                      <line x1="198" y1="112" x2="202" y2="112" stroke="#1E293B" strokeWidth="2.5" />
                      {/* Smile */}
                      <path d="M194 126 C198 130 202 130 206 126" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />

                      {/* Torso / Hoodie */}
                      <path d="M165 145 C175 138 225 138 235 145 L245 220 H155 L165 145 Z" fill="#2563EB" />
                      {/* Hoodie string */}
                      <path d="M195 145 V170 M205 145 V170" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />

                      {/* Laptop Base and Screen */}
                      <rect x="140" y="170" width="120" height="70" rx="6" fill="#1E293B" />
                      <rect x="145" y="175" width="110" height="60" rx="4" fill="#0EA5E9" />
                      {/* Laptop Screen Content - Chart / Code */}
                      <path d="M155 190 L175 182 L195 200 L220 185 L240 195" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <rect x="155" y="210" width="40" height="6" rx="3" fill="#E0F2FE" />
                      <rect x="205" y="210" width="40" height="6" rx="3" fill="#38BDF8" />

                      {/* Hands typing */}
                      <ellipse cx="160" cy="235" rx="12" ry="8" fill="#FBBF24" />
                      <ellipse cx="240" cy="235" rx="12" ry="8" fill="#FBBF24" />

                      {/* Deadline Alert Floating Icon */}
                      <g transform="translate(290, 60)">
                        <circle cx="20" cy="20" r="24" fill="#FEE2E2" />
                        <circle cx="20" cy="20" r="18" fill="#EF4444" />
                        <path d="M20 12 V20 L24 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      </g>

                      {/* Success / Checkmark Floating Icon */}
                      <g transform="translate(60, 70)">
                        <circle cx="20" cy="20" r="22" fill="#DCFCE7" />
                        <circle cx="20" cy="20" r="16" fill="#22C55E" />
                        <path d="M15 20 L19 24 L26 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>

                  {/* Dynamic checklist preview card inside hero */}
                  <div className="w-full mt-2 bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-left space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <FileCheck2 className="w-4 h-4 text-blue-600" />
                        Status Modul Tugas Wadhwani
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                        100% Siap Submit
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full w-full"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Jawaban Essay Rapi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Presentasi PPT Siap</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-slate-800">Deadline Terkejar!</p>
                    <p className="text-[10px] text-slate-500">Tidur nyenyak tanpa overthinking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
