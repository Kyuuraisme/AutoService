import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import VehicleHeader from './src/components/vehicleHeader'
import StatBadge from './src/components/statBadge'
import InspectionItemCard from './src/components/inspectionItemCard'

const App = () => {
  const [Kendaraan] = useState([
    {
      id: 1,
      platNomor: '12345678',
      modelKendaraan: 'Toyota Avanza',
      namaPemilik: 'Neena pakai e',
      carImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mEKsXoW8u9VVa88EpIYfEu8oQueWKF3j_JzhwTnDUA&s=10',
    },
  ])

  const [hitung, setHitung] = useState(0)
  const [namaSparepart, setNamaSparepart] = useState('')
  const [listInspeksi, setListInspeksi] = useState([
    {
      id: 1,
      NamaSparepart: 'Filter Oli',
      LevelUrgensi: 'Aman',
      Catatan: 'Belum perlu diganti',
    },
  ])

  const tambahCatatanServis = () => {
    const nama = namaSparepart.trim()
    if (nama === '') return

    const dataBaru = {
      id: Date.now(),
      NamaSparepart: nama,
      LevelUrgensi: 'Perlu Ganti',
      Catatan: 'Periksa dan segera lakukan penggantian',
    }

    setListInspeksi(prevList => [...prevList, dataBaru])
    setNamaSparepart('')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f7fa' ,}}>
      <View style={{ padding: 16 }}>
        {Kendaraan.map(kendaraan => (
          <VehicleHeader
            key={kendaraan.id}
            PlatNomor={kendaraan.platNomor}
            ModelKendaraan={kendaraan.modelKendaraan}
            NamaPemilik={kendaraan.namaPemilik}
            carImageUrl={kendaraan.carImageUrl}
          />
        ))}

        <View style={{ marginTop: 16 }}>
          <StatBadge
            label="Poin Garansi Servis"
            hitung={hitung}
            onPress={() => setHitung(prevHitung => prevHitung + 1)}
          />
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 10 }}>
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
              paddingHorizontal: 12,
              marginBottom: 8,
            }}
          />

          <TouchableOpacity
            onPress={tambahCatatanServis}
            style={{
              backgroundColor: '#263238',
              borderRadius: 8,
              paddingVertical: 12,
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '700' }}>
              Tambah Catatan Servis
            </Text>
          </TouchableOpacity>

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
  )
}

export default App