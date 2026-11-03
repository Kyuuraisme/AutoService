import React from 'react';
import { Text, View } from 'react-native';

const inspectionItemCard = ({ NamaSparepart, LevelUrgensi, Catatan }) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 12,
        marginBottom: 8,
        width: '90%',
        alignSelf: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', width: '90%' }}>
        <Text style={{ fontWeight: '700', flex: 1, color: '#303030' }}>{NamaSparepart}</Text>
        <Text
          style={{
            color: LevelUrgensi === 'Aman' ? '#1269cc' : '#780000',
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 4,
            fontSize: 12,
            fontWeight: '700',
            overflow: 'hidden',
          }}
        >
          {LevelUrgensi}
        </Text>
      </View>
      <Text style={{ marginTop: 8 }}>Catatan: {Catatan}</Text>
    </View>
  );
};

export default inspectionItemCard;
