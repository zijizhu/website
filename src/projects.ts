import { ProjectInfo } from './types';
import medician from '../public/medician.png';
import footsteps from '../public/footsteps.png';
import taskhouse from '../public/taskhouse.png';

const projects: ProjectInfo[] = [
  {
    name: 'Medician',
    description: 'UNSW CSESoc Project Competition 2021 Third Prize',
    link: 'https://www.facebook.com/events/184882760245206/?active_tab=discussion',
    detail:
      'Medician is a cross-platform health tracking app that is intuitive and easy to use. You will be able to record details about your symptoms and set notifications for your medical + fitness routines.',
    sourceLink: 'https://github.com/fxlui/medician',
    downloadLink: 'https://apps.apple.com/au/app/medician/id1584595040',
    techs: ['React Native', 'TypeScript', 'MobX State Tree', 'SQLite'],
    techIconNames: ['react', 'typescript', 'mst', 'database'],
    image: medician
  },
  {
    name: 'TaskHouse',
    description: 'CompSci Capstone project',
    detail:
      'TaskHouse is a collaborative platform for teams to communicate the state of their tasks, for users to connect with their collaborators through a user-friendly interface.',
    techs: ['React', 'TypeScript', 'Material UI', 'Firebase'],
    techIconNames: ['react', 'typescript', 'material', 'firebase'],
    image: taskhouse
  },
  {
    name: 'Footsteps',
    description: 'UNSW CSESoc Hackathon 2021 Prospa Beginner Prize',
    link: 'https://youtu.be/-Ruo8NlrkCo?list=PLtdbwEd-4QWExTxke9BRnkbHv2zXX-_qT&t=335',
    detail:
      'Footsteps aims to link a students schooling experience with relevant industry mentors who will guide them through their studies and decision on future career choices. (MVP)',
    sourceLink: 'https://github.com/zijizhu/footsteps',
    techs: ['React Native'],
    techIconNames: ['react'],
    image: footsteps
  }
];

export default projects;
