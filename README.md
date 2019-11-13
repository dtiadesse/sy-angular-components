#  Angular common components Demo
This package houses the UI Kit, an  Angular based UI component library.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1. This project is used to demo the sy-components

## Contributing
Create a feature branch from the latest `master` branch code. After development is finished, submit a PR with `master` as the target.

<h2 id="getting-started">Getting started</h2>

<h3 id="check-node">Check NodeJS and NPM</h3>

To run the app locally, you will need NodeJS and the Node Package Manager (NPM).

Confirm NPM is available:

`$ npm -v`

<h3 id="serving-locally">Serving the app locally</h3>

1. `$ npm install -g @angular/cli@latest` The will enable the `ng *` commands. Don't worry that we are using the 'latest' version. Angular-CLI will use the version on ng specified in package.json
1. `$ npm install` or `$ npm update` to make sure you have the latest version of all the packages used in the app.
1. `Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


<h3 id="sy-angular-components">sy-angular-components</h3>

sy-components is a related package that provides a set of general-purpose components and directives. 
<a href="" target="_blank">Click here to view demos</a>
You'll need to setup your local environment to pull this package in.

<h4> First time setup & Download from github</h4>

git clone https://github.com/dtiadesse/sy-angular-components
cd sy-angular-components
npm install
Run `ng serve` for a dev server. Navigate to  `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<h5>Code scaffolding</h5>

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<h3 id="sy-components">sy-components</h3>

<h4>Install sy-components into your application</h4>
 
npm install sy-components

<h3>Configure</h3>

import { SyComponentsModule } from 'sy-components';

@NgModule({
  ...
  imports: [SyComponentsModule],
  ...
})

use the required components into you're application