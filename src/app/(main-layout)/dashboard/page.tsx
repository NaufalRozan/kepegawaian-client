'use client';

import { ContentLayout } from '@/components/admin-panel/content-layout';
import { DashboardBreadcrumb } from '@/components/dashboard/dashboard-breadcrumb';
import { DashboardInfo } from '@/components/dashboard/dashboard-info';
import { DashboardProfileCard } from '@/components/dashboard/dashboard-profile-card';
import { AnggotaKeluargaRow, InpasingRow, JabatanFungsionalRow, JabatanStrukturalRow, KendaraanRow, Pegawai, PenempatanRow, RiwayatPendidikanRow } from '@/components/dashboard/types';

export default function DashboardPage() {
  const pegawai: Pegawai = {
    nip: "198706172019031002",
    nama: "Budi Santoso",
    gelarDepan: "Dr.",
    gelarBelakang: "M.Sc.",
    jenisKelamin: "Laki-laki",
    agama: "Islam",
    golonganDarah: "O",
    tempatLahir: "Bandung",
    tanggalLahir: "17 Juni 1987",
    alamat: "Jl. Merdeka No. 10, Bandung",
    noHandphone: "081234567890",
    nbm: "NBM12345",
    nidn: "NIDN67890",
    nidk: "NIDK54321",
    nuptk: "NUPTK11223",
    idScholar: "scholar.budisantoso",
    idScopus: "1234567890",
    isShinta: "SHI-2025-0001",
    idGaruda: "GAR-98765",
    npwp: "12.345.678.9-012.345",
    emailPribadi: "budi.pribadi@gmail.com",
    emailUniversitas: "budi@universitas.ac.id",
    nikKependudukan: "3174123456789012",
    jabatanStruktural: "Kepala Prodi TI",
    jabatanFungsional: "Lektor Kepala",
    dokKtp: "/dokumen/ktp_budi.pdf",
    dokNbm: "/dokumen/nbm_budi.pdf",
    dokPassport: "/dokumen/passport_budi.pdf",
    dokBpjsKesehatan: "/dokumen/bpjs_kesehatan_budi.pdf",
    dokBpjsTenagakerja: "/dokumen/bpjs_tk_budi.pdf",
    dokSertifikasiDosen: "/dokumen/sertifikasi_budi.pdf",
    dokNidn: "",
    foto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  };


  // Contoh data untuk tabel Kepangkatan
  const dataKepangkatan = [
    {
      kepangkatan: "Penata Muda (III/a)",
      noSK: "820/123/2025",
      tglSK: "01 Juni 2025",
      tmt: "15 Juni 2025",
      tglAkhirKontrak: "14 Juni 2026",
      jenisSK: "Kenaikan Pangkat",
      gajiPokok: "3.020.000",
      dokumenSK: "/dokumen/sk_pangkat_820-123-2025.pdf",
      mulaiMasaKerja: true,
    },
  ];

  const dataAnggotaKeluarga: AnggotaKeluargaRow[] = [
    {
      nama: "Siti Aminah",
      tempatLahir: "Jakarta",
      agama: "Islam",
      jenisKelamin: "Perempuan",
      nik: "3174123456789012",
      pendidikan: "S1",
      hubunganKeluarga: "Istri",
      tunjanganBeras: "10 kg",
      tunjanganKeluarga: "Rp 500.000",
      potonganAsuransi: "Rp 50.000",
      tanggunganPajak: "Rp 100.000",
    },
    {
      nama: "Andi Santoso",
      tempatLahir: "Bandung",
      agama: "Kristen",
      jenisKelamin: "Laki-laki",
      nik: "3275123456789013",
      pendidikan: "SMA",
      hubunganKeluarga: "Anak",
      tunjanganBeras: "5 kg",
      tunjanganKeluarga: "Rp 250.000",
      potonganAsuransi: "Rp 25.000",
      tanggunganPajak: "Rp 50.000",
    },
  ];

  // Contoh data untuk tabel Riwayat Pendidikan
  const dataRiwayatPendidikan: RiwayatPendidikanRow[] = [
    {
      pendidikan: "S1 Teknik Informatika",
      namaInstitusi: "Universitas Indonesia",
      tahunLulus: "2010",
      dokumen: [
        {
          namaDokumen: "Ijazah S1",
          url: "/dokumen/ijazah_s1_teknik_informatika.pdf",
        },
        {
          namaDokumen: "Transkrip Nilai S1",
          url: "/dokumen/transkrip_s1_teknik_informatika.pdf",
        },
      ],
    },
    {
      pendidikan: "SMA IPA",
      namaInstitusi: "SMA Negeri 1 Jakarta",
      tahunLulus: "2006",
      dokumen: [
        {
          namaDokumen: "Ijazah SMA",
          url: "/dokumen/ijazah_sma_ipa.pdf",
        },
      ],
    },
    // Tambahkan baris lain sesuai kebutuhan…
  ];

  const dataJabatanFungsional: JabatanFungsionalRow[] = [
    {
      jabatanFungsional: "Asisten Ahli",
      noSK: "820/789/2023",
      tglSK: "05 Maret 2023",
      tmt: "15 Maret 2023",
      jenis: "Kenaikan Jabatan",
      angkaKredit: "150",
      dokumenSK: "/dokumen/sk_jafung_820-789-2023.pdf",
    },
    {
      jabatanFungsional: "Lektor",
      noSK: "820/101/2024",
      tglSK: "20 Januari 2024",
      tmt: "01 Februari 2024",
      jenis: "Penyesuaian Angka Kredit",
      angkaKredit: "200",
      dokumenSK: "/dokumen/sk_jafung_820-101-2024.pdf",
    },
  ];

  const dataInpasing: InpasingRow[] = [
    {
      kepangkatan: "Penata Muda (III/a)",
      noSK: "123/INP/2023",
      tglSK: "01 April 2023",
      tmt: "15 April 2023",
      dokumenSK: "/dokumen/inpasing_123_INP_2023.pdf",
    },
    {
      kepangkatan: "Penata Muda Tingkat I (III/b)",
      noSK: "456/INP/2024",
      tglSK: "20 Februari 2024",
      tmt: "05 Maret 2024",
      dokumenSK: "/dokumen/inpasing_456_INP_2024.pdf",
    },
  ];

  const dataJabatanStruktural: JabatanStrukturalRow[] = [
    {
      jabatanStruktural: "Kepala Jurusan Teknik Informatika",
      sk: "123/KPTS/2021",
      periodeMenjabat: "15 Jan 2021 – 14 Jan 2024",
      tunjanganTetap: "2.500.000",
      tunjanganVariable: "500.000",
      dokumenSK: "/dokumen/sk_kajur_123_KPTS_2021.pdf",
    },
    {
      jabatanStruktural: "Wakil Dekan Fakultas Teknik",
      sk: "456/KPTS/2020",
      periodeMenjabat: "01 Feb 2020 – 31 Jan 2023",
      skPemberhentian: "789/KPTS/2023",
      tmtPemberhentian: "01 Feb 2023",
      tunjanganTetap: "2.000.000",
      tunjanganVariable: "400.000",
      dokumenSK: "/dokumen/sk_wadek_456_KPTS_2020.pdf",
    },
  ];

  const dataPenempatan: PenempatanRow[] = [
    {
      unitKerja: "Fakultas Teknik",
      noSK: "001/SPT/2025",
      tglSK: "01 Januari 2025",
      tmt: "10 Januari 2025",
      dokumenSK: "/dokumen/penempatan_001_SPT_2025.pdf",
    },
    {
      unitKerja: "Program Studi Informatika",
      noSK: "002/SPT/2024",
      tglSK: "15 Maret 2024",
      tmt: "01 April 2024",
      dokumenSK: "/dokumen/penempatan_002_SPT_2024.pdf",
    },
  ];

  const dataKendaraan: KendaraanRow[] = [
    {
      namaPemilik: "Budi Santoso",
      noKendaraan: "B 1234 XYZ",
      merek: "Toyota Avanza",
      jenis: "Mobil",
      dokumen: "/dokumen/ktp_kendaraan_budi.pdf",
    },
    {
      namaPemilik: "Siti Aminah",
      noKendaraan: "D 5678 ABC",
      merek: "Honda Beat",
      jenis: "Motor",
      dokumen: "/dokumen/ktp_kendaraan_siti.pdf",
    },
  ];

  return (
    <ContentLayout title="Dashboard">
      <DashboardBreadcrumb />
      <div className="mt-6 w-full space-y-6">
        <DashboardProfileCard pegawai={pegawai} />
        <DashboardInfo
          dataKepangkatan={dataKepangkatan}
          dataAnggotaKeluarga={dataAnggotaKeluarga}
          dataRiwayatPendidikan={dataRiwayatPendidikan}
          dataJabatanFungsional={dataJabatanFungsional}
          dataInpasing={dataInpasing}
          dataJabatanStruktural={dataJabatanStruktural}
          dataPenempatan={dataPenempatan}
          dataKendaraan={dataKendaraan}
        />
      </div>
    </ContentLayout>
  );
}
