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



For this initial sprint I'm concentrating on creating:

* Online Presence
* Portfolio of Work
* Contacts and Social Links



## Scope
* Useful: Is it useful to clients? Is it useful to us?
	* Yes, on both accounts.
		* Clients and collaborators see the value provided in terms of a broad range of Training and Development and Coaching opportunities.
		* This enables me to reach a broader and global clientele that I would struggle to reach without an Internet presence such as this website.
* Sellable: Could we sell this if we had it?
	* Yes, all courses and coaching are available now.
* Buildable: Can we build this, affordably?
	* Yes, using HTML 5 and CSS 3. All the content is readily available.

### Functional Requirements
The Scenarios to Requirements:

![Scope: Scenario --> Requirements](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Scope.png)

### Content Requirements
One background image to create an emotional response, together with a motivational message. Icons to support the text elements, for navigation, and for contact. Text to describe the courses, programmes, and coaching.

## Structure
The website structure is a hierarchical one, with a simple and predictable structure. Navigating from one page to another is done via the hamburger-menu on the top-right corner. It's the only way to navigate the website.

### Interaction Design
* The homepage (index.html) has an exciting background image and motivational message. On the top-right corner is the hamburger-bar for navigating the website, and the fixed footer at the bottom has FontAwesome icon links (occasional text) for resumé, location, and contact (social links). The `<section>` is scrollable when there is too much text to fit on the one page.
* Navigating from the homepage (index.html) is done via the hamburger-menu on the top-right corner.
	* A user clicks on one of the menu items
		* Home (index.html)
		* Organisations (organisations.html)
		* Individuals (individuals.html)
		* Programmes (programmes.html)
* On any of the 3 pages (Organisations, Individuals, and Programmes):
	* Two boxes with course, coaching, or programme opportunities are presented. Clicking on any one of the course links will provide a modal (pop-up) with additional details, links to Google Calendar, Google Maps, a closure 'x', and a 'Book Now!' button.
* The fixed footer provides access to the FontAwesome icon links (occasional text) for resumé, location, and contact (social links). The links zoom-in (`transform: scale(1.5);`) during hover, and also provide a tool-tip with additional information.

### Information Design
Information Architecture: Hierarchical

![Information Architecture](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Information%20Architecture.png)

## Skeleton
Interface Design: The best arrangement and visual presentation of the elements
Navigation Design: Intuitive navigation and completion of tasks
Information Design: Skeleton Layout (Mock-up)

### Interface Design
The website shares a common and recognisable look-and-feel, with the same background image, hamburger-menu, fixed footer with links, and colour scheme.

The fixed footer elements are easily recognisable and understood, even more so thanks to the tool-tip on hover.

Navigating is easy, there's only one simple choice, the top-right hamburger-menu.

### Navigation Design
Internal website navigation is provided by the top-right hamburger-menu and is a feature across the website.

External navigation, such as for the links on the fixed footer at the bottom of all pages, open up in new tabs (`target="_blank"`) or relevant applications associated to the functions.

### Information Design
Wireframe Diagrams:

![Homepage: index.html](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Training%20and%20Development%20Services.png)

![Organisations: organisations.html](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Organisations.png)

![Individuals: individuals.html](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Individuals.png)

![Programmes: programmes.html](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Programmes.png)

## Surface
### Visual Design
"Organisations Achieve Greater Value through Professionally Coached Employees" - GaffCo Consulting Professional Communication Competence

[Professional Training and Development](https://naoisegaffney.github.io/Professional-Training-Development/index.html)

![Screenshot of the main page (index.html)](https://github.com/NaoiseGaffney/Professional-Training-Development/blob/master/docs/Screenshot%202020-03-30%2000.46.02.png)

A responsive website using only HTML 5 and CSS 3 to provide Training and Development and Coaching opportunities to organisations and individuals.

## Acknowledgements
* [FREE PDF: Elements of User Experience Design by Jesse James Garrett (second edition 2010)](https://www.academia.edu/33276128/The_Elements_of_User_Experience_-_Jesse_James_Garrett)
	* User experience design makes sure the aesthetic and functional aspects of an element works in the context of the rest of the website.