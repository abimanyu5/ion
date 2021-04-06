/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';
import SearchInput from '../components/SearchInput';
import Cards from '../components/Cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Results = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout
        style={{
          padding: 10,
          backgroundColor: '#a503fc',
          height: 200,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <Text style={styles.text} category="h1">
          Interview Result
        </Text>
        <Text style={styles.text} category="h6">
          Find your job
        </Text>
        <SearchInput onFilter={data => filterData(data)} />
      </Layout>
      <ScrollView>
        <Layout style={{padding: 10}}>
          {jobs &&
            jobs.map(job => {
              return (
                <Cards
                  tipe="cardresult"
                  key={job.id}
                  move={() => navigateDetails(job.id, job.jobName)}
                  jobName={job.jobName}
                  jobApplyDueDate={job.announcement}
                />
              );
            })}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});

export default Results;
