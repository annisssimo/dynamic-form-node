export const defaultContacts = [
  {
    firstName: 'PAVEL',
    lastName: 'SOKOLOV',
    phone: '80441234567',
    email: 'psokolov@example.com',
    method: 'message',
    time: 'morning',
    contactCategory: 'personal',
  },
  {
    firstName: 'IVAN',
    lastName: 'SMIRNOV',
    phone: '80291234567',
    email: 'ivan.smirnov@example.com',
    method: 'email',
    time: 'morning',
    contactCategory: 'business',
    projects: [
      {
        name: 'redesign',
        deadline: '2024-12-15',
      },
      {
        name: 'launch',
        deadline: '2024-12-20',
      },
    ],
    companyName: 'TechSolutions',
    companyRole: 'Manager',
  },
  {
    firstName: 'MARIA',
    lastName: 'KUZNETSOVA',
    phone: '80123456789',
    email: 'maria.kuznetsova@mail.com',
    method: 'phone',
    time: 'evening',
    contactCategory: 'personal',
  },
  {
    firstName: 'PAVEL',
    lastName: 'ORLOV',
    phone: '80441234567',
    email: 'pavel.orlov@example.com',
    method: 'message',
    time: 'afternoon',
    contactCategory: 'business',
    projects: [
      {
        name: 'app development',
        deadline: '2024-12-25',
      },
      {
        name: 'testing',
        deadline: '2024-12-30',
      },
    ],
    companyName: 'OrlovSoft',
    companyRole: 'Developer',
  },
  {
    firstName: 'OLGA',
    lastName: 'NOVIKOVA',
    phone: '80331234567',
    email: 'olga.novikova@example.com',
    method: 'email',
    time: 'morning',
    contactCategory: 'business',
    projects: [
      {
        name: 'event planning',
        deadline: '2024-11-28',
      },
      {
        name: 'follow-up',
        deadline: '2024-12-01',
      },
    ],
    companyName: 'AllianceEvents',
    companyRole: 'Coordinator',
  },
];
