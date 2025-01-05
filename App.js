import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate('EditProfileScreen');
  };

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  const toggleDashboard = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity style={styles.hamburger} onPress={toggleDashboard}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>

      {/* Dashboard UI */}
      {isDashboardVisible && (
        <View style={styles.dashboard}>
          <TouchableOpacity style={styles.dashboardButton}>
            <Text style={styles.dashboardButtonText}>Home Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardButton}>
            <Text style={styles.dashboardButtonText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardButton}>
            <Text style={styles.dashboardButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.profileHeader}>
        <Image
          source={require('./assets/images/venom.jpg')}
          style={styles.image}
        />
        <View style={styles.datejoined}>
          <Text style={styles.join}>Joined</Text>
          <Text style={styles.date}>1 Year Ago</Text>
        </View>
        <Text style={styles.name}>REX</Text>
        <Text style={styles.surname}>ARNADO</Text>
        <Text style={styles.bio}>
          Front-end Developer | Digital Artist | TTRPG DM
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f9f9f9',
  },
  hamburger: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  hamburgerText: {
    fontSize: 30,
    color: '#303136',
  },
  dashboard: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    elevation: 5,
    zIndex: 10,
  },
  dashboardButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dashboardButtonText: {
    fontSize: 16,
    color: '#303136',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  datejoined: {
    alignSelf: 'flex-end',
    paddingRight: 30,
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: 0,
    bottom: 200,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  join: {
    opacity: 0.6,
    fontWeight: 'bold',
    fontSize: 15,
  },
  name: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  surname: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.6,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#303136',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#731728',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;
