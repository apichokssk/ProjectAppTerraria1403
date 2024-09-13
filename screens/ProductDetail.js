import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderBar from '../component/HeadBar';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetail = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <HeaderBar navigation={navigation} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product Details</Text>
      </View>

      {/* Product Banner */}
      <Image
        source={require('../img/pa.gif')} // Ensure the image path is correct
        style={styles.banner}
      />

      {/* Product Info */}
      <View style={styles.productInfoContainer}>
        <Image
          source={require('../img/terra.png')} // Ensure the image path is correct
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Terraria</Text>
          <Text style={styles.productPrice}>220 ฿</Text>
          <Text style={styles.reviews}>
            RECENT REVIEWS: <Text style={styles.positiveReview}>Very Positive (9,933)</Text>
          </Text>
          <Text style={styles.reviews}>
            ALL REVIEWS: <Text style={styles.overwhelminglyPositiveReview}>Overwhelmingly Positive (1,057,990)</Text>
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
              <Icon name="logo-windows" size={24} color="#fff" />
              <Icon name="logo-apple" size={24} color="#fff" />
              <Icon name="logo-playstation" size={24} color="#fff" />
            </View>
      </View>
      

      {/* Tags Section */}
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>Open World Survival Craft</Text>
        <Text style={styles.tag}>Sandbox</Text>
        <Text style={styles.tag}>Survival</Text>
        <Text style={styles.tag}>20</Text>
      </View>

      {/* About Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About this Game</Text>
        <Text style={styles.aboutDescription}>
          Dig, Fight, Explore, Build! The very world is at your fingertips as you fight for survival, fortune, and glory.
          Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, 
          machinery, and aesthetics? 
        </Text>
        {/* Screenshots */}
        <View style={styles.screenshotContainer}>
          <Image
            source={require('../img/RT.gif')} // Ensure the image path is correct
            style={styles.screenshot}
          />
          <Image
            source={require('../img/Desert.gif')} // Ensure the image path is correct
            style={styles.screenshot}
          />
          <Image
            source={require('../img/Nether.gif')} // Ensure the image path is correct
            style={styles.screenshot}
          />
        </View>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to my Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productInfoContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#333',
    borderRadius: 8,
    marginVertical: 10,
  },
  productImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#00cf66',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  reviews: {
    color: '#aaa',
    fontSize: 14,
  },
  positiveReview: {
    color: '#2ecc71',
  },
  overwhelminglyPositiveReview: {
    color: '#1abc9c',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  tag: {
    color: '#fff',
    backgroundColor: '#444',
    padding: 6,
    borderRadius: 6,
    fontSize: 12,
  },
  aboutContainer: {
    padding: 16,
    backgroundColor: '#222',
    borderRadius: 8,
    marginVertical: 10,
  },
  aboutTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutDescription: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 10,
  },
  screenshotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  screenshot: {
    width: 100,
    height: 60,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    borderRadius: 4,
    margin: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
