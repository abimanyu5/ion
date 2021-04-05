/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';
import SearchInput from '../components/SearchInput';
import Cards from '../components/Cards';

const Results = ({navigation}) => {
  const navigateDetails = (id, job) => {
    navigation.navigate('ResultsDetail', {
      id: id,
      job: job,
    });
  };

  const bankData = [
    {
      id: 1,
      jobName: 'Front-End Engineer',
      jobDescription: 'Front-End Engineer',
      announcement: '01 December 2021',
    },
    {
      id: 2,
      jobName: 'Back-End Engineer',
      jobDescription: 'Back-End Engineer',
      announcement: '02 December 2021',
    },
    {
      id: 3,
      jobName: 'Full-Stack Engineer',
      jobDescription: 'Full-Stack Engineer',
      announcement: '03 December 2021',
    },
    {
      id: 4,
      jobName: 'DevOps Engineer',
      jobDescription: 'DevOps Engineer',
      announcement: '04 December 2021',
    },
    {
      id: 5,
      jobName: 'AI Engineer',
      jobDescription: 'AI Engineer',
      announcement: '05 December 2021',
    },
    {
      id: 6,
      jobName: 'Big Data Engineer',
      jobDescription: 'Big Data Engineer',
      announcement: '06 December 2021',
    },
  ];

  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobName: 'Front-End Engineer',
      jobDescription: 'Front-End Engineer',
      announcement: '01 December 2021',
    },
    {
      id: 2,
      jobName: 'Back-End Engineer',
      jobDescription: 'Back-End Engineer',
      announcement: '02 December 2021',
    },
    {
      id: 3,
      jobName: 'Full-Stack Engineer',
      jobDescription: 'Full-Stack Engineer',
      announcement: '03 December 2021',
    },
    {
      id: 4,
      jobName: 'DevOps Engineer',
      jobDescription: 'DevOps Engineer',
      announcement: '04 December 2021',
    },
    {
      id: 5,
      jobName: 'AI Engineer',
      jobDescription: 'AI Engineer',
      announcement: '05 December 2021',
    },
    {
      id: 6,
      jobName: 'Big Data Engineer',
      jobDescription: 'Big Data Engineer',
      announcement: '06 December 2021',
    },
  ]);

  const filterData = data => {
    let currentJobs = [...jobs];
    let newJobs = currentJobs.filter(job => job.jobName === data);
    if (newJobs.length > 0) {
      setJobs(newJobs);
    } else {
      setJobs(bankData);
    }
  };

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
