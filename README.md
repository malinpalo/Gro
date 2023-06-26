
# Gro


## Project goals
Gro is social network plattform designed for plant loving users around Gothenburg. 
The primary goals of the web app are to:

1) Provide plant lovers a place to meet up on the net to share thoughts, ideas and knowledge about plants and gardening.

2) Deliver a simple and intuitive user experience, suitable for users in all ages. 

3) Offer a minimal set of features chosen in order to deliver a useful application within an achievable development timeframe, while laying a foundation for additional features in the future.

This is the repository for the React frontend of Gro.
The project also utilises a Django Rest Framework web API, backend.

The live link for "Gro" can be found [HERE]()

#### DEPLOYED BACKEND API [LINK]()
#### DEPLOYED BACKEND [REPOSITORY]()


![](images/responsiveness_gro.png)
Follow the link:
[Site view across devices](https://ui.dev/amiresponsive?url=https://3000-malinpalo-gro-4w7sopk0e5a.ws-eu100.gitpod.io/) to scroll on different devices.


## Table of contents
- [Gro](#gro)
  * [Project goals](#project-goals)
  * [Table of contents](#table-of-contents)
  * [Agile methodology](#agile-methodology)
    + [User stories](#user-stories-1)
    + [Iterations](#iterations)
  * [Planning](#planning)
    + [Wireframes](#wireframes)
    + [Data models](#data-models)
  * [Design](#design)
    + [Colours](#colours)
    + [Typography](#typography)
  * [Features](#features)
    + [Navigation](#navigation)
    + [Logged in navigation](#logged-in-navigation)
    + [Authentication](#authentication)

    + [Post List page](#post-list-page)
    + [Post detail page](#post-detail-page)
    + [Post Edit page](#post-edit-page)
    + [Profile page](#profile-page)
    + [Edit Profile](#edit-profile)
    + [Infinite Feed page](#infinite-feed-page)
    + [Liked Posts page](#liked-posts-page)
    + [Edit post and delete post buttons](#edit-event-and-delete-event-buttons)
    + [Add contact form](#add-contact-form)
    + [Search contacts form](#search-contacts-form)
    + [Edit contact and delete contact buttons](#edit-contact-and-delete-contact-buttons)
    + [Edit contact form](#edit-contact-form)
    + [My Profile](#my-profile)
    + [Popular Followers](#popular-followers)
    + [Change password](#change-password)
    + [Delete account](#delete-account)
    + [Modal dialogs to confirm or cancel destructive actions](#modal-dialogs-to-confirm-or-cancel-destructive-actions)
    + [Success messages](#success-messages)
    + [Error messages](#error-messages)
    + [CRUD functionality](#crud-functionality)
    + [Future improvements and features](#future-improvements-and-features)
  * [Frameworks, libraries and dependencies](#frameworks-libraries-and-dependencies)
  * [Testing](#testing)
    + [Manual testing](#manual-testing)
    + [Validator testing](#validator-testing)
    + [W3C CSS validator](#w3c-css-validator)
    + [ESLint JavaScript validator](#eslint-javascript-validator)
    + [Lighthouse testing](#lighthouse-testing)
    + [Resolved bugs](#resolved-bugs)
    + [Unresolved bugs](#unresolved-bugs)
  * [Deployment](#deployment)
    + [Forking the GitHub Repository](#forking-the-github-repository)
    + [Making a Local Clone](#making-a-local-clone)
    + [Deploying with Heroku](#deploying-with-heroku)
  * [Credits](#credits)
    + [Code](#code)
    + [Media](#media)

## Agile methodology
The Agile Methodology was employed throughout this project based on user stories. A github issue was created for each user story. A github working board was created to keep track on the user stories and to organize the work. Milestones (Iterations) was created to represent the products backlog. All user stories were added to the backlog.

### User stories 
User stories where created in the initial design phase based on my wireframes.
User stories required to implement each iteration were created. These were categorised according to whether they were 'must have' features required to implement a Minimum Viable Product (MVP). [Gro GitHub Issues](https://github.com/issues).

### Iterations
Milestones was created as Iterations to be able to organize userstories and time used for each user story. [Gro GitHub Iterations](https://github.com/malinpalo?tab=projects).

## Planning
### Wireframes:
### Database Schema:
This has been uploaded to the Backend README, which can be found [HERE](https://github.com/).

## Design

### Colours
I decided to incorporate a colorful approach for the site. This in order to make the content and detailed information throughout the site stand out better to the users.
The colours choosen is following the colours in nature this is to make the user feel at home at this gardening platform.

![Colour Scheme](images/colour-scheme.png)

### Typography

Google Fonts Poppin font is used as the overall font for the project. This font is clear and delicate.
San-Serif is used as a backup font for Poppins, just in case Poppins doesn't load.

[Back to top](<#table-of-contents>)

## Features
The futures are split in two parts: One for logged in users and one for logged out users as follows.
 

### Existing Features

#### Navigation

The navigation bar is clean and straightforward. The menu changes wheter you are a logged in or logged out user. For tablet and mobile devices, the navigation barmenu becomes a hamburger dropdown menu.

For first time visitors, the user is logged out and the following menu items are visible:

- Gro Logo - is situated far out on the users left hand side. The logo is visible throughout the whole site to all user types.
- Home - the first menu item and the initial default start page. This is where all the posts of the users are beeing displayed.
- Authentication - the following two menu items are the sign in and sign up icons that takes the usesrs to the respective pages.

![NavBar](images/navbar.png)
![NavBar BurgerMenu](images/navbar_bm.png)

[Back to top](<#table-of-contents>)

#### Logged In Navigation
Once the user logs in additional links becomes avaliable for the user to select:

- Add post - Logged in users can access the page for creating posts to share their own posts to the site. 
- Feed - The feed page, where the users can see posts of other profiles they follow becomes accessible for logged in users only.
- Liked - The liked page, where the logged in users can view all the posts that they have liked.
- Authentication - The icons within the authentication change once a user has logged in and displays a link to sign out of the site. 

![NavBar, logged in](images/navbar-logged_in.png)
![NavBar BurgerMenu logged in](images/navbar_logged_in_bm.png)


[Back to top](<#table-of-contents>)

#### Authentication

- Sign Up - First time users or users that haven't already created an account can click on the Sign Up menu in the navigation bar to create a user account.

![Sign Up](images/readme-images/sign_up.png)

- Sign In - If a user already have a Gro user account, they can either click on the sign in menu option in the navigation bar or follow the link below the sign up form.

![Sign In](images/readme-images/sign_in.png)




## Frameworks, libraries and dependecies

- [ReactJS]() : To build the components that would collectively form the front-end application.
- [React Bootstrap](https://react-bootstrap.github.io/): A CSS framework that helps build solid, responsive, mobile-first sites and has aided to the layout of the site.
- [Django]() : Used to build the backend database that serves as an API for the front-end project.
- [GitPod]() : To build the project & create the JSX & CSS files before pushing the project to Github.
- [GitHub](): Used to host my repository and manage my project board maintaining user stories. 
- [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
- [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.
- [Google Fonts]() : Used for the site fonts.
- [Coolors](https://coolors.co/) : Used to create the colour palette.
- [Font Awesome](https://fontawesome.com/) : To add icons to the NavBar, like and comments buttons.
- [Freeiconspng]() : For the no-result and upload icon.
- [Favicon](https://favicon.io/) - Used to create the favicon.
- [Balsamiq](https://balsamiq.com/): Was used to create mockups of the project prior to starting.
- [Am I Responsive?]() : Used for responsiveness check to ensure the project looked good across all devices.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness during the whole development of the project.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance.
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

[Back to top](<#table-of-contents>)

## Testing

Please click [**_here_**](TESTING.md) to read more information about testing Gro Frontend

[Back to top](<#table-of-contents>)
