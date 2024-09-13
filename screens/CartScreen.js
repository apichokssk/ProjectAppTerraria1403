import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Terraria',
      price: '220 ฿',
      totalReviews: '1,057,990',
      recentReview: 'Very Positive',
      gameInfo: 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!',
      platforms: ['logo-windows', 'logo-apple', 'logo-playstation'],
      tags: ['Open World Survival Craft', 'Sandbox', 'Survival', '2D'],
    },
    {
      id: 2,
      name: 'Terraria',
      price: '220 ฿',
      totalReviews: '1,057,990',
      recentReview: 'Very Negative',
      gameInfo: 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!',
      platforms: ['logo-windows', 'logo-apple', 'logo-playstation'],
      tags: ['Open World Survival Craft', 'Sandbox', 'Survival', '2D'],
    }
  ]);

  const removeItem = (id) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        onPress: () => {
          setCartItems(cartItems.filter(item => item.id !== id));
        }
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cart Items */}
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image
            source={require('../img/terra.png')} // Replace with the actual image path
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productReviews}>
              ALL REVIEWS: <Text style={styles.reviewCount}>{item.totalReviews}</Text>
            </Text>
            <Text style={styles.productReviews}>
              RECENT REVIEWS: <Text style={item.recentReview === 'Very Positive' ? styles.positiveReview : styles.negativeReview}>
                {item.recentReview}
              </Text>
            </Text>
            <Text style={styles.gameInfo}>{item.gameInfo}</Text>

            {/* Platforms */}
            <View style={styles.platforms}>
              {item.platforms.map((platform, index) => (
                <Icon key={index} name={platform} size={20} color="#fff" style={styles.platformIcon} />
              ))}
            </View>

            {/* Tags */}
            <View style={styles.tagsContainer}>
              {item.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>

            {/* Remove Button */}
            <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      ))}

      {/* All Product Section */}
      <View style={styles.allProductContainer}>
        <Text style={styles.allProductText}>All Product here ({cartItems.length})...</Text>
      </View>

      {/* Buy Button */}
      <TouchableOpacity style={styles.buyButton} onPress={() => Alert.alert('Purchase', 'Proceeding to Checkout')}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    position: 'relative',
  },
  productImage: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productReviews: {
    color: '#aaa',
    fontSize: 12,
  },
  reviewCount: {
    color: '#ccc',
  },
  positiveReview: {
    color: '#2ecc71',
  },
  negativeReview: {
    color: '#e74c3c',
  },
  gameInfo: {
    color: '#bbb',
    fontSize: 12,
    marginVertical: 5,
  },
  platforms: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  platformIcon: {
    marginRight: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  tag: {
    color: '#fff',
    backgroundColor: '#444',
    padding: 5,
    borderRadius: 5,
    fontSize: 10,
    marginRight: 5,
  },
  removeButton: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    width: 80,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  productPrice: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  allProductContainer: {
    padding: 20,
    alignItems: 'center',
  },
  allProductText: {
    color: '#aaa',
    fontSize: 16,
    fontStyle: 'italic',
  },
  buyButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartScreen;
