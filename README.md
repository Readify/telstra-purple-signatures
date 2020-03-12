# Telstra Purple Signature Generator

[![Azure DevOps builds](https://img.shields.io/azure-devops/build/readify/a1cfb701-86db-4671-943f-eb68ec17eb18/425.svg?style=flat)](https://readify.visualstudio.com/Labs/_build?definitionId=425)
[![Azure DevOps releases](https://img.shields.io/azure-devops/release/readify/a1cfb701-86db-4671-943f-eb68ec17eb18/41/53.svg?style=flat)](https://readify.visualstudio.com/Labs/_release?view=mine&definitionId=41)
[![Known Vulnerabilities](https://snyk.io/test/github/Readify/telstra-purple-signatures/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Readify/telstra-purple-signatures?targetFile=package.json)

This app can be used to create Telstra Purple's Email Signature.

![Telstra Purple Signature Generator Screenshot](https://readifyvc.s3-ap-southeast-2.amazonaws.com/screenshot.png)

## App Roadmap

- [x] Host site
- [x] Convert to create-react-app so that we get prod-react, and decent tooling
- [x] Add Telstra Purple Signature
- [x] Leverage Azure Active Directory to autofill the form
- [x] Write some tests

## Looks great, how can I use it for my company?

`src/constants` Contains brand specific information. Edit fields in there to rebrand the website.

## Content security policy

This application defines a [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) through an HTTP header in the [`public\web.config`](./public/web.config) file, because we're hosting that application in Azure through IIS.

At the time of writing, it allows:

- loading scripts and stylesheets from the hosting domain
- loading images from both the hosting domain and `readifysignatures.blob.core.windows.net`, which is where we host the logo used in the actual signature
- connecting to `login.microsoftonline.com` to log in to the app against Azure Active Directory

It's important to edit this policy if loading a new external resource.

## Licence

MIT, See: [LICENSE](https://github.com/Readify/readify-signatures/blob/master/LICENSE)

## Create React App Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
