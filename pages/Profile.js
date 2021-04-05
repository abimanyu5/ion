/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet,Image, ScrollView} from 'react-native';
import {Layout,Text, Card,  Divider, Button} from '@ui-kitten/components';

const Profile = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
          <Layout style={styles.header} />
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <Text style={styles.name}>John Doe</Text>
         <Card style={styles.card}>
         <Text style={styles.textLabel}>Name</Text>
           <Text style={styles.text}>John Doe</Text>
           <Divider />

           <Text style={styles.textLabel}>DOB</Text>
           <Text style={styles.text}>jakarta 12-12-2001</Text>
           <Divider />

           <Text style={styles.textLabel}>Email</Text>
           <Text style={styles.text}>Programmer@gmail.com</Text>
           <Divider />

            <Text style={styles.textLabel}>Age</Text>
           <Text style={styles.text}>20</Text>
           <Divider />

           <Text style={styles.textLabel}>Addres</Text>
           <Text style={styles.text}>Jl baru</Text>
           <Divider />

           <Text style={styles.textLabel}>Last Education</Text>
           <Text style={styles.text}>S1 Teknik Informatika</Text>
           <Divider />
           <Text style={styles.textLabel}>Password</Text>
           <Text style={styles.text}>******</Text>
           
           
           <Button style={styles.button} appearance="outline" status="primary">
          Edit
        </Button>
           </Card>
         
          
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header:{
    backgroundColor: '#00BFFF',
    height:250,
  },
  card:{
    backgroundColor: '#bcb9c9',
    position: 'absolute',
    marginTop:215,
    marginRight:20,
    marginLeft:20,
    height:540,
    width:350,
    borderRadius:20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30,
  },
  name:{
    fontSize:22,
    color:'#050505',
    fontWeight:'600',
    position: 'absolute',
    marginTop:170,
    alignSelf:'center',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: '#00BFFF',
    marginTop:10,
  },
  description:{
    fontSize:16,
    color: '#696969',
    marginTop:10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#00BFFF',
  },
  text:{
    marginLeft:20,
    marginTop:10,
    marginBottom:5,
  },
  textLabel:{
    marginLeft:20,
     fontSize:12,
     marginTop:10,

  },
  button: {
    margin: 5,
    width: '100%',
    height: 50,
  },
});
export default Profile;
