# Dilemma Decider

## An Entertaining Decision Making App Built in REACT

### Table of Contents
- [Dilemma Decider](#dilemma-decider)
    - [An Entertaining Decision Making App Built in REACT](#an-entertaining-decision-making-app-built-in-react)
        - [Table of Contents](#table-of-contents)
        - [How to Use](#how-to-use)
        - [Deployment](#deployment)
        - [Screenshot of this project](#screenshot-of-this-project)
        - [Tech Stack](#tech-stack)
        - [Steps to Deploy Locally](#steps-to-deploy-locally)
            - [License - *MIT*](#license---mit)

### How to Use

>Enter as many choices (options) as your paticular dilemma presents and **Dilemma Decider** will make that tough decision for you.

### Deployment

>The **[Dilemma Decider](https://dilemma-decider.herokuapp.com/ "Dilemma Decider")** has been deployed to a Heroku Dyno and can be used by following the link. (Note: *Resting Dyno's can often take 10 to 15 seconds to spin up on initial load and are not indicative of a sites true load speed.*)

### Screenshot of this project

![Dilemma Decider](https://raw.github.com/captnwalker/dilemma-decider/master/screenshots/screenshot1.gif "Dilemma Decider")

![Dilemma Decider](https://raw.github.com/captnwalker/dilemma-decider/master/screenshots/screenshot2.jpg "Dilemma Decider")

### Tech Stack

| Core | Styling | Dependencies | Dev Environment
| :---: | :---: | :---: | :---: |
| React v16| SCSS | Yarn | WebPack 3.1
| Expressjs | CSS3 |normalize.css npm | babel-core
| NodeJS | react-modal | node-sass | babel-loader
| JSX | Google Fonts | RegEx  | webpack extract text
| JavaScript | sass-loader | Validator | babel-plugin-transform-class-properties
| HTML5 | css-loader |  | bable-CLI
| react-dom | style-loader |  | live-server |  |

### Steps to Deploy Locally

1. Clone down this repo
2. Restore dependencies by running `yarn install` in the root of your local repo
3. Restore production files by running `yarn run build:prod`
4. Start local server by running `yarn run dev-server`
5. You are now in development mode on localhost:8080

#### License - *MIT*