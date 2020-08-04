import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeachertItem from '../../components/TeacherItem';
import './styles.css';



function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block"> 
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block"> 
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block"> 
            <label htmlFor="time">Horas</label>
            <input type="text" id="subject"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeachertItem />
        <TeachertItem />
        <TeachertItem />
      </main>
    </div>
  );
}

export default TeacherList;