import { Text, View, Image } from 'react-native'
import React from 'react'

const vehicleHeader = ({ PlatNomor, ModelKendaraan, NamaPemilik, carImageUrl }) => {
  return (
    <View style={{backgroundColor: '#e8f5e9',borderRadius: 12,padding: 12,flexDirection: 'row',alignItems: 'center',}}>
      <Image
        source={{ uri: carImageUrl }}
        style={{ width: 96, height: 72, borderRadius: 8 }}
      />
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: '700' }}>{PlatNomor}</Text>
        <Text style={{ fontSize: 16, marginTop: 2 }}>{ModelKendaraan}</Text>
        <Text style={{ marginTop: 4, color: '#455a64' }}>
          Pemilik: {NamaPemilik}
        </Text>
      </View>
    </View>
  )
}

export default vehicleHeader