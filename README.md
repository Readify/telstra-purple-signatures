# Readify Signature Generator
![Azure DevOps builds](https://img.shields.io/azure-devops/build/readify/a1cfb701-86db-4671-943f-eb68ec17eb18/425.svg?style=flat)
![Azure DevOps releases](https://img.shields.io/azure-devops/release/readify/a1cfb701-86db-4671-943f-eb68ec17eb18/41/53.svg?style=flat)


This app can be used to create Readify's Email Signature.

![Readify Signature Generator Screenshot](https://readifysignatures.blob.core.windows.net/images/signature-app-screenshot.png?)


## App Roadmap
- [x] Host site
- [x] Convert to create-react-app so that we get prod-react, and decent tooling
- [x] Add BTS Digtal Signature
- [ ] Leverage Azure Actice Directory to autofill from

## Setup
- Clone repo
- Open index.html in a modern browser

## Tech Stack
### ReactJS
Note, in the interest of saving development time, this app uses the development version of react, served over CDN. 

Because of this, it uses a browser version of babel. If you care about performance or stability, 
you should probably build the app locally and then serve a minified version with production react

## Looks great, how can I use it for my company?
All the components in App.js have their brand information extracted into `brandInfo` variables in the various components.
Just replace the information in their with your own content and you are good to go! 

## Licence 
MIT, See: [LICENSE](https://github.com/Readify/readify-signatures/blob/master/LICENSE)

# Create React App Stuff
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
