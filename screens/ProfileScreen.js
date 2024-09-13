import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderBar from '../component/HeadBar';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPrivacyEnabled, setIsPrivacyEnabled] = useState(true);
  const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] = useState(true);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Icon name="person-circle-outline" size={100} color="#fff" />
          <Icon name="log-out-outline" size={30} color="#fff" style={styles.logoutIcon} />
        </View>
        <Text style={styles.userName}>Kendo Simmala</Text>
        <Text style={styles.userDetails}>User Name : Kendo Simmala</Text>
        <Text style={styles.userDetails}>Email : Kendo1234@gmail.com</Text>
        <Text style={styles.userDetails}>Password : ******</Text>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        <View style={styles.settingRow}>
          <Icon name="moon" size={24} color="#fff" />
          <Text style={styles.settingText}>Light/Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
          />
        </View>

        <View style={styles.settingRow}>
          <Icon name="lock-closed-outline" size={24} color="#fff" />
          <Text style={styles.settingText}>Privacy Policy</Text>
          <Switch
            value={isPrivacyEnabled}
            onValueChange={setIsPrivacyEnabled}
          />
        </View>

        <View style={styles.settingRow}>
          <Icon name="mail-outline" size={24} color="#fff" />
          <Text style={styles.settingText}>Email Notification</Text>
          <Switch
            value={isEmailNotificationEnabled}
            onValueChange={setIsEmailNotificationEnabled}
          />
        </View>

        <View style={styles.settingRow}>
          <Icon name="notifications-outline" size={24} color="#fff" />
          <Text style={styles.settingText}>Notification</Text>
          <Switch
            value={isNotificationEnabled}
            onValueChange={setIsNotificationEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e', 
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  logoutIcon: {
    position: 'absolute',
    top: 0,
    right: -30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',  // Text color set to white
  },
  userDetails: {
    fontSize: 16,
    color: '#fff',  // Text color set to white
  },
  settingsContainer: {
    marginTop: 30,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',  // Border color darkened to fit the dark theme
  },
  settingText: {
    fontSize: 16,
    color: '#fff',  // Text color set to white
  },
});

export default ProfileScreen;
