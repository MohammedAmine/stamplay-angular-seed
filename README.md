# Stamplay Angular Seed Project
A starter project for Stamplay apps built with AngularJS

![Angular Starter Project](http://s23.postimg.org/r8hjkv0c9/Screen_Shot_2016_01_05_at_4_04_55_PM.png)

### Setup Instructions

- Clone project : `git clone https://github.com/Stamplay/stamplay-angular-seed.git`

- Install the project dependencies : `npm install` & `bower install`

- Configure Stamplay Project : Input your `APP ID` and `API KEY` from your Stamplay app dashboard in the corresponding properties in the `stamplay.json` file in the root of the seed project.

- Create a new **Object** schema on Stamplay, named "**note**", with a **body** property as a *string*.


### Running locally for development

- Start development build : `gulp dev`

- Start development server : `stamplay start` & navigate to `localhost:8080`

### Deploying the project

- Start production build : `gulp build`

- Run Stamplay CLI command : `stamplay deploy`

- Enter commit message for deploy.
