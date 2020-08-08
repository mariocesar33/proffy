import React from 'react';
import { View } from 'react-native';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffy disponíveis" />

      <TeacherItem />
    </View>
  );
};

export default TeacherList;