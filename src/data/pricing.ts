import { PricingPackage } from '../types';

export const pricingData: PricingPackage[] = [
  {
    id: 'paket-santai',
    name: 'PAKET SANTAI',
    price: 'Rp10.000',
    priceNumber: 10000,
    description: 'Cocok buat tugas yang deadlinenya masih beberapa hari ke depan.',
    features: [
      '1 tugas',
      'Pengerjaan standar',
      '1x revisi',
      'Konsultasi melalui WhatsApp',
    ],
  },
  {
    id: 'paket-cepat',
    name: 'PAKET CEPAT',
    price: 'Rp20.000',
    priceNumber: 20000,
    badge: '🔥 PALING POPULER',
    isPopular: true,
    description: 'Solusi aman buat kamu yang butuh selesai lebih awal tanpa panik.',
    features: [
      '1 tugas',
      'Prioritas pengerjaan',
      '2x revisi',
      'Konsultasi melalui WhatsApp',
    ],
  },
  {
    id: 'paket-panik',
    name: 'PAKET PANIK',
    price: 'Rp35.000',
    priceNumber: 35000,
    badge: '⚡ MODE KEPEPET',
    description: 'Waktu tinggal hitungan jam? Langsung kita kerahkan fokus penuh!',
    features: [
      'Tugas deadline dekat',
      'Prioritas tinggi',
      '2x revisi',
      'Konsultasi WhatsApp',
      'Penanganan prioritas',
    ],
  },
];
