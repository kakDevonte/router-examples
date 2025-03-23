import { faker } from '@faker-js/faker';

const TODOS = [];

for (let i = 0; i <= 100; i++) {
  TODOS.push({
    id: faker.number.int(),
    title: faker.git.branch(),
    description: faker.git.commitMessage(),
    image: faker.image.avatarGitHub()
  });
}

export const DATABASE: { todos: Todo[] } = {
  todos: TODOS
};
