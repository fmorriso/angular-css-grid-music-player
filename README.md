# Angular CSS Grid Music Player
## Background
This project is an "angular-ized" version of Paul Cheney's excellent Pluralsight course [Hands-on Responsive Web Design 3: Columns, Flexbox and Grids](https://app.pluralsight.com/library/courses/responsive-web-design-columns-flexbox-grids/table-of-contents).

The main changes I've made (not all of which work correctly yet):
* I began by scaffolding a new Angular 7.2.10 application using Angular-CLI 7.3.6.
* A separate navigation component (the styling of which does not work correctly) using Angular Routing
* SCSS styles are similar, but not 100% identical to where and how they are used in the course.
* SCSS styles were moved from both `_small-default.scss` and `_medium.scss` to component-specific SCSS files.  To help with this, the hard-coded `29rem` used in the course video was added to `_variables.scss` as a new variable, `$mediumScreen`.  In turn, that new variable was referenced in place of the hard-coded `29rem` value.  Example: `@media only screen and (min-width: $mediumScreen) { ... }`.
* The. jpg images were copied to the "comes free with Angular-CLI" `assets` folder, not an `images` folder, so I had to adjust some of the html and scss accordingly.
* In the middle of the course, I renamed one of the Components to Album, so if you look at the GitHub history of this repository, one of the original components gets replaced.
* When I created the Player component, I wound up with 5 components instead of 4 as shown in the video.  I have not had time to go back and figure out why.  As a work-around, I found an additional Font Awesome icon to use in the navigation area for this 5th component.
* I use `ngTemplate` with `*ngFor` in several places that replaces Paul's instructions in the video to copy/paste information from the snippets.txt file.  This technique is used for rendering the navigation icons as well as the pictures in the main page.
* Use of an interface, AlbumInfo, to help define the small edition, large edition and caption of each image.  You can see this in action within file `album.component.html`.
* Use of an interface, ArtistInfo, to help define the source (src) and caption of each artist's image.  You can see this in action within file `player.component.html`.
## Angular CLI information
This project was generated with [Angular CLI](https://cli.angular.io/) version 7.3.6 and subsequently upgraded to 11.0.4.
## Google Fonts
See below for how this is incorporated into the styles.scss file

[example](https://fonts.google.com/?selection.family=Source+Sans+Pro:400,700)



## Font Awesome
[get started](https://fontawesome.com/start)

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

using npm:

```
npm install --save-dev @fortawesome/fontawesome-free
```
## Importing Google Fonts and Font Awesome via SCSS
The following lines go in styles.scss
```scss
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.15.1/css/all.css');
```
