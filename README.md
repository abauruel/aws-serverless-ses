<h1 align='center'> Serverless e-mail function </h1>
<p align='center' >
<img src='https://pics.freeicons.io/uploads/icons/png/20728984181536298169-512.png' height='100px' width='100px' alt='aws-lambda'/>
<img src='https://pics.freeicons.io/uploads/icons/png/10720372881536207296-512.png'
height='100px' width='100px' alt='aws-ses'
/>
<img src='https://pics.freeicons.io/uploads/icons/png/18661926311551942828-512.png'
height='100px' width='100px' alt='aws-ses'
/>
</p>
This project is about a serverless function that to send an e-mail using AWS Simple Email Service and AWS Lambda,  

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

### Locally

In order to test a function locally, run the following command:

- `npm rum dev` if you're using NPM
- `yarn dev` if you're using Yarn

