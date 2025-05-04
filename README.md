# Firebase Firestore Data Upload Project

## Bahasa Indonesia

### Deskripsi Proyek
Proyek ini bertujuan untuk mengupload data siswa dalam format JSON ke Firebase Firestore secara otomatis menggunakan script Node.js dengan Firebase Admin SDK. Data siswa berisi informasi lengkap seperti NISN, nama, tanggal lahir, nilai, dan status kelulusan.

### Fitur
- Upload data JSON siswa ke koleksi Firestore bernama `siswa`  
- Setiap dokumen Firestore menggunakan NISN sebagai ID unik  
- Mudah diadaptasi untuk data lain dengan format serupa  

### Cara Penggunaan
1. Pastikan Anda sudah memiliki project Firebase dan file `serviceAccountKey.json` dari Firebase Console.  
2. Simpan file JSON data siswa sebagai `data.json` di folder proyek.  
3. Install dependencies dengan perintah:  

npm install


4. Jalankan script upload:  
node upload.js


5. Data akan otomatis terupload ke Firestore.  

### Struktur Folder
upload-firestore/
├── data.json
├── serviceAccountKey.json (jangan di-commit ke Git)
├── upload.js
├── package.json
└── package-lock.json




## English

### Project Description
This project aims to upload student data in JSON format to Firebase Firestore automatically using a Node.js script with Firebase Admin SDK. The student data includes complete information such as NISN, name, birth date, grades, and graduation status.

### Features
- Upload student JSON data to Firestore collection named `siswa`  
- Each Firestore document uses NISN as a unique ID  
- Easily adaptable for other similar formatted data  

### How to Use
1. Make sure you have a Firebase project and the `serviceAccountKey.json` file from Firebase Console.  
2. Save the student JSON data file as `data.json` in the project folder.  
3. Install dependencies by running:  
npm install


4. Run the upload script:  
node upload.js


5. The data will be automatically uploaded to Firestore.  

### Folder Structure
upload-firestore/
├── data.json
├── serviceAccountKey.json (do not commit to Git)
├── upload.js
├── package.json
└── package-lock.json