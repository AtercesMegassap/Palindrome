# Palindrome API

This is a simple Node.js API built with Express that checks whether a given word is a palindrome. It listens for requests and determines if a word reads the same forwards as it does backwards, after removing non-alphanumeric characters and ignoring letter casing.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Palindrome.git
```
Navigate to the project directory:
```bash
cd Palindrome
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Palindrome with the following parameter in the request body, in JSON format:
```
{
  "word": "radar"
}
```

The API will respond with whether the provided word is a palindrome or not.

Example Request:
```
GET http://localhost:3000/Palindrome
Request Body:
{
  "word": "radar"
}
```
Example Response:
```The word radar is a palindrome.```

Please note that you need to use an API client (e.g., Postman) to make requests to the API, and the provided number should be a valid natural number.

Palindrome
The API uses a function to check whether a given word is a palindrome. It removes non-alphanumeric characters and ignores letter casing before performing the palindrome check.