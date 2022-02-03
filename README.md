# Nest Quiz API
_an API written in Nest js for creating and managing quizzes._

## Installation

Install the dependencies and devDependencies start to dev with docker.
> Note: make sure you have docker in your local.
```sh
cd nest-quiz-api

docker-compose up
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


