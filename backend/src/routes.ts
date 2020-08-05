import express from 'express';

import db from './database/connection';

const routes = express.Router();

interface ScheduleItem {
  week_day: string;
  from: string;
  to: string;
}

routes.post('/classes', async(request, respose) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const insertedUsersIds = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const user_id = insertedUsersIds[0];

  await db('classes').insert({
    subject,
    cost,
    user_id,
  });

  const class_id = insertedUsersIds[0];

const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
  return {};
});

  return respose.send();
});

export default routes;