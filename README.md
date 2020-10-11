# typescript-advanced-template

React template with eslint prettier redux/sagas configurations

- [x] Map -> (Criar um outro array adicionando ou retirando atributos)
- [ ] Find
- [ ] FindIndex

- [ ] Reduce

- [ ] react-icons

# Usage

Clone this repository
Run `yarn` on root directory
Run `yarn start`

BACKEND

POST: Quando você quer cadastrar alguma coisa;

GET: Pegar algo já cadastrado;

PUT: Atualizar algo já cadastrado;

DELETE: Deletar algo já cadastrado.


room_id: 5;
hour_id: 3;
users_id: 1,2,3;

const newUser = { ...response.data.user, campus };
... pega toda a informacao do response.data.user e poe no novo objeto

o async em uma função é quando o que você for fazer na função demorar (como pegar dados do backend)

useEffect chama sua função assim que a página carregar
