# Nest Quiz API
_an API written in Nest js for creating and managing quizzes._

## Installation

Install the dependencies and devDependencies start to dev with docker.
> Note: make sure you have docker in your local.
```sh
cd nest-quiz-api

docker-compose up
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## Features

Available routes.

| Route | Method | Description |
| ------ | ------ | ------ |
| /quizzes | GET | Get all quizzes |
| /quizzes/:id | GET | Get quiz |
| /quizzes/:slug/questions | GET | Get quiz with questions and options |
| /quizzes | POST | Create a quiz |
| /quizzes/:id | PATCH | Update quiz data |
| /quizzes/:id | DELETE | Delete a quiz, all questions and options |
| /questions | POST | Create a question |
| /questions/:id | DELETE | Delete a question and all options |
| /options | POST | Create an option |
| /options/:id | DELETE | Delete an option |
| /options/:id/answer-check | GET | Check answer option is correct |


## Requests

##### Get all quizzes
HTTP request
```sh
GET /quizzes
```
Response
_If successful, this method returns a response body with the following structure:_
```sh
[
    {
        "id": unsigned integer,
        "name": string,
        "slug": string
    },
    ...
]
```

##### Get a quiz
HTTP request
```sh
GET /quizzes/{Quiz ID}
```
Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    "id": unsigned integer,
    "name": string,
    "slug": string
}
```

##### Get a quiz with questions and options
HTTP request
```sh
GET /quizzes/{Quiz Slug}/questions
```
Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    "slug": string,
    "name": string,
    "questions": [
        {
            "question_id": unsigned integer,
            "content": text,
            "message": string,
            "options": [
                {
                    "option_id": unsigned integer,
                    "content": text
                },
                ...
            ]
        },
        ...
    ]
}
```

##### Create new quiz
HTTP request
```sh
POST /quizzes
```
Request body
> Note: Slug will generate from name when you create aquiz and slug can not change later.

- name  (***_string_**) - _Quiz name_

Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    "id": unsigned integer,
    "name": string,
    "slug": string
}
```

##### Update quiz data (name)
HTTP request
```sh
PUT /quizzes/{Quiz ID}
```
Request body

- name  (***_string_**) - _Quiz name_

Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    
    "id": unsigned integer,
    "name": string,
    "slug": string
}
```

##### 	Delete a quiz (this will be delete all questions and options in a quiz)
HTTP request
```sh
DELETE /quizzes/{Quiz ID}
```

##### Create new question
HTTP request
```sh
POST /questions
```
Request body

- quiz_id  (***_integer_**) - _Quiz ID_
- content  (***_string_**) - _Question_
- message  (**_string_**) - _Extra information for question_

Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    "id": unsigned integer,
    "content": text,
    "message": string
}
```

##### 	Delete a question (this will be delete all options in a question)
HTTP request
```sh
DELETE /questions/{Question ID}
```

##### Create new option
HTTP request
```sh
POST /options
```
Request body

- question_id  (***_integer_**) - _Question ID_
- content  (***_string_**) - _Option_
- is_correct  (**_boolean_**) - _To say this option is a correct option or not_

Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    "id": unsigned integer,
    "content": text,
}
```

##### 	Delete an option
HTTP request
```sh
DELETE /options/{Option ID}
```

##### Check answer
HTTP request
```sh
GET /options/{Option ID}/answer-check
```
Response
_If successful, this method returns a response body with the following structure:_
```sh
{
    "answer": {
        "option_id": unsigned integer,
        "content": text,
    },
    "correct": {
        "option_id": unsigned integer,
        "content": text,
    },
    "is_correct": boolean
}
```