import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderBar from '../component/HeadBar';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar
        barStyle="light-content"  // Light content (white text/icons)
        backgroundColor="#1c1c1e"  // Background color matching the header
      />
      <ScrollView>
      {/* Header */}
      <HeaderBar navigation={navigation} />

      {/* Discover Section */}
      <View style={styles.discoverSection}>
        <Text style={styles.discoverTitle}>Discover our Product</Text>
        <View style={styles.searchBox}>
          <Icon name="search" size={24} color="#2ecc71" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Games..."
            placeholderTextColor="#fff"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <Text style={styles.searchHint}>Find any game you want</Text>
      </View>

      {/* Banner */}
      <Image
        source={require('../img/Fairy.gif')} // Use require for local image
        style={styles.banner1}
      />

      {/* Recommended Section */}
      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Video Game</Text>

        {/* Touchable Game Card */}
        <TouchableOpacity
          style={styles.gameCard}
          onPress={() => navigation.navigate('ProductDetail')}  // Navigate to ProductDetail
        >
          <Image
            source={require('../img/terra.png')} // Use require for local image
            style={styles.banner}
          />
          <View style={styles.gameDetails}>
            <Text style={styles.gameTitle}>Terraria</Text>
            <Text style={styles.gameInfo}>
              Game Info: Dig, fight, explore, build! Nothing is impossible in this action-packed adventure.
            </Text>
            <Text style={styles.reviews}>
              RECENT REVIEWS: <Text style={styles.positiveReview}>Very Positive (8,939)</Text>
            </Text>
            <Text style={styles.reviews}>
              ALL REVIEWS: <Text style={styles.overwhelminglyPositiveReview}>Overwhelmingly Positive (102,340)</Text>
            </Text>
            <View style={{flexDirection:'row'}}>
              <Icon name="logo-windows" size={24} color="#fff" />
              <Icon name="logo-apple" size={24} color="#fff" />
              <Icon name="logo-playstation" size={24} color="#fff" />
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
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
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  discoverSection: {
    padding: 16,
  },
  discoverTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#fff',
  },
  searchHint: {
    color: '#888',
    fontSize: 14,
    marginTop: 10,
  },
  banner: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  banner1: {
    width: '100%',
    height: 250,
  },
  recommendedSection: {
    padding: 16,
  },
  recommendedTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameCard: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
  },
  gameImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  gameDetails: {
    flex: 1,
    marginLeft: 10,
  },
  gameTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameInfo: {
    color: '#bbb',
    fontSize: 14,
    marginVertical: 8,
  },
  reviews: {
    color: '#aaa',
    fontSize: 12,
  },
  positiveReview: {
    color: '#2ecc71',
  },
  overwhelminglyPositiveReview: {
    color: '#1abc9c',
  },
  playButton: {
    backgroundColor: '#28a745',
    borderRadius: 4,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
