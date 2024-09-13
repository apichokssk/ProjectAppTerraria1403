import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [theme, setTheme] = useState('day');  // ตั้งค่าธีมเริ่มต้นเป็น day

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'day' ? 'night' : 'day'));  // สลับธีมเมื่อกดปุ่ม
  };

  // เลือกภาพพื้นหลังตามธีมที่เลือก
  const backgroundImage = theme === 'day'
    ? require('../img/app-BG 1.png')  // เปลี่ยนเป็น path ของภาพ daytime
    : require('../img/app-BG-2 1.png');  // เปลี่ยนเป็น path ของภาพ nighttime

  // เลือกไอคอนตามธีมที่เลือก
  const themeIcon = theme === 'day'
    ? require('../img/sun-icon.png')  // เปลี่ยนเป็น path ของไอคอนธีม daytime
    : require('../img/moon-icon.png');  // เปลี่ยนเป็น path ของไอคอนธีม nighttime

  const handleLogin = () => {
    // คุณสามารถเพิ่มการตรวจสอบข้อมูลการล็อกอินได้ที่นี่
    navigation.navigate('Tab');  // นำไปสู่หน้า Home เมื่อกดปุ่ม Login
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* ส่วนของโลโก้ */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../img/Logo-Login 1.png')}  // เปลี่ยนเป็น path ของโลโก้
          style={styles.logo} 
        />
      </View>

      {/* ฟอร์มล็อกอิน */}
      <View style={styles.container}>
        <TextInput
          placeholder="EMAIL OR USERNAME"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="PASSWORD"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
        />
        
        {/* ตัวเลือกเพิ่มเติม */}
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        
        {/* ปุ่มล็อกอิน */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        
        {/* ลิงก์สมัครบัญชีใหม่ */}
        <TouchableOpacity>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
          </Text>
        </TouchableOpacity>

        {/* ปุ่มสลับธีมที่แสดงเป็นไอคอน */}
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggleButton}>
          <Image source={themeIcon} style={styles.themeIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40,  // เพิ่มระยะห่างระหว่างโลโก้และฟอร์มล็อกอิน
    alignItems: 'center',
  },
  logo: {
    width: 420,  // กำหนดขนาดของโลโก้
    height: 130,  // กำหนดขนาดของโลโก้
    resizeMode: 'contain',  // ปรับขนาดภาพโลโก้ให้พอดีกับพื้นที่ที่กำหนด
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',  // ความโปร่งใสของกล่อง login
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#fff',
    textAlign: 'center',
  },
  signupLink: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  themeToggleButton: {
    marginTop: 0,
    padding: 0,
    borderRadius: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  themeIcon: {
    width: 40,  // ขนาดของไอคอน
    height: 40,  // ขนาดของไอคอน
  },
});

export default LoginScreen;
