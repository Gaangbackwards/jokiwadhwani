import React from 'react';
import {
  BookOpen,
  FileText,
  Presentation,
  CheckCircle2,
  ClipboardCheck,
  Flame,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Presentation':
        return <Presentation className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section id="layanan" className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Katalog Solusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Berbagai pilihan bantuan untuk menemani perjalananmu menghadapi tugas.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service: ServiceItem) => {
            const isSpecial = service.id === 'paket-kepepet' || service.id === 'joki-tugas';

            return (
              <div
                key={service.id}
                className={`relative group bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isSpecial
                    ? 'border-blue-200/90 shadow-md shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300'
                    : 'border-slate-200/80 shadow-xs hover:shadow-lg hover:shadow-slate-200/60 hover:border-slate-300'
                }`}
              >
                {/* Optional Badge */}
                {service.badge && (
                  <div className="absolute top-5 right-5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        service.id === 'paket-kepepet'
                          ? 'bg-amber-100 text-amber-700 border border-amber-200/80'
                          : 'bg-blue-100 text-blue-700 border border-blue-200/80'
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                      service.id === 'paket-kepepet'
                        ? 'bg-amber-50 text-amber-600'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer of Card: Price & Action */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Biaya
                    </span>
                    <span className="text-base font-extrabold text-slate-900 tabular-nums">
                      {service.priceFormatted}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-all shadow-xs group-hover:bg-blue-600 cursor-pointer"
                  >
                    <span>Pesan Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
