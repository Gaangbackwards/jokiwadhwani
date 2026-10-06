import React from 'react';
import { MousePointerClick, FileEdit, Send, CheckCircle2 } from 'lucide-react';
import { StepItem } from '../types';

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      step: '01',
      title: 'Pilih Layanan',
      description: 'Pilih jenis bantuan yang kamu butuhkan.',
      iconName: 'MousePointerClick',
    },
    {
      step: '02',
      title: 'Isi Detail',
      description: 'Masukkan nama, layanan, deadline, dan detail tugas.',
      iconName: 'FileEdit',
    },
    {
      step: '03',
      title: 'Kirim ke WhatsApp',
      description: 'Data pesanan akan dikirim langsung ke WhatsApp admin.',
      iconName: 'Send',
    },
    {
      step: '04',
      title: 'Konfirmasi',
      description: 'Admin akan membalas dan mengonfirmasi pesanan.',
      iconName: 'CheckCircle2',
    },
  ];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MousePointerClick':
        return <MousePointerClick className="w-5 h-5" />;
      case 'FileEdit':
        return <FileEdit className="w-5 h-5" />;
      case 'Send':
        return <Send className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <MousePointerClick className="w-5 h-5" />;
    }
  };

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Alur Pemesanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cara Pesan
          </h2>
          <p className="text-base text-slate-600">
            Proses simpel tanpa ribet, langsung terhubung dengan admin dalam hitungan detik.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Step number badge & icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors tabular-nums font-mono">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-blue-600 border border-slate-200 group-hover:border-blue-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-all shadow-xs">
                  {getStepIcon(step.iconName)}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector dot for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
