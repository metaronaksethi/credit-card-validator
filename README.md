# React 18 Credit card Validator

![](https://img.shields.io/badge/npm-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/react_18-✓-blue.svg)
![](https://img.shields.io/badge/npm_8-✓-blue.svg)
![](https://img.shields.io/badge/ES6-✓-blue.svg)

***

<h3 align="center">Please help this repo with a :star: if you find it useful! :blush:</h3>

***

# File structure

```
credit-card-number-validator-app/
│
├── src/
│   ├── components/
│   │   ├──__test__/
│   │   │   ├── Card.test.js
│   │   │
│   │   ├── util/
│   │   │    ├── index.js
│   │   │
│   │   ├── card.js
│   │   
│   ├── hooks/
│   │   └── useCCValidate.js
│   │
│   └── static/
│   │  └── cards
│   │       └── card images
│   │
│   ├── App.js
│   ├── App.test.js
│   ├── App.css
│
├── .gitignore                    * Example git ignore file
├── index.js                      * Entry point of our Node's app
├── package.json                  * Defines our JavaScript dependencies
├── yarn.lock                     * Defines our exact JavaScript dependencies tree
└── README.md                     * This file
```

# Screenshot

<p align="center">
  <a href="https://metaronaksethi.github.io/credit-card-validator/">Credit Card Validator</a>
</p>

# Introduction

## What's a Credit Card Validator?

 It uses the Luhn algorithm to verify the credit card number and identify the type of credit card. The react javascript  programming language was used to create a Credit Card Validator application that verifies the validity of a user's credit card number.

It uses the Luhn algorithm to determine whether a credit card number is legitimate or not. Luhn's method is a straightforward checksum formula that can be used to verify a variety of identifications, including credit card numbers, although it is most commonly used to verify credit card numbers.



## How does it work?

After entering the credit card number, the system verifies its validity and determines whether it is a Visa, MasterCard, American Express or another form of card. It verifies the authenticity of the card and the type of credit card by performing some basic operations and validations. Credit card numbers entered by the user are generated along with a message indicating whether the card is valid or invalid. If the credit card number entered is valid, the credit card type will also be printed.

There are patterns in credit card numbers.
Credit card number must contain 13 to 16 digits. It must start with:


<table cellspacing="3">
<tr><th>Card type</th><th>Begins with</th><th>Number length</th></tr>
<tr><td>AMEX</td><td>34 or 37</td><td>15</td></tr>
<tr><td>Discover</td><td>6011</td><td>16</td></tr>
<tr><td>Mastercard</td><td>51-55</td><td>16</td></tr>
<tr><td>Visa</td><td>4</td><td>13 or 16</td></tr>
</table>

## How to use this code?

1. Make sure you have the latest stable version of Node.js installed

```
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```
```
  
2. Fork this repository and clone it
  
```
$ git clone https://github.com/{YOUR_USER_NAME}/credit-card-validator
```
  
4. Navigate into the folder  

```
$ cd credit-card-validator
```
  
5. Install NPM dependencies

```
$ npm install or yarn 
```


6. Run the project

```
$ npm start  or yarn run start or npm run start
```


> `npm start` will run `react-scripts start`.

9. Navigate to `http://localhost:3000` in your browser to test it! or your configurable PORT


# Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out to me directly at <ronak.sethi@metacube.com>

# Some other links

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
