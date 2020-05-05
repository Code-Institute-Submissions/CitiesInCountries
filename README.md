# Capital Cities in Countries Data

"The important thing is to not stop questioning. Curiosity has its own reason for existing." - Einstein

[Capital Cities in Countries Data](https://naoisegaffney.github.io/CitiesInCountries/)

![Screenshot of the main page (index.html)](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Information%20Architecture.png)

A responsive and interactive website using HTML 5, CSS 3, and JavaScript to provide an informative overview of Cities and Countries in Europe (expanded in future to include the World) through Google Map Markers, with Modals (“pop-ups”) providing place details and statistics.

## Table of Contents
[README.md (this document) - Capital Cities in Countries Data](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/README.md)

* [Business](https://github.com/NaoiseGaffney/CitiesInCountries#business)
* [Processes](https://github.com/NaoiseGaffney/CitiesInCountries#processes)
* [Solution](https://github.com/NaoiseGaffney/CitiesInCountries#solution)
* [Technology](https://github.com/NaoiseGaffney/CitiesInCountries#technology)
* [Testing](https://github.com/NaoiseGaffney/CitiesInCountries#testing)
* [Deployment](https://github.com/NaoiseGaffney/CitiesInCountries#deployment)
* [Credits](https://github.com/NaoiseGaffney/CitiesInCountries#credits)

[User Experience and Design MarkDown](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md)

* [User Experience and User Design - 5 Planes](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#user-experience-and-user-design---5-planes)
* [Strategy Plane](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#strategy)
* [Scope Plane](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#scope)
* [Structure Plane](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#structure)
* [Skeleton Plane](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#skeleton)
* [Surface Plane](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#surface)
* [Acknowledgements](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md#acknowledgements)

[Code Documentation and Walkthrough]()


## Business
### External Users' Goals
Users interested in looking at succinct information about European (global expansion planned) Capitals and Countries easily accessible and clearly displayed on a "Dashboard".

Collaborators wanting to ensure I'm a good business partner and have the right skills and aptitude.

Employers wanting to improve their on-line presence with Front-End design and development, and Full Stack Development, by hiring me or contracting my services.

### Site Owner's Goals
The site has potential to become much more informative and interactive. It serves as a proof-of-concept of presenting dynamic data from disparate sources in a cohesive and simple display.

It servers as a strong prototype and as an example for future collaborators, clients, and companies of what I'm capable of. It does what no CV, nor Diploma, nor LinkedIn Profile can do. It offers irrefutible evidence of my current knowledge and skill level, as well as a clear indication of my potential as a programmer.

### Potential Features
A "Dashboard" view of the World with European Map Markers that when clicked open a Google InfoView with city coordinates, country, current weather (temp, description, air pressure) as well as two buttons to provide further information.

The Overview Modal displays simple information about the country like the flag, name, regions, languages, and more.

The Statistics Modal displays a simple dynamic (real-time) population graph, as well as some additional statistics about the country.

While the Google Map Navigation Controls are styled to suit the overall look-and-feel of the website, the map and controls work just like any other Google Map: Map/Satellite Views, Full-screen, Zoom Controls, and a left-corner link to a full version of Google Maps.

The Footer provides information about how to navigate the site, and a description of the other Footer Modals. It provides links to descriptions, walkthroughs, videos, courses, and code snippets that have given me the knowledge to practice my skills on this second milestone project. A feedback from is provided for further thoughts, suggestions, and ideas from users. The final Footer link has an "About Me" Modal.

Potential future improvements:

* Additional dynamic and real-time data in the Overview and Statistics Modals.
* Make the D3 Graphs (Statistics Modals) interactive ("clickable") and data-driven.
* Internal: move static data (city and country array) to the Firebase Firestore.
* Add Map Markers and dynamic data for all the Capital Cities and Countries in the World.
* Nice-to-have: allow the user to change the theme, by selecting from a number of predefined themes (dark, light, funky...).
* Start with a destination form asking for permission to use the Broweser's geolocation function, or allow the User to enter a city to centre the map on, or use the default of Firhouse, Dublin, Ireland.

## Processes
### UX

The website provides a responsive and easy-to-use visual design, based on a good representation of the elements, and with intuitive navigation, all from a single "Dashboard" with Modals ("pop-ups").

The website follows a dashboard Information Architecture and all elements and data are accessible from the one page. Navigation is easy.

There are three main actors/roles that use the services provided by the website: Interested User, Collaborator, and Employer.

* As an Interested User, I want to satisfy my curiosity about European Cities and Countries, access information and simple statistics about each to further my interests and satisfy my curiosity.
	* As an Interested User, I want to provide feedback to the creator, to suggest improvements and further data to add, to improve the website and subsequently the Users' experience of the website.
	* As an Interested User, I want to see what data sources are used to drive the website, and also the .
	* As an Interested User, I want to contact the owner (Naoise Gaffney) to discuss the details of providing a Full Stack Solution so that I can provide on-line services to my Clients and End-Users.

* As a Collaborator, I want to work with the owner (Naoise Gaffney) so that we can provide Full Stack Development solutions for Clients to further their needs and our financial safety.
	* As a Collaborator, I want to satisfy my curiosity about European Cities and Countries, access information and simple statistics about each to further my interests and satisfy my curiosity.
	* As a Collaborator, I want to review the code on GitHub to determine the relevant skills the owner (Naoise Gaffney) has for a potential future collaboration to drive business.
	* As a Collaborator, I want to contact the owner (Naoise Gaffney) to discuss the details of the potential for a collaboration so that I can plan the continued development of my business for my Clients.

* As an Employer, I want to determine the usability and real-world application as well as the layout and visual impact of the website, to determine whether the owner (Naoise Gaffney) has the aptitude for Front-End design to employ him to further my business.
	* As an Employer, I want to determine whether the Code Quality on GitHub is proof that the owner (Naoise Gaffney) has the aptitude for Front-End/Full Stack development to employ him to further my business.
	* As an Employer I want to review the GitHub documentation to determine whether the owner (Naoise Gaffney) has good Software Development Practices, to employ him to further my business.
	* As an Employer, I want to contact the owner (Naoise Gaffney) to discuss the details of hiring or contracting him for design and development work.

The User Experience and Design MarkDown document covers the 5 planes in detail, and contains the Balsamiq wireframes and mockups of the website (simplified views, and not complete representations).

[User Experience and Design MarkDown](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20-%20User%20Experience%20and%20Design.md)

## Solution
### Features

The website enables Users, Collaborators and Employers the ability to view European city and country statistics in an informative and interactive way, all accessible via the single "Dashboard". "Navigation-less".

The website provides the owner with a global on-line presence, and an ability to position and prove the value of the Front-End design and development skills acquired as a student at the Code Institute.

The website displays data from a multitude of disparate sources, a noSQL Database (Firebase Firestore), and multiple API's (Google Maps, OpenWeather, D3, EmailJS, REST Countries), a static internal array, and links them to each European capital city.

This website uses a Dashboard Information Architecture. Everything is accessible from the one page in the form of "pop-ups" (InfoWindows, JS and CSS Modals). No navigation within the website is required. All external links in the Fixed Footer CSS Modals ("pop-ups") open up in new tabs.

This is a layered website making use of 3 dimensions (x, y, z). The background colour is a linear gradient, the same linear gradient is used throughout the website to enhance the common look-and-feel. The Google Map is at the bottom (`z-index: 1`). The Fixed Footer is visually "on top" of the Google Map though with the same z-index (`z-index: 1`). The backdrop (grey transparent background that toggles when either a JS or a CSS Modal is activated) is on top of the Google Map and Fixed Footer (`z-index: 2`), and stops any clicking on elements "behind" the backdrop. The CSS Modals are on top of the backdrop. (`z-index: 4`), and the JS Modals are on top of everything else (`z-index: 100`).

[User Walkthrough Video - an Overview](https://www.dropbox.com/s/ynb6myith810x8c/CinC%20Walkthrough%20-%201080P.mov?dl=0)

#### Existing Features
The features of the "Dashboard":

* The website/webpage loads, creates a Google Map with Markers for each European capital city and centres the map on Firhouse, Dublin, Ireland. The browser requests access to the User's geolocation. If accepted, the map is recentred on the geolocation, otherwise it remains centred to the default location.
* The background uses a linear gradient that is used for all key elements of the website adding to a common look-and-feel (background (html, body), footer, navigational controls, and JS/CSS Modals). With a slight transparancy and shadow it gives the JS/CSS Modals a curved look.
* Each map marker is clickable, revealing a Google InfoWindow ("pop-up") with the Capital City, Country, Latitude and Longitude (static internal Array[]), the current weather (real-time from the OpenWeather API: temperature, description, and air pressure). The 2 buttons:
	* Overview Buttton => displays the flag, native name, regional information, official languages, currencies, and calling code (real-time from the REST Countries API). Closed via the Close Button (JS EventListener and CSS).
	* Statistics Button => displays a population graph (real-time and updated automaically upon DB change by the D3 API using data from the noSQL Firebase Firestore), and further information related to the country (real-time from the REST Countries API). Closed via the Close Button (JS EventListener and CSS).

* The Fixed Footer provides links to a CSS Modal. The Fixed footer FontAwesome icons zoom-in (`transform: scale (1.5)`) when hovered over (inviting the User to click on them):
	* About => description of the website, and instructions on how to navigate it, while also describing the other CSS Modals. Closed via the Close Button (HTML and CSS).
	* API's => a list of links to the API's used for this website. Closed via the Close Button (HTML and CSS).
	* Code Snippets => a list of links to the Code Snippets, Courses and Walkthroughs used to gain the knowledge to apply the skills to create this website. Closed via the Close Button (HTML and CSS).
	* Contact Form => a feedback form, allowing Users to provide feedback and suggestions on improvements. The form requires all fields to be filled in, and a valid e-mail address format is used, before submitting the form. On success, the Modal is updated with a "Thank you!" message, and on failure, an "Apology message" (EmailJS API). Closed via the Close Button (HTML and CSS).
	* About Me => links to my work and sites related to what I've done as a student at the Code Institute. Closed via the Close Button (HTML and CSS).

#### Features Left to Implement
* Additional dynamic and real-time data in the Overview and Statistics Modals.
* Make the D3 Graphs (Statistics Modals) interactive ("clickable") and include more data.
* Internal: move static data (city and country array) to the Firebase Firestore or MongoDB.
* Add Map Markers and dynamic data for all the Capital Cities and Countries in the World.
* Nice-to-have: allow the user to change the theme, by selecting from a number of predefined themes (dark, light, funky...).
* Start with a destination form asking for permission to use the Browser's geolocation function, or allow the User to enter a city to centre the map on, or use the default of Firhouse, Dublin, Ireland.
* As in all development projects, there is always room for continuous improvement.
	* Given the fact that I've had "to fight" the Google Map JS scripts when styling the Google Map Markers InfoWindows, I would rewrite that part using full customisation (own code), however, I was not aware of all of the challenges I'd be facing on this project. It's a fabulous learning experience. :-)
	* I'd break out some of the functions in initMap() to make this more modular and scalable.

### Code

[Code Documentation and Walkthrough]()

## Technology

A list of the languages, frameworks, libraries, and other tools used for this project.

### Code:
* [HTML 5.2. - W3C Recommendation, 14 December 2017](https://www.w3.org/TR/html52/)
	* The project uses HTML 5 to create the content.
* [CSS 3 CSS - Snapshot 2018 W3C Working Group Note, 22 January 2019](https://www.w3.org/TR/css-2018/)
	* The project uses CSS 3 to style the content and provide the layout.
* [ECMAScript&reg; 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/)
	* The project uses JavaScript, based on the ECMAScript language specification and implemented by numerous browser vendors. As a general rule, I read the implementation of this at [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

### Development and Staging Platforms and Environments
* [GitHub / GitPod /Git / GitHub Pages](https://github.com/)
	* The project uses GitHub:
		* GitPod to create and edit the project files (HTML 5, CSS 3, and JavaScript).
		* Git to add, commit, and push the project files to GitHub.
		* GitHub Pages turns GitHub Repositories into Websites.
* [Code Institute GitPod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template)
	* Using the GitPod Full Template from the Code Institute for my project.
* [DropBox](https://www.dropbox.com/)
	* Using DropBox as a staging area for Visual Studio Code, and synching this with GitHub.
* [Visual Studio Code](https://code.visualstudio.com/)
	* Code writing and staging. Use Visual Studio Code for Dev (Code Snippets), Test (fully-functioning), and Production (pushed to GitHub, and published on GitPages).
* [LiveServer for Visual Code Studio](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
	* This is the local Web Server used for development and testing, running as an add-on to Visual Studio Code.

### Documentation Tools
* [MacDown](https://macdown.uranusjr.com/)
	* Using this application to write this documentation in MarkDown.
* [Balsamiq](https://balsamiq.com/)
	* Using this application to create website wireframes and mockups.

### Acknowledgements and Attributions of Used Features and Functions
* [Google Fonts: Raleway](https://fonts.googleapis.com/css?family=Raleway%7C&display=swap)
	* Using this font in different sizes for all text.
* [FontAwesome CDN](https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)
	* Using FontAwesome font icons to add visual elements to key website features, making the website memorable and easier to navigate.
* [CSS Modal from W3Schools](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_target_modal)
	* Using this modal function for my Fixed Footer links.

### General Knowledge and Hours of Reading
* [Website: CSS Tricks](https://css-tricks.com/)
	* A website on more than CSS, for example Articles, Videos, Almanac of CSS Features, Code Snippets, Newsletter, Jobs, and Guides all related to front-end web development. I get happily "distracted" by this site, always learning and testing new skills.
* [Master CSS Grids](https://mozilladevelopers.github.io/playground/css-grid/)
	* The best explanation, example, and walkthrough of CSS Grids I've yet to come across. It's simple, really.
* [FREE: Pro Git eBook by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
	* Read parts of this eBook to better understand Git.
* [FREE PDF: Elements of User Experience Design by Jesse James Garrett (second edition 2010)](https://www.academia.edu/33276128/The_Elements_of_User_Experience_-_Jesse_James_Garrett)
	* User experience design makes sure the aesthetic and functional aspects of an element works in the context of the rest of the website.
* Udemy Courses:
	* [Udemy Course on JavaScript the Complete Guide 2020 by Maximilian Schwarzmüller](https://www.udemy.com/course-dashboard-redirect/?course_id=2508942)
	* [Udemy Course on D3 & Firebase by Shaun Pelling](https://www.udemy.com/course/build-data-uis-with-d3-firebase/)
* Code Snippet examples and walkthroughs:
	* [Google Maps API - Code Institute walkthrough by Matt Rudge](https://codeinstitute.net/)
	* [Google Maps API - Bill Traversy @ Traversy Media](https://youtu.be/Zxf1mnP5zcw)
	* [OpenWeather API - OpenWeather API JavaScript example and walkthrough by Shanjah Raj](https://youtu.be/GXrDEA3SIOQ)
* API Documentation:
	* [Google Maps JavaScript API Description - to create the map and markers](https://developers.google.com/maps/documentation/javascript/tutorial)
	* [OpenWeather API Description - adding real-time weather information to the marker tool-tips](https://openweathermap.org/api/one-call-api)
	* [D3 API Description - to display dynamic graphs and statistics](https://github.com/d3/d3/blob/master/API.md)
	* [EmailJS API Description - to enjoy user feedback to improve the website](https://www.emailjs.com/)
	* [REST Countries EU API Description - Global Country data for Overview and Statistics Modals](https://restcountries.eu/)
* noSQL Database:
	* ["Built with Firebase &reg;" - to store and retrieve D3 and City data](https://firebase.google.com/)

### Elixir of Life
* [Strong Black French Press Coffee](https://www.youtube.com/watch?v=st571DYYTR8)
	* Keeps me alert and on-schedule; keeps me going through the night. This is the secret source of my programming-powers. :-)

### Technological Design Decision
Opted for a Dashboard Information Architecture as it's the easiest for a User to use, though not always to design and develop for.

Grid Layouts and Flexbox are used for the layout of the Dashboard. To further my understaning and skill development, I've opted for vanilla HTML 5 and CSS 3, as opposed to using one of many frameworks. I also opted for vanilla JavaScript as far as I can manage, however, I use D3 to create the real-time dynamic population graphs. I do this to ensure I understand the workings before embarking on simplification by using frameworks. jQuery is not necessary for this project as JavaScript has the same functions built-in, however, in future jQuery is good for more complex uses (not required for this simple design).

Using GitHub as a repository and GitPages for publishing the website is an easy choice to make, as it works well and is easy to use.

## Testing
### Automated Testing Technology
![Software Testing](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Software%20Testing%20-%20Simplified.png)

Automated testing is performed using:

* [Selenium IDE](https://www.selenium.dev/selenium-ide/) - the Chrome and Firefox extensions.
* [Cities in Countries Test File](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/test/Capital%20Cities%20in%20Countries.side)

### Manual Testing Technology
The following combination of software and hardware is used for all manual tests:

* Chrome on MacOSX (MacBook Pro) for both laptop/large display and mobile devices (inspect --> responsive).
* Firefox Developer Edition on MacOSX (MacBook Pro) for both laptop/large displays and mobile devices (Web Developer Tools --> Responsive Design Mode).
* Safari on MacOSX (MacBook Pro) for laptop/large display testing.
* Physical devices: Samsung Galaxy Note 10+ 5G with Chrome, Samsung Browser and Firefox. Apple iPhone 8 with Chrome and Safari.

### Testing Criteria
The Acceptance Criteria are a compressed (simplified) version of the Use Cases described under section Processes --> UX.

### Testing Notes
All devices and formats are tested in both portrait and landscape mode. The website is responsive and supports all tested browsers.

A couple of things to note:

* On the smallest devices (Galaxy S5 and Apple iPhone 5) some of the JS and CSS Modals go outside of the viewing area. The JS and CSS Modals are scrollable:  `.modal { overflow-y: auto; max-height: 90vh; }`.
* To ensure the correct loading of Google Maps, and to avoid the occasional "Uncaught (in promise) pd {message: "initMap is not a function", name: "InvalidValueError"...}" both the `async` and `defer` attributes ADDED to the Google Map JS script tag in index.html (gTest.html), and `<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDKoKXKgFfLTb9SNLk0QEq1FmnNJD3hSg&callback=initMap" async defer></script>` is loaded last of all JS Scripts in index.html (gTest.html). I think a rewrite of my code is required.

### HTML, CSS, and JS Validation
#### HTML
[HTML Validation](https://validator.w3.org/nu/)

![HTML Validated](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/HTML%20Validation.png)

[HTML Validation Link for the website](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnaoisegaffney.github.io%2FCitiesInCountries%2F)

#### CSS
[CSS Validation](https://jigsaw.w3.org/css-validator/#validate_by_input)

![CSS Validated](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CSS%20Validation.png)

[CSS Validation Link for the website](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnaoisegaffney.github.io%2FCitiesInCountries%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### JavaScript
[JavaScript Validation](https://jshint.com/)

No errors. A number of "false positives" on undefined variables. They are either JS functions and objects called in external JS files such as from Google or my own D3 for Graphs. `markerStringArray` is used to create the URL link for the OpenWeather API `fetch()`.

Metrics:
> There are 26 functions in this file.
> 
> Function with the largest signature take 2 arguments, while the median is 1.
> 
> Largest function has 17 statements in it, while the median is 2.
> 
> The most complex function has a cyclomatic complexity value of 5 while the median is 1.

Six undefined variables. (false positives):
> 388	google
> 
> 401	google
> 
> 416	google
> 
> 424	markerStringArray
> 
> 426	markerStringArray
> 
> 426	markerStringArray
> 
> 553	d3Stats
> 
> 567	initZoomControl
> 
> 568	initMapTypeControl

## Deployment
For this project I Visual Studio Code for coding, and using the Source Code Management provider with git to synch (stage, commit, synch) my updates to GitHub.

Visual Studio Code is the development platform of choice from now on, together with GitHub for deployment and GitPages for publishing.

I'm working off of the same main branch on GitHub, though I have a staging environment on DropBox for Visual Studio Code.

Local deployment is performed in Visual Studio Code to the local LiveServer Web Server.

When using Visual Studio Code with GitHub I perform the following steps:

![Development & Testing Cycle](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Development%20Cycle%20-%20Simplified.png)

Development (Code Snippets and API Examples) --> Test --> Production, with frequent testing cycles. Final QA is performed using Selenium IDE in the Production environment. Running the website via HTML and CSS Validators to clean up the code, making sure it's compliant. Using Chrome Devtools to run Coverage on the website to ensure all CSS code is used, and used appropriately.

* Testing and Development
	* As I work in Visual Studio Code and make changes in any code, as soon as I save the changes the LiveServer Web Server automatically updates the browser to show the changes.
	* I use separate versions for Development, Testing and Production.
		* Testing consists of trying new features and functions as snippets first (code snippets and API examples), then in the current Test code, and when all works well the code is transferred to my main Production environment.
* Deployment
	* To track all new and modified files from the working directory to the staging area.
		* Click on Source Control (branch-icon on the left of the screen).
		* Click on More Actions... (...) and click on 'Stage All Changes'
	* To save all staged changes, along with a brief description from the user, in a “commit” to the local repository.
		* Click on Source Control (branch-icon on the left of the screen).
		* Click on More Actions... (...) and click on 'Commit All'
		* Enter a short description in the text box and press Enter.
	* To push changes in the local repository to the GitHub.
		* Click on Source Control (branch-icon on the left of the screen).
		* Click on More Actions... (...) and click on 'Commit All'
* Publishing
	* Go to (click on link) [Project Repository](https://github.com/NaoiseGaffney/CitiesInCountries)
		* Click on Settings. Scroll down to GitHub Pages.
		* Under Source click on the Select Source button, and select 'master branch'.
		* After a couple of minutes a message above Source says the following: "Your site is published at https://naoisegaffney.github.io/Professional-Training-Development/".
		* Click on the link to access the published website: [Cities in Countries Data](https://naoisegaffney.github.io/CitiesInCountries/)

## Credits
![GaffCo Consulting Logo](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/GaffCo%20-%20Background.png)

GaffCo Consulting - [Naoise Gaffney: naoise.gaff.gaffney@gmail.com](mailto:naoise.gaff.gaffney@gmail.com)

![Code Institute Logo](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/CodeInstituteLogo.png)

Code Institute Mentor - [GitHub: 5pence - Spencer Barriball](https://github.com/5pence)

### Content
- [GitHub: Project Repository](https://github.com/NaoiseGaffney/CitiesInCountries)
- [Website: Professional Training and Development](https://naoisegaffney.github.io/CitiesInCountries/)

### Media
* [REST Countries](https://restcountries.eu/)
	* Using flag images from this REST Countries API (SVG images).
* [FontAwesome CDN](https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)
	* Using FontAwesome font icons to add visual elements to key website features, making the website memorable and easier to navigate.

### Acknowledgements
The inspiration for the project comes from my current role as a learner at the Code Institute. I wanted to broaden my programming horizons, challenge myself, and provide some idea of my potential as a prorammer.

This is my second milestone project for the Diploma in Full Stack Development at the Code Institute. I find that the milestone projects are excellent in getting me to understand the concepts covered during the course, while giving me an opportunity to fail, and fail fast, and in the process learn something new.

Please see the Technology section for detailed attributions regarding CSS and JavaScript features and functions that I've used from numerous knowledgeable and skilled individuals and organisations. All code, HTML, CSS, and JavaScript contains ample comments with attributions to the above-mentioned sources.

The Diploma in Full Stack Development provides a great foundation of tools and technologies used to work as a professional developer. It's a case of being a Jack-of-All-Trades, and a Master of None (or Some). It's up to each developer to expand upon the knowledge and skills acquired during the course through additional self-study of elements covered as a part of the course as well as other frameworks, languages, tools, methodologies,  processes, and solutions.

Thank you Code Institute for allowing me on this journey in life!

Thank you Spencer Barriball for your unwavering support!