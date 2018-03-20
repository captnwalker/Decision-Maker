# ***IN DEVELOPMENT*** Decision-Maker

## A simple decision making app built in REACT

### Table of Contents

### How to Use

>lorem ipsum

### Deployment

>The **[Decision-Maker](https://expense-XXXXager3.herokuapp.com/ "Decision-Maker")** has been deployed to a Heroku Dyno and can be used by following the link. (Note: *Resting Dyno's can often take 10 to 15 seconds to spin up on initial load and are not indicative of a sites true load speed.*)

### Screenshot of this project

![Decision-Maker](https://raw.github.com/captnwalker/expXXXXXager/master/screenshots/screenshot2.gif "Decision-Maker")

### Tech Stack

| Core | Styling/Authentication | Dependencies | Dev Environment/Testing
| :---: | :---: | :---: | :---: |
| React | SCSS | AirBnB/React-Dates | Babelrc Compiler
| Express | Google Fonts | Moment.js | WebPack
| NodeJS | normalize.css | Numeral.js | Jest Testing Framework
| Redux | Google Login | Yarn | Redux-Devtools-Extension
| Firebase DB | Firebase AuthO | UUID | extract-text-webpack-plugin
| JSX | Validator | Redux-Thunk | Babel Poly-Fill
| JavaScript | CSS3 | RegEx | LiveServer |
| HTML5 | dotenv | CSS Loader | History |

* REACT v16
* react-dom
* Bulma Framework ???
* JavaScript
* Validator
* Bable-CLI
* Webpack 3.1
* babel-core
* babel-loader
* babel-plugin-transform-class-properties

### Steps to Deploy Locally

1. Clone down this repo
2. Restore dependencies by running `yarn install` in the root of your local repo
3. Restore production files by running `yarn run build:prod`
4. Start local server by running `yarn run dev-server`
5. You are now in development mode on localhost:8080
6. Deploy to host of your choice: ex.; Heroku
7. Connect to a database and setup authentication of your choice: ex.; Firebase
8. Create Firebase DB and authentication per Firebase documentation
9. Add *your* API keys to *your* local project
10. Set Firebase API keys in Heroku from command line: `heroku config:set <list all 6 keys copied from your .env file and separated by a space>`
11. You should now be able to login to your deployed site

#### License - MIT