# Angular Common Components

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project sy-components` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sy-components`.
> Note: Don't forget to add `--project sy-components` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build sy-components` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build sy-components`, go to the dist folder `cd dist/sy-components` and run `npm publish`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

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