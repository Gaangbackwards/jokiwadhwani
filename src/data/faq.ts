import { FaqItem } from '../types';

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah bisa mengerjakan tugas mendadak?',
    answer:
      'Untuk proyek demo ini, pemesanan dapat dilakukan kapan saja. Waktu pengerjaan sebenarnya akan bergantung pada kesepakatan.',
  },
  {
    id: 'faq-2',
    question: 'Berapa harga jasanya?',
    answer:
      'Mulai dari Rp5.000 tergantung jenis dan tingkat kesulitan tugas.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana cara memesan?',
    answer:
      'Pilih layanan, isi detail pesanan, kemudian kamu akan diarahkan ke WhatsApp.',
  },
  {
    id: 'faq-4',
    question: 'Apakah bisa revisi?',
    answer:
      'Setiap paket memiliki jumlah revisi yang berbeda.',
  },
  {
    id: 'faq-5',
    question: 'Apakah pembayaran sudah tersedia?',
    answer:
      'Belum. Website ini masih berupa proyek demo sehingga belum terhubung dengan sistem pembayaran.',
  },
  {
    id: 'faq-6',
    question: 'Apakah data yang dimasukkan benar-benar diproses?',
    answer:
      'Website ini hanya menggunakan local state untuk kebutuhan demo dan tidak memiliki backend/database.',
  },
];
