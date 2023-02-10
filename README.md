# Music API
A RESTful API for managing music tracks and playlists.

## Prerequisites
- [Node.js](https://nodejs.org/)
- [Postgres](https://www.postgresql.org/)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

1. Clone the repository to your local system
```bash
  $ git clone https://github.com/ncfakude30/ayoba-music-api.git

```

2. Navigate to the project directory and install the dependencies
```bash
$ cd ayoba-music-api
$ npm install
```

3. Create a Postgres database and configure the connection in the .env file.

```markfile
DB_HOST=<hostname>
DB_PORT=<port>
DB_USERNAME=<username>
DB_PASSWORD=<password>
DB_DATABASE=<database-name>
JWT_SECRET=<secret-key>
```

4. Run the migrations:

```ruby
$ npm run typeorm:migrate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
The API should now be running and available at `http://localhost:3000`.

## API Endpoints
The API includes the following endpoints for tracks and playlists:

* `GET /tracks`
* `GET /tracks/:id`
* `POST /tracks`
* `PUT /tracks/:id`
* `DELETE /tracks/:id`
* `GET /playlists`
* `GET /playlists/:id`
* `POST /playlists`
* `PUT /playlists/:id`
* `DELETE /playlists/:id`

## Authorizing Requests
All API requests require a valid JWT token to be included in the Authorization header. To obtain a token, send a POST request to /auth/login with a JSON payload containing the following fields:

```json
{
  "username": "<username>",
  "password": "<password>"
}

```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
