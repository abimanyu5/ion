/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import {Layout, Text, Card, Divider, Button} from '@ui-kitten/components';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {
  const [bankData, setBankData] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [userID, setUserID] = useState('');
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  const navigateDetails = (userID, id, cv,dob,email,fullname) => {
    navigation.navigate('EditProfile', {
      userID: userID,
      id: id,
      cv: cv,
      dob: dob,
      email: email,
      fullname: fullname,
    });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('uid');
      if (value !== null) {
        // value previously stored
        // console.log(value);
        setUserID(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getInterviews = async () => {
    var snapshot = await firestore()
      .collection('candidates')
      .onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          const {cv, dob, email, fullname} = doc.data();
          list.push({
            id: doc.id,
            cv: cv,
            dob: dob,
            email: email,
            fullname: fullname,
          });
          console.log(list);
        });
        console.log(list);
        setInterviews(list);
        setBankData(list);
      });
  };

  useEffect(() => {
    getData();
    getInterviews();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Layout style={styles.header} />
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <Text style={styles.name}>John Doe</Text>

        {interviews &&
          interviews.map(interview => {
            return (
              <Card style={styles.card}>
                <Text style={styles.textLabel}>Name</Text>
                <Text style={styles.text}>{interview.fullname}</Text>
                <Divider />

                <Text style={styles.textLabel}>DOB</Text>
                <Text style={styles.text}>{interview.email}</Text>
                <Divider />

                <Text style={styles.textLabel}>Email</Text>
                <Text style={styles.text}>{interview.email}</Text>
                <Divider />

                <Text style={styles.textLabel}>CV</Text>
                <Image style={styles.avatar} source={interview.cv} />
                <Divider />
                <Text style={styles.textLabel}>Password</Text>
                <Text style={styles.text}>******</Text>

                <Button
                  style={styles.button}
                  appearance="outline"
                  onPress={navigateDetails}
                  status="primary">
                  Edit
                </Button>
              </Card>
            );
          })}
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingBottom: 20,
    backgroundColor: '#6155a6',
    height: 175,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  card: {
    backgroundColor: '#ffff',
    position: 'absolute',
    marginTop: 205,
    marginRight: 20,
    marginLeft: 20,
    height: 540,
    width: 350,
    borderRadius: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
    position: 'absolute',
    marginTop: 130,
    alignSelf: 'center',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  text: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  textLabel: {
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
  },
  button: {
    margin: 5,
    width: '100%',
    height: 50,
    borderRadius: 40,
  },
});
export default Profile;
