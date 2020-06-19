const users = [
  {
    name: 'Lonlon',
    email: 'lonlon@gmail.com',
    id: 1,
  },
  {
    name: 'Zanat',
    email: 'zanat@gmail.com',
    id: 2,
  },
  {
    name: 'Neitan',
    email: 'neitan@gmail.com',
    id: 3,
  },
];

const user = users.find((user) => {
  if (user.id === 1) {
    return user;
  }
});

// const users = [
//   {
//     name: 'Lonlon',
//     email: 'lonlon@gmail.com',
//     id: 1,
//   },
//   {
//     name: 'Zanat',
//     email: 'zanat@gmail.com',
//     id: 2,
//   },
//   {
//     name: 'Neitan',
//     email: 'neitan@gmail.com',
//     id: 3,
//   },
// ];

// const usersUpdated = [];

// for (let i = 0; i < users.length; i += 1) {
//   usersUpdated[i] = {
//     id: users[i].id,
//     name: users[i].name,
//   };
// }
// console.log('USRESS');
// const usersMapUpdated = users.map((user) => {
//   console.log(user);

//   return {
//     name: user.name,
//     id: user.id,
//   };
// });

// console.log('usersMapUpdated');
// console.log(usersMapUpdated);

export default {};

/*console.log('AAAAAAA');
const userMapUpdated = users.map((user) => {
  return {
    name: user.name,
  };
});

console.log(userMapUpdated);
*/
