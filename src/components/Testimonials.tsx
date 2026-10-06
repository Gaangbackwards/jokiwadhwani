import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Suara Mahasiswa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kata Mereka
          </h2>
          <p className="text-base text-slate-600">
            Pengalaman nyata para pejuang tugas saat berhadapan dengan stopwatch deadline.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testi: TestimonialItem) => (
            <div
              key={testi.id}
              className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-blue-300" />
                </div>

                {/* Quote Body */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    — {testi.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {testi.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-400 italic">
            * Seluruh testimonial pada website ini merupakan data dummy untuk kebutuhan demo.
          </p>
        </div>
      </div>
    </section>
  );
};
