import { Text, View, Image } from 'react-native';
import React from 'react';

const vehicleHeader = ({ PlatNomor, ModelKendaraan, NamaPemilik, carImageUrl,}) => {
  return (
    <View
      style={{
        backgroundColor: '#6d9ac7',
        borderRadius: 14,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#51eefc',
      }}
    >
      <Image
        source={{ uri: carImageUrl }}
        style={{ width: 96, height: 72, borderRadius: 10 }}
      />
      <View style={{ marginLeft: 14, flex: 1 }}>
        <Text style={{ fontSize: 21, fontWeight: '700', color: '#fbfbfb' }}>
          {PlatNomor}
        </Text>
        <Text style={{ fontSize: 16, marginTop: 3, color: '#303030' }}>
          {ModelKendaraan}
        </Text>
        <Text style={{ marginTop: 5, color: '#303030' }}>
          Pemilik: {NamaPemilik}
        </Text>
      </View>
    </View>
  );
};

export default vehicleHeader;
