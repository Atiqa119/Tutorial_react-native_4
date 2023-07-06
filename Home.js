import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { firebase } from '../config/firebase';



const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.firestore()
      .collection('test')
      .onSnapshot((querySnapshot) => {
        const newTest = [];
        querySnapshot.forEach((doc) => {
          const { text, heading,discription } = doc.data();
          newTest.push({ text, heading,discription, id: doc.id });
        });
        setUsers(newTest);
      });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#BFD7ED' }}>
      <Text style={{paddingBottom:100,paddingTop:20,alignSelf:'center'}}>fetch data from firebase project</Text>
      <FlatList
        data={users}
        numColumns={1}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.testView}>
            <Text style={styles.testHeading}>
              {item.heading}
            </Text>
            <Text style={styles.testText}>
              {item.text}
            </Text>
            <Text style={styles.testdiscription}>
              {item.discription}
            </Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testView: {
    padding: 10,
    color: "white",
    backgroundColor: '#880808',
    borderWidth: 3,
    margin: 10,
    fontWeight: 'bold',
    borderRadius:20,
  },
  testHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FAF9F6',
    alignSelf: 'center',
  },
  testText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FAF9F6',
    alignSelf: 'center',
    paddingTop:10,
  },
  testdiscription:{
    fontSize: 15,
    fontWeight: '400',
    color: '#FAF9F6',
    alignSelf: 'center',
  }

});
