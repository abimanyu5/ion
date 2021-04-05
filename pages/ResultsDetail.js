/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
} from '@ui-kitten/components';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const ResultsDetail = ({route, navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const {id, job} = route.params;
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Interview Result"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Card style={styles.cardTitle}>
          <Text category="h2">{job}</Text>
        </Card>
        <Card style={styles.cardSub}>
          <Text category="h5">HRD Message</Text>
        </Card>
         <Layout style={styles.containerBody}>
        <Card style={styles.cardBody}>
          <Text category="h6">
            A JavaScript function is a block of code designed to perform a
            particular task. The main advantages of using functions: Code reuse:
            Define the code once, and use it many times. Use the same code many
            times with different arguments, to produce different results.
          </Text>
          <Text style={styles.textAccepted} category="h4">
            Accepted
          </Text>
        </Card>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  cardTitle: {
    flex: 0,
    margin: 0,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#6257C7',
  },
  cardSub: {
    flex: 0,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: '#5555',
  },
  cardBody: {
    flex: 3,
    margin: 0,
  },
  button: {
    margin: 2,
    width: '100%',
    height: 80,
  },
  textAccepted: {
    marginTop: 15,
    color: '#1fb54c',
  },
});

export default ResultsDetail;
