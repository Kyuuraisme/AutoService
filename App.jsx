import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import VehicleHeader from './src/components/vehicleHeader';
import StatBadge from './src/components/statBadge';
import InspectionItemCard from './src/components/inspectionItemCard';

const App = () => {
  const dataKendaraan = [
    {
      id: 1,
      platNomor: '12345678',
      modelKendaraan: 'Toyota Avanza',
      namaPemilik: 'Neena pakai e',
      carImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mEKsXoW8u9VVa88EpIYfEu8oQueWKF3j_JzhwTnDUA&s=10',
    },
  ];
  const dataSparepart = [
    {
      id: 1,
      NamaSparepart: 'Filter Oli',
      LevelUrgensi: 'Aman',
      Catatan: 'Filter oli dalam kondisi baik',
    },
  ];
  const [Kendaraan] = useState(dataKendaraan);
  const [hitung, setHitung] = useState(0);
  const [namaSparepart, setNamaSparepart] = useState('');
  const [catatan, setCatatan] = useState('');
  const [listInspeksi, setListInspeksi] = useState(dataSparepart);

  const tambahCatatanServis = () => {
    setListInspeksi([
      ...listInspeksi,
      {
        id: Date.now(),
        NamaSparepart: namaSparepart,
        LevelUrgensi: 'Perlu Ganti',
        Catatan: catatan,
      },
    ]);
    setNamaSparepart('');
    setCatatan('');
  };
  const tambahPoinGaransiServis = () => {
    setHitung(hitung + 1);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: '19%', padding: 16, backgroundColor: '#ffffff' }}>
        {Kendaraan.map(kendaraan => (
          <VehicleHeader
            key={kendaraan.id}
            PlatNomor={kendaraan.platNomor}
            ModelKendaraan={kendaraan.modelKendaraan}
            NamaPemilik={kendaraan.namaPemilik}
            carImageUrl={kendaraan.carImageUrl}
          />
        ))}
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          backgroundColor: '#1269cc',
          height: '80%',
          width: '98%',
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          paddingTop: 50,
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <StatBadge
            label="Poin Garansi Servis"
            hitung={hitung}
            onPress={tambahPoinGaransiServis}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 10,
            marginLeft: 16,
            color: '#ffffff',
          }}
        >
          Pemeriksaan Suku Cadang
        </Text>

        <TextInput
          value={namaSparepart}
          onChangeText={setNamaSparepart}
          placeholder="Nama komponen/sparepart"
          style={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#dfe3e8',
            borderRadius: 8,
            alignSelf: 'center',
            marginBottom: 10,
            width: '90%',
            height: 46,
            paddingHorizontal: 12,
          }}
        />
        <TextInput
          value={catatan}
          onChangeText={setCatatan}
          placeholder="Catatan pemeriksaan"
          style={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#dfe3e8',
            borderRadius: 8,
            alignSelf: 'center',
            marginBottom: 10,
            width: '90%',
            height: 46,
            paddingHorizontal: 12,
          }}
        />

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 12 }}>
          <TouchableOpacity
            onPress={tambahCatatanServis}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#ffc54a',
              borderRadius: 8,
              height: 46,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#303030', fontWeight: '700' }}>
              Tambah Catatan Servis
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 2 }}>
          {listInspeksi.map(item => (
            <InspectionItemCard
              key={item.id}
              NamaSparepart={item.NamaSparepart}
              LevelUrgensi={item.LevelUrgensi}
              Catatan={item.Catatan}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
