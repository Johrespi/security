const swaggerAutogen = require('swagger-autogen')()

const doc = {
  "info": {
    "title": 'SECURITY API',
    "description": 'SECURITY API with Authentication and Autorization'
  },
  "host": 'localhost:3000',
  "basePath": "/",
};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc)