export const cardList = [
    {
        _id: 1,
        topic: 'Web Design',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'В работе'
    },
    {
        _id: 2,
        topic: 'Research',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'Нужно сделать'
    },
    {
        _id: 3,
        topic: 'Web Design',
        title: 'Название задачи',
        date: '30.10.23',
        status: 'Тестирование'
    },
    {
        _id: 4,
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
    NEWCARD: "/new-card",
    NOT_FOUND: "*",
  };

  export const Colomns = [
    {
    id: 1,
    status: "Без статуса",
  
  },
  {
    id: 2,
    status: "Нужно сделать",
    
  },
  {
    id: 3,
    status: "В работе",
   
  },
  {
    id: 4,
    status: "Тестирование",
  
  },
  {
    id: 5,
    status: "Готово",
    
  },
    ];

  export const formFields = {
    name: "",
    login: "",
    password: "",
};