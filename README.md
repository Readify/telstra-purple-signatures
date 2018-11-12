# Readify Signature Generator

This app can be used to create Readify's Email Signature.

![Readify Signature Generator Screenshot](https://readifysignatures.blob.core.windows.net/images/signature-app-screenshot.png??)


# App Roadmap
- [x] Host site
- [ ] Convert to create-react-app so that we get prod-react, and decent tooling (in progress see: [this repo](https://github.com/vanbujm/signature-generator))
- [ ] Add BTS Digtal Signature
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
