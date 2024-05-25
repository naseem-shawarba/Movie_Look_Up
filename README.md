# Movie Look Up

Movie Look Up is a responsive web app that provides information such as casts, plots, and ratings about movies.

## Frameworks Used
* Vue
* Vuex
* Vuetify
* Nuxt

## Screenshots

![Screenshot](https://github.com/naseem-shawarba/Movie_Look_Up/blob/main/static/screenShot.png)


## Build Setup
If you want to clone the repo and run the app locally, you need to obtain an API key from <a href="https://www.omdbapi.com/apikey.aspx">OMDb API</a>. After obtaining the key, create a file named .env in the root directory of the project and add the API key within double quotes as follows:
```bash
API_KEY="<KEYGOESHERE>"
```

After setting up the .env file, you can use the following commands to run the app in development mode or build the app for production:
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
