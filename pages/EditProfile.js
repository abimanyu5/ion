/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Layout, Card, Input, Divider, Button} from '@ui-kitten/components';

const EditProfile = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Layout style={styles.header} />
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <Text style={styles.name}>John Doe</Text>
        <Card style={styles.card}>
          <Input
            style={styles.input}
            label="Username"
            size="small"
            placeholder="Name"
          />
          <Input
            style={styles.input}
            label="Email"
            size="small"
            placeholder="Email"
          />
          <Input
            style={styles.input}
            label="DOB"
            size="small"
            placeholder="DOB"
          />
          <Input
            style={styles.input}
            label="Password"
            size="small"
            placeholder="Password"
          />
          <Button style={styles.button} appearance="outline" status="primary">
            Save
          </Button>
        </Card>
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 250,
  },
  card: {
    backgroundColor: '#bcb9c9',
    alignItems: 'center',
    marginTop: -75,
    marginRight: 20,
    marginLeft: 20,
    height: 600,
    width: 350,
    borderRadius: 20,
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
    color: '#050505',
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
  input: {
    width: 300,
    height: 55,
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
  container: {
    height: '100%',
  },
  itemCard: {
    alignItems: 'center',
    backgroundColor: '#bcb9c9',
    height: 400,
  },
  itemCard1: {
    alignItems: 'center',
    backgroundColor: '#bcb9c9',
  },
});
export default EditProfile;
