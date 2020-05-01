# Cities in Countries Data - User Experience and Design

"The important thing is to not stop questioning. Curiosity has its own reason for existing." - Einstein

A responsive and interactive website using HTML 5, CSS 3, and JavaScript to provide an informative overview of Cities and Countries in Europe (expanded in future to include the World) through Google Map Markers, with Modals (“pop-ups”) providing place details and statistics.

## User Experience and User Design - 5 Planes
This document covers the user experience and design of this website based on the 5 Planes from the Elements of User Experience by Jesse James Garrett:

1. Strategy Plane: User Needs and Business Objectives.
2. Scope Plane: Functional Specification (Tasks) and Content Requirements (Information).
3. Structure Plane: Interaction Design (Tasks) and Information Design (Information).
4. Skeleton Plane: Interface (Tasks), Navigation (Tasks/Information), and Information Design (Information).
5. Surface Plane: Visual Design.

## Strategy
Users see the value in terms of satsfying their curiosity regarding European Capital Cities and Countries. Collaborators and Employers see the value provided in terms of Front-End design and development, and currently to a lesser degree Full Stack Development.

As a showpiece of what I've learned so far, and able to put to good use, it highlights my potential as a programmer to both Collaboratora and Employers.

### Is the Content Culturally Appropriate?
The website is aimed at both a corporate and personal audience, and has to satisfy the needs of both audiences. It has to appeal to both audiences without alienating one or the other.

The website uses appropriate icons, styles, colours, and clear navigation for all audiences.

### Is the Content Relevant?
This is a site aimed at individuals interested in gaining basic knowledge of European Capital Cities and Countries.

Collaborators and Employers gain an understanding of my abilities regarding usability and real-world application, layout and visual design, code quality, and software development practices.

### Can We Track and Catalogue the Content in an Intuitive Way?
The website uses a single Dashboard, intuitive navigation, structure and content to suit the audiences described above. It's easy to use and follow.

### Is the Technology Appropriate?
A website using HTML 5, CSS 3, JavaScript, a noSQL Database, and 5 API's is an appropriate way to provide a single display of a lot of disparate information.

It does what no CV, nor Diploma, nor LinkedIn Profile can do. It offers irrefutible evidence of my current knowledge and skill level, as well as a clear indication of my potential as a programmer.

### Why are We So Special?
Showcasing the use of multiple data sources, API's and displaying them in a coherent and clear manner on a intuitive and easy-to-use Dashboard shows I have potential as a programmer, even though I've a lot more to learn.

In addition, beyond attending the Code Institute course I frequently attend additional on-line courses to further my knowledge, and putting this knowledge to good use on the milestone projects.

The knowledge and skills gained by this mielstone project are of great value to me and a potential future Collaborator and Employer.

### Technology Considerations?
The website is built with simplicity and ease-of-use in mind. It's easily accessible and read on anything from the smallest mobile devices to the largest laptop and desktop displays = Responsive Web Design.

It uses HTML 5, CSS 3, and JavaScript which makes it easy enough to provide a responsive and interactive website.

### Why Would a User Want This?
Building the website is a first step in a targeted personal marketing- and sales-campaign, and is a part of the overall business plan for GaffCo Consulting/Naoise Gaffney.

### B2B and B2C
The simple and effective design, coupled with the technologies used shows I've at least a little more than a fundamental understanding of the concepts covered by the Code Institute and other learning organisations. This is of interest to potential Collaborators and Employers.

The clean and clutter-free interface, the clear, concise, and concrete course overview and details appeal to B2B users. On top of this they have ample communication avenues to further the conversation.

### Strategy Trade-Off
Importance: UXD driven by business goals and user needs
Viability/Feasibility: Can we build a solution given limited time and resources:

![Importane versus Feasibility Table](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/OppImpFeas.png)

For this initial sprint I'm concentrating on creating:

* European Capital Cities and Countries
* Showcase Knowledge and Skills
* Contacts and Social Links

![Importance versus Feasibility](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/OppImpFeas2.png)

## Scope
* Useful: Is it useful to clients? Is it useful to us?
	* Yes, on both accounts.
		* Collaborators and Employers can ascertain my potential as a programmer. I get an opportunity to showcase my new knowledge and skills.

### Functional Requirements
The Scenarios to Requirements:

![Scope: Scenario --> Requirements](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Functional%20Requirements.png)

### Content Requirements
A single pane of information using the well-known Google Map to entice people to click on the Map Markers. A common look-and-feel for all elements. Displaying correlated data from disparate data sources.

## Structure
The website structure is a Dashboard, with a simple and predictable structure. No navigation is required, with the exception of the external links in the CSS Footer Modals.

### Interaction Design
* The website enables Users, Collaborators and Employers the ability to view European city and country statistics in an informative and interactive way, all accessible via the single "Dashboard". "Navigation-less".
* This website uses a Dashboard Information Architecture. Everything is accessible from the one page in the form of "pop-ups" (InfoWindows, JS and CSS Modals). No navigation within the website is required. All external links in the Fixed Footer CSS Modals ("pop-ups") open up in new tabs.
* A user clicks on a Map Marker --> Tool-Tip wtih city, country, latitude and longitude are displayed (from the internal markersArray[]). The real-time weather is displayed (temperature, description, and air pressure) for the location (from the OpenWeather API). The 2 buttons:
	* Overview Buttton => displays the flag, native name, regional information, official languages, currencies, and calling code (real-time from the REST Countries API). Closed via the Close Button (JS EventListener and CSS).
	* Statistics Button => displays a population graph (real-time and updated automaically upon DB change by the D3 API using data from the noSQL Firebase Firestore), and further information related to the country (real-time from the REST Countries API). Closed via the Close Button (JS EventListener and CSS).
* The Fixed Footer provides links to a CSS Modal. The Fixed footer FontAwesome icons zoom-in (`transform: scale (1.5)`) when hovered over (inviting the User to click on them):
	* About => description of the website, and instructions on how to navigate it, while also describing the other CSS Modals. Closed via the Close Button (HTML and CSS).
	* API's => a list of links to the API's used for this website. Closed via the Close Button (HTML and CSS).
	* Code Snippets => a list of links to the Code Snippets, Courses and Walkthroughs used to gain the knowledge to apply the skills to create this website. Closed via the Close Button (HTML and CSS).
	* Contact Form => a feedback form, allowing Users to provide feedback and suggestions on improvements. The form requires all fields to be filled in, and a valid e-mail address format is used, before submitting the form. On success, the Modal is updated with a "Thank you!" message, and on failure, an "Apology message" (EmailJS API). Closed via the Close Button (HTML and CSS).
	* About Me => links to my work and sites related to what I've done as a student at the Code Institute. Closed via the Close Button (HTML and CSS).

### Information Design
Information Architecture: Dashboard

![Information Architecture](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Information%20Architecture.png)

## Skeleton
Interface Design: The best arrangement and visual presentation of the elements
Navigation Design: Intuitive navigation and completion of tasks
Information Design: Skeleton Layout (Mock-up)

### Interface Design
The website shares a common and recognisable look-and-feel, with the same linear-gradient colour scheme, Raleway font, imagery (FontAwesome, Flags and D3 Graphs), and footer links.

The fixed footer elements are easily recognisable and understood.

Navigating is easy, there's only one simple choice, the Dashboard, clicking on Google Map Markers, InfoWindow buttons, modals, and footer links.

### Navigation Design
Internal website navigation is simple, it's all displayed on a single Dashboard.

External navigation, such as for the links on the fixed footer at the bottom of the page, open up in new tabs (`target="_blank"`).

### Information Design
Wireframe Diagrams:
![Cities in Countries](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/CinC%20Wireframe.png)

## Surface
### Visual Design
[Capital Cities in Countries Data](https://naoisegaffney.github.io/CitiesInCountries/)

![Screenshot of the main page (index.html)](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/images/CinCDashboard.png)

A responsive website using only HTML 5 and CSS 3 to provide Training and Development and Coaching opportunities to organisations and individuals.

## Acknowledgements
* [FREE PDF: Elements of User Experience Design by Jesse James Garrett (second edition 2010)](https://www.academia.edu/33276128/The_Elements_of_User_Experience_-_Jesse_James_Garrett)
	* User experience design makes sure the aesthetic and functional aspects of an element works in the context of the rest of the website.