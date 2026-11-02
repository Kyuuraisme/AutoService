import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const statBadge = ({ label, hitung, onPress }) => {
  return (
    <View style={{
      backgroundColor: '#ffffff',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      padding: 12,
    }}>
      <Text style={{ color: '#455a64' }}>{label}</Text>
      <Text style={{ fontSize: 28, fontWeight: '700', marginVertical: 4 }}>
        {hitung}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#409500',
          borderRadius: 8,
          paddingVertical: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '700' }}>
          Tambah Poin Garansi Servis
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default statBadge