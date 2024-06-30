import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const About = ({ navigation, route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.gambar} style={styles.image} />
      <Text style={styles.name}>{contact.nama}</Text>
      <Text style={styles.email}>Email: {contact.email}</Text>
      <Text style={styles.telpon}>Telepon: {contact.telpon}</Text>
      <Text style={styles.alamat}>Alamat: {contact.alamat}</Text>
      
      <Button
        title="Kembali"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email:{
    fontSize: 18,
    marginBottom: 5 
  },
  telpon:{
    fontSize: 18,
    marginBottom: 5 
  },
  alamat:{
    fontSize: 18,
    marginBottom: 10 
  },
});

export default About;
