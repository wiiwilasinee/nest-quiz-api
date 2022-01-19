# Nest Quiz API
_an API written in Nest js for creating and managing quizzes._

## Installation

Install the dependencies and devDependencies and start the server.
```sh
cd nest-quiz-api

yarn install
yarn start:dev
```

**Database Setup**

> Note: if you do have database image in your local skip this step.

Create image for postgres docker in your local.

```sh
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD={your_password} -d postgres
```

Setting databas in `src/app.module.ts`

```sh
...
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '{Your_Password}',
  database: '{Your_Database_name}',
  autoLoadEntities: true,
  synchronize: true,
}),
...
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:5000
```

## Features

Available routes.

| Route | Method | Description |
| ------ | ------ | ------ |
| /quizzes | GET | Get all quizzes |
| /quizzes/:id | GET | Get quiz |
| /quizzes/:id | GET | Get quiz |
| /quizzes | POST | Create a quiz |
| /quizzes/:id | PATCH | Update quiz data |
| /quizzes/:id | DELETE | Delete a quiz, all questions and options |
| /quizzes | GET | Get all quizzes |
| /questions | POST | Create a question (**Required quiz_id**) |
| /questions/:id | DELETE | Delete a question and all options |
| /options | POST | Create an option (**Required question_id**) |
| /options/:id/answer-check | GET | Check answer option is correct (**return TRUE or False**) |
| /options/:id | DELETE | Delete an option |


