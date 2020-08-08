import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      <PageHeader title="Proffy disponíveis" >
        <View style={styles.searchForm}>
          <Text style={styles.lebel}>Matéria</Text>
          <TextInput 
            style={styles.input}
            placeholder="Qual a matéria"
            placeholderTextColor="#c1bccc"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.lebel}>Dia da semana</Text>
              <TextInput 
              style={styles.input}
              placeholder="Qual o dia?"
              placeholderTextColor="#c1bccc"
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.lebel}>Horário</Text>
              <TextInput 
              style={styles.input}
              placeholder="Qual horário?"
              placeholderTextColor="#c1bccc"
              />
            </View>

          </View>
        </View>
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default TeacherList;