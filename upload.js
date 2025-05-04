const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const dataSiswa = require('./data-siswa.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadData() {
    for(const siswa of dataSiswa) {
        const nisn = siswa.NISN;
      if (!nisn) {
            console.error('Data tanpa NISN ditemukan, dilewati:', siswa);
            continue; // Skip this entry if NISN is missing
        }

        // Simpan data siswa ke Firestore
        await db.collection('siswa').doc(nisn).set(siswa);
        console.log(`Data siswa dengan NISN ${nisn} berhasil diupload.`);
    }
    console.log('Semua data siswa berhasil diupload.');
}

uploadData().catch(console.error);
// Pastikan untuk menyesuaikan nama koleksi dan struktur data sesuai kebutuhan.