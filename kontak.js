import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Contact = ({ gambar, nama, email, telpon, alamat, onPress }) => {
  return (
    <TouchableOpacity style={styles.contactContainer} onPress={onPress}>
      <Image source={gambar} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{nama}</Text>
        <Text style={styles.phone}>{telpon}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.alamat}>{alamat}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    justifyContent: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  phone: {
    fontSize: 14,
    color: 'gray'
  },
  email: {
    fontSize: 14,
    color: 'gray'
  },
  alamat:{
    fontSize: 14,
    color: 'gray'
  }
});

export default Contact;
