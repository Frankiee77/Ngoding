import React from 'react';
import { Text, View, StyleSheet, Button, Image, FlatList } from 'react-native';

const contacts = [
  {
    gambar: require('../assets/denis.jpg'),
    nama: 'Nazmi',
    email: 'nazmi@ummi.com',
    telpon: '085219571636',
    alamat: 'Ciaul Pasir',
  },
  {
    gambar: require('../assets/rick.jpg'),
    nama: 'Fino',
    email: 'fino@ummi.com',
    telpon: '085798806252',
    alamat: 'Tanjung Sari',
  },
  {
    gambar: require('../assets/simp.jpg'),
    nama: 'Utama',
    email: 'utama@ummi.com',
    telpon: '089630461568',
    alamat: 'Cianjur', 
  },
  {
    gambar: require('../assets/ijat.jpg'),
    nama: 'Feri',
    email: 'feri@ummi.com',
    telpon: '085793902926',
    alamat: 'Cigaru', 
  }
];

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image source={item.gambar} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nama}>{item.nama}</Text>
        <Button
          title="Lihat"
          onPress={() => navigation.navigate('Detail Informasi', { contact: item })}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Kontak</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  contactContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
