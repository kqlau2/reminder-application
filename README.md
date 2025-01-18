# Overview

This is a web app allows users to set email reminder. This is the website [link](https://kqlau2.github.io/reminder-application/). Users have to sign up and login in the page. Then, they can configure the date and time to send the reminder.

# Deployment
## Local Setup at Window
1. Install the following items if haven't.
```
npm install gh-pages --save-dev
```
2. Verify the items are installed.
```
npm --version
```
3. Create environment variables file
```
# Create the .env file if it doesn't exist
if (!(Test-Path .\.env)) {
    New-Item -Path .\ -Name .env -Force -ItemType File
}

# Add the environment variable to the .env file
Add-Content -Path .\.env -Value "REACT_APP_COGNITO_USER_POOL_ID=<value>" 

# Add a new line to the .env file for better readability
Add-Content -Path .\.env -Value ""

# Add the environment variable to the .env file
Add-Content -Path .\.env -Value "REACT_APP_COGNITO_CLIENT_ID=<value>" 
```

## Local Deployment
```
npm start
```

## GitHub Page Deployment
1. Commit and push the code change
2. Execute this command. It will run the follow steps:
    1. Use the NPM to build the app
    2. Export it to the build directory
    3. Deploy it to the `gh-pages` branch on [GitHub](https://github.com/kqlau2/reminder-application/tree/gh-pages). 
    4. Triggers the [Github Action](https://github.com/kqlau2/reminder-application/actions).
3. Validate the website https://kqlau2.github.io/reminder-application/
``` 
npm run deploy
```

# Technology Stack
1. React Static Website
2. AWS Cognito
3. AWS DynamoDB
4. AWS Lambda
5. AWS SNS
