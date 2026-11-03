import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const statBadge = ({ label, hitung, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 14,
        width: '90%',
      }}
    >
      <Text style={{ color: '#1269cc', fontSize: 19 }}>{label}</Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          marginVertical: 2,
          color: '#780000',
        }}
      >
        {hitung}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#51eefc',
          paddingVertical: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#303030', fontWeight: '700' }}>
          Tambah Poin Garansi Servis
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default statBadge;
