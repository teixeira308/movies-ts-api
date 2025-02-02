# Movies API - Backend Project

This is a backend project developed with TypeScript, MongoDB, Morgan, Express, express-validator, Mongoose, and Winston.

## Technologies Used

- **TypeScript**: A superset of JavaScript that adds static typing.
- **MongoDB**: A NoSQL database used to store data.
- **Morgan**: HTTP request logger middleware.
- **Express**: A web framework for Node.js.
- **express-validator**: Middleware for data validation.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Winston**: A logging library for Node.js.

## Installation

Follow the instructions below to set up the development environment:

1. Clone the repository:
    ```bash
    git clone https://github.com/teixeira308/movietsapi.git
    ```

2. Navigate to the project directory:
    ```bash
    cd movietsapi
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root of the project and add the necessary environment variables, such as your MongoDB connection string.

    Example:
    ```env
    DB_USER=******
    DB_PASS=*****
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

### API Endpoints

POST /v1/movie/ <br/>
GET /v1/movie/ <br/>
GET /v1/movie/{{id}} <br/>
DELETE /v1/movie/{{id}} <br/>
PATCH  /v1/movie/{{id}} <br/>

## Logging

The project uses Winston for logging and Morgan for HTTP request logging.

## Validation

The project uses express-validator for validating incoming requests.

## Contributing

If you would like to contribute, please open an issue or submit a pull request.
