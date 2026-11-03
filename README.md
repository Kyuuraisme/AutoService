# AutoService

AutoService adalah aplikasi mobile berbasis React Native untuk mencatat informasi kendaraan dan hasil pemeriksaan suku cadang pada proses servis. Aplikasi ini menyediakan tampilan profil kendaraan, pengelolaan poin garansi servis, serta pencatatan komponen yang perlu diperiksa atau diganti.

## Fitur

- Menampilkan informasi kendaraan, pemilik, model, nomor plat, dan gambar kendaraan
- Menambahkan dan menampilkan poin garansi servis
- Menampilkan daftar hasil pemeriksaan sparepart beserta tingkat urgensi
- Menambahkan catatan servis komponen baru
- Menandai komponen baru sebagai "Perlu Ganti"
- Tampilan sederhana dan responsif menggunakan komponen React Native

## Teknologi

- React Native 0.88.1
- React 19.3.0
- React Native Safe Area Context 5.11.0
- JavaScript dan JSX
- TypeScript untuk konfigurasi pengujian
- Jest dan React Test Renderer

## Struktur Proyek

```text
AutoService/
├── App.jsx                         
├── src/
│   └── components/
│       ├── vehicleHeader.jsx       
│       ├── statBadge.jsx           
│       └── inspectionItemCard.jsx  
├── __tests__/
│   └── App.test.tsx                
├── android/                        
├── ios/                            
├── package.json
└── README.md
```

## Persyaratan

Pastikan perangkat pengembangan telah memiliki:

- Node.js 22.11.0 atau lebih baru
- npm atau Yarn
- Android Studio dan Android SDK untuk pengembangan Android
- Android Emulator atau perangkat Android dengan mode USB debugging
- Xcode dan CocoaPods untuk pengembangan iOS, khususnya pada macOS

Panduan instalasi React Native dapat dibaca di [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment).

## Instalasi

1. Masuk ke direktori proyek:

   ```sh
   cd AutoService
   ```

2. Pasang seluruh dependensi:

   ```sh
   npm install
   ```

## Menjalankan Aplikasi

### Android

1. Jalankan Android Emulator atau hubungkan perangkat Android.
2. Jalankan Metro bundler pada terminal:

   ```sh
   npm start
   ```

3. Pada terminal kedua, jalankan aplikasi:

   ```sh
   npm run android
   ```

Untuk melakukan reload aplikasi:

- Tekan <kbd>R</kbd> dua kali pada emulator
- Tekan <kbd>Ctrl</kbd> + <kbd>M</kbd> untuk membuka developer menu

### iOS

Karena pengembangan iOS memerlukan macOS, pasang CocoaPods terlebih dahulu:

```sh
bundle install
bundle exec pod install
```

Kemudian jalankan aplikasi:

```sh
npm run ios
```

## Pengujian

Menjalankan seluruh pengujian Jest:

```sh
npm test
```

Menjalankan pengujian sekali tanpa mode watch:

```sh
npm test -- --watchAll=false
```

## Lint

Periksa kualitas kode menggunakan ESLint:

```sh
npm run lint
```

## Penggunaan

1. Buka aplikasi untuk melihat informasi kendaraan.
2. Tekan **Tambah Poin Garansi Servis** untuk menambah nilai poin garansi.
3. Masukkan nama komponen pada kolom pemeriksaan suku cadang.
4. Tekan **Tambah Catatan Servis** untuk menambahkan komponen ke daftar pemeriksaan.
5. Komponen yang baru ditambahkan akan memiliki status **Perlu Ganti** beserta catatan pemeriksaan.

## Build Android

Untuk membuat APK debug:

```sh
cd android
gradlew assembleDebug
```

Hasil build dapat ditemukan di:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Referensi

- [React Native](https://reactnative.dev)
- [React Native CLI](https://github.com/react-native-community/cli)
- [React](https://react.dev)
- [Jest](https://jestjs.io)
