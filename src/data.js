export const cardList = [
    {
        id: 1,
        topic: 'Web Design',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'В работе'
    },
    {
        id: 2,
        topic: 'Research',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'Нужно сделать'
    },
    {
        id: 3,
        topic: 'Web Design',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'Тестирование'
    },
    {
        id: 4,
        topic: 'Copywriting',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'Без статуса'
    }
   
]

export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  
  export const paths = {
    MAIN: "/",
    EXIT: "/exit",
    LOGIN: "/login",
    REGISTER: "/register",
    CARD: "/card/:id",
    NOT_FOUND: "*",
  };