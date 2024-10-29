import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    // Navigate to Edit Profile screen or open a modal for editing
    navigation.navigate('EditProfileScreen');
  };

  const handleLogout = () => {
    // Handle logout logic, e.g., clearing user session, navigating to login screen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('./assets/images/venom.jpg')} // Local image file
          style={styles.image}
        />
          <View style={styles.datejoined}>
            <Text style={styles.join}>Joined</Text>
            <Text style={styles.date}>1 Year Ago</Text>
          </View>
        <Text style={styles.name}>REX</Text>
        <Text style={styles.surname}>ARNADO</Text>
        <Text style={styles.bio}>Front-end Developer | Digital Artist | TTRPG DM</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
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
