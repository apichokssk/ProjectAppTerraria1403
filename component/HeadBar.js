import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HeaderBar({ navigation }) {  // Receive the navigation prop
  return (
    <View style={{ backgroundColor: '#333', width: '100%', height: 60, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: 10 }}>
      {/* Logo Section */}
      <View style={{ flex: 1 }}>
        <Image
          source={require('../img/logo.png')}
          style={{ width: '80%', height: 50 }}
        />
      </View>

      {/* Icon Section */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* Cart Icon with Navigation */}
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={24} color="#00cf66" style={{ marginRight: 10 }} />
        </TouchableOpacity>

        {/* Profile Icon */}
        <Icon name="person-outline" size={24} color="#00cf66" />
      </View>
    </View>
  );
}
