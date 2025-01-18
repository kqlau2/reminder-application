# Overview

This is a web app allows users to set email reminder. This is the website [link](https://kqlau2.github.io/reminder-application/). Users have to sign up and login in the page. Then, they can configure the date and time to send the reminder.

# Deployment
## Local Setup
1. Install the following items if haven't.
```
npm install gh-pages --save-dev
```
2. Verify the items are installed.
```
npm --version
```

## Local Deployment
```
npm start
```

## GitHub Page Deployment
This command will build the app, export it to the out directory, and deploy it to the `gh-pages` branch on GitHub.
``` 
    npm run deploy
```

# Technology Stack
1. React Static Website
2. AWS Cognito
3. AWS DynamoDB
4. AWS Lambda
5. AWS SNS
