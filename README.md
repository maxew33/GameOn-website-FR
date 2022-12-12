# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

# patch note 

## Issues

### issue 1 fixed
- open / close modal by js toggle in script/modal.js file

### issue 2 fixed
- labels linked
- form submitted when valid
- data keeped whan not valid / reset when valid

### issue 3 fixed
- error messages displayed using form-data::after pseudo-element

### issue 4 fixed
- open / close modal by js toggle in script/modal.js file

### issue 5 fixed
- UI tested


## project files organization
- css files in css folder
- js files in script folder
- images in img folder


## html modifications
- head
    - updating fontawesome kit

- header
    - top nav : div replaced by header, useless id and class removed
    - float property removed replace by flex.
    - hero-headline : br tag removed
    - main-navbar : div replaced by nav
    - inline JS removed
    - span tags in nav container removed

- main
    - class name "bground" replace by "modal-container"


## css modifications
- header
    - main-navbar : hover transition added
    - icon button position improved (absolute on the right of the nav)

- btn-signup : `text-transform : capitalize` => removed
- hero-img img : `object-fit: cover` => added

## js modifications
- burger toggle function improved with classlist toggle
- all js in a single file called script.js
