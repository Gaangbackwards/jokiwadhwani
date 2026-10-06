import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'joki-tugas',
    title: 'Joki Tugas Wadhwani',
    description: 'Jasa bantuan menyelesaikan dan merapikan tugas Wadhwani.',
    priceFormatted: 'Mulai Rp10.000',
    priceStarting: 10000,
    iconName: 'BookOpen',
    badge: 'Paling Diminati',
  },
  {
    id: 'bantuan-essay',
    title: 'Bantuan Essay',
    description: 'Bantuan menyusun, merapikan, dan memeriksa jawaban essay.',
    priceFormatted: 'Mulai Rp10.000',
    priceStarting: 10000,
    iconName: 'FileText',
  },
  {
    id: 'bantuan-presentasi',
    title: 'Bantuan Presentasi',
    description: 'Bantuan membuat materi presentasi agar lebih rapi dan mudah dipahami.',
    priceFormatted: 'Mulai Rp15.000',
    priceStarting: 15000,
    iconName: 'Presentation',
  },
  {
    id: 'bantuan-quiz',
    title: 'Bantuan Quiz',
    description: 'Bantuan memahami dan mengerjakan soal latihan.',
    priceFormatted: 'Mulai Rp5.000',
    priceStarting: 5000,
    iconName: 'CheckCircle2',
  },
  {
    id: 'review-tugas',
    title: 'Review Tugas',
    description: 'Pengecekan tugas sebelum dikumpulkan agar lebih rapi.',
    priceFormatted: 'Mulai Rp5.000',
    priceStarting: 5000,
    iconName: 'ClipboardCheck',
  },
  {
    id: 'paket-kepepet',
    title: 'Paket Kepepet',
    description: 'Deadline sudah dekat? Gunakan layanan prioritas.',
    priceFormatted: 'Mulai Rp25.000',
    priceStarting: 25000,
    iconName: 'Flame',
    badge: 'Prioritas Kilat',
  },
];
