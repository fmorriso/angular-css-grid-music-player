# Angular CSS Grid Music Player
## Background
This project is an "angular-ized" version of Paul Cheney's excellent Pluralsight course [Hands-on Responsive Web Design 3: Columns, Flexbox and Grids](https://app.pluralsight.com/library/courses/responsive-web-design-columns-flexbox-grids/table-of-contents).

The main changes I've made (not all of which work correctly yet):
* I began by scaffolding a new Angular 7.2.10 application using Angular-CLI 7.3.6.
* A separate navigation component (the styling of which does not work correctly) using Angular Routing
* SCSS styles are similar, but not 100% identical to where and how they are used in the course.
* The jpg images were copied to the "comes free with Angular-CLI" `assets` folder, not an `images` folder.
* I use `ngTemplate` with `*ngFor` in several places that replaces copy/paste of information in Paul's snippets.txt file.  This technique is used for rendering the navigation icons as well as the pictures in the main page.
* use of an interface ImageInfo to help define the small edition, large edition and caption of each image.  You can see this in action within file `music-player.component.html`
## Angular CLI information
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.
## Google Fonts
See below for how this is incorporated into the styles.scss file

[example](https://fonts.google.com/?selection.family=Source+Sans+Pro:400,700)



## Font Awesome
[get started](https://fontawesome.com/start)

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

using npm:

```
npm install --save-dev @fortawesome/fontawesome-free
```
## Importing Google Fonts and Font Awesome via SCSS
The following lines go in styles.scss
```scss
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
```

