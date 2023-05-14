


## Evento
*Event Management App for the Web*

##### PROBLEM STATEMENT

Whenever we are organizing an event in colleges, mostly the usual approach is as follows. 

We create a google form for accepting registrations, then we craft a long message on WhatsApp about the event and attach the Google Form link to the message, and send this message to our different WhatsApp groups, but this approach has a lot of limitations. 

1. Anyone can manipulate the message and can also remove the registration link or even add false information.
2. Google forms are boring and dull. 
3. We cannot attach other services to google forms such as sending confirmation emails to people who registered for the event.
4. Event information through Whatsapp only reaches a limited number of people.
5. We cannot sell tickets without a proper web application.
6. Creating a website to reach a large number of people is a good choice but creating web pages is time-consuming and requires technical knowledge.

##### OBJECTIVE

The goal is to develop a web-based platform that will allow event organizers to create an event, promote it and manage guest registrations. 

The platform should provide an intuitive and fast interface for 

1. Creating hosted web pages for the events with a single click.
2. Sharing event information with images, descriptions, and google maps.
3. Accepting guest registrations using auto-integrated forms 
4. Sending confirmation emails automatically to registered users
5. Making it easy for the organizers to manage the guest list.
6. Turning registration form on/off based on the requirements.
7. Proper SEO so that the event information reaches a wider audience


##### INTRODUCTION

The **Event Management App aka ‘evento’ **is a platform to create beautiful and responsive web pages for events. The web pages are used to share event information with a wider audience. It displays the following information related to the event.

1. Date 
2. Venue 
3. Time 
4. Location
5. Cover photo
6. Description of the event. 
7. Registration Form
8. Organizer’s Contact Information

The event page is automatically assigned a <span style="text-decoration:underline;">unique short URL</span> that can easily be shared on Social Media.

The organizers can easily manage the guest list such as adding and removing guests from the dashboard.

Organizers can also turn on/off the registration form with a single click.

On registration, this app also sends a confirmation email to the guests.


##### FEATURES

The platform has the following features -

**Authentication**



1. The app authenticates users using Google Sign In.

**Display all the events**



1. On the dashboard, a user can see all of the events created by him/her.
2. The dashboard displays quick information about all events such as 
1. Preview image 
2. Date 
3. Venue 
4. Time 
5. Title 
6. The total number of people who registered for that event.
3. It also shows the status of the event page (Live/Draft).

**Quick Menu for Event**



1. Each event in the list has a quick menu that provides the following options - 
    1. Delete event
    2. Manage Event
    3. Copy URL
    4. View Event Page

**Delete Event**


   It deletes the event permanently and all the associated data

**Copy URL**

  It copies the event URL to the clipboard

**View Event**

It opens the event page for preview in the new tab

**Manage Event**



1. It opens the event management dashboard and offers the following tabs
1. Edit
2. Guests
3. Access
2. Displays the event title at the top and some quick information about the event such as 
    1. Date 
    2. Venue
    3. Time
    4. Location

**Edit Tab**



1. It allows the users to edit the information about the event. It offers the following fields
    1. Title
    2. Cover Image
    3. Date and Time
    4. Location with live preview on Google Maps
    5. A rich text editor for adding the description or some special information about the event

**Guests Tab**



1. This shows the list of all the people who registered for the event.
2. Whenever a person registers on the event page, he/she fills out the registration form and submits it. After successful submission, the person's details are added to this list.
3. We can manage guests using this under this tab like we can remove a person if we don’t want him/her to attend the event.
4. It also shows the total number of people who registered for the event so far.
5. User can also download the guest list in **.csv** format and import it into **Google Sheets** or **Microsoft Excel.**
6. We can also invite people from here also, upon adding their email, they will receive a confirmation email sent by the app on behalf of the hosts of the event. 

**Access Tab**



1. It provides the interface to easily turn on/off the registrations. 
2. If turned off, the registration form will not be rendered on the event page and no guest can register from that page.

**Event Page**



1. It is a beautiful and responsive web page generated dynamically by the platform. 
2. The pages are rendered on the server-side providing great SEO support
3. It shows all the information about the event such as 
1. Cover Image, 
2. Title
3. Date 
4. Venue 
5. Time 
6. Event description 
7. Host information
8. Embedded Google map showing a marker at the venue.
4. It contains a dynamically generated registration form through which people can submit their information and register for the event.
5. The registration form can be turned on/off with the event’s access settings in the dashboard.


##### REQUIREMENTS

There are no strict requirements to run this project. This app can work in all modern browsers such as - 



1. Microsoft Edge
2. Google Chrome
3. Brave


##### TECHNOLOGIES USED

**NEXT.JS**

Next.js is a React framework that gives you the building blocks to create web applications.

By framework, we mean Next.js handles the tooling and configuration needed for React and provides additional structure, features, and optimizations for your application.

Next.js provides features to solve common application requirements such as routing, data fetching, and integrations - all while improving the developer and end-user experience.

An individual developer or a larger team can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.

**CHAKRA UI**

Chakra UI is a component-based library. It's made up of basic building blocks that can help you build the front-end of your web application.

It is customizable and reusable, and most importantly it supports ReactJs, along with some other libraries too.

**MONGODB ATLAS**

MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB. Atlas simplifies deploying and managing databases while offering the versatility needed to build resilient and performant global applications on various cloud providers.

MongoDB Atlas is a cloud service by MongoDB. It is built for developers who'd rather spend time building apps than managing databases. This service is available on AWS, Azure, and GCP.

It is the worldwide cloud database service for modern applications that give best-in-class automation and proven practices to guarantee availability, scalability, and compliance with the foremost demanding data security and privacy standards. We can use MongoDB's robust ecosystem of drivers, integrations, and tools to create faster and spend less time managing our database.

**GOOGLE CLOUD**

Google Cloud Platform (GCP), offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube. Alongside a set of management tools, it provides a series of modular cloud services including computing, data storage, data analytics, and machine learning. Registration requires credit card or bank account details.

Google Cloud Platform provides infrastructure as a service, platform as a service, and serverless computing environments.

**GOOGLE MAPS PLATFORM**

Google Maps Platform is a set of APIs and SDKs for retrieving location-based data from Google and embedding Google Maps imagery into mobile apps and web pages.

**GOOGLE OAUTH SIGN IN**

OAuth is a technological standard that allows you to share information between services without exposing your password. It's a widely-adopted standard that developers of websites and apps use, and you probably use services every day that utilize OAuth.

For example, an application can use OAuth 2.0 to obtain permission from users to store files in their Google Drives. This OAuth 2.0 flow is specifically for user authorization.

**AWS S3**

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.

**VERCEL**

Vercel is a platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or database.

It provides a great developer experience to take care of the hard things: deploying instantly, scaling automatically, and serving personalized content around the globe.

It makes it easy for frontend teams to develop, preview, and ship delightful products and services, where performance is the key.

**HEROICONS**

Heroicons is a set of free SVG icons by the makers of Tailwind CSS that come in two different sizes, and are pre-optimized to be styled with CSS classes directly in your HTML.

**QUILL**

Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.

**COURIER**

Courier is a simple, fast, and reliable transactional email API. It's the perfect tool to send transactional emails for your web application. Courier provides the infrastructure needed to turn your email API into a complete notification system. 

The Courier API allows you to deliver complex email use cases with a single API call. 


**Conclusion**

A web-based platform has been developed that allows event organizers to create an event, promote it and manage guest registrations. 
The platform provides an intuitive interface for -

1. Creating hosted web pages for the events with a single click.
2. Sharing event information with images, descriptions, and google maps.
3. Accepting guest registrations using auto-integrated forms 
4. Sending confirmation emails automatically to registered users
5. Making it easy for the organizers to manage the guest list.
6. Turning registration form on/off based on the requirements.
7. Proper SEO so that the event information reaches a wider audience

**References**

1. [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [https://en.wikipedia.org/wiki/HTML](https://en.wikipedia.org/wiki/HTML) 
3. [https://en.wikipedia.org/wiki/CSS](https://en.wikipedia.org/wiki/CSS)
4. [https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework))
5. [https://en.wikipedia.org/wiki/JavaScript](https://en.wikipedia.org/wiki/JavaScript)
6. [https://goqr.me/api/](https://goqr.me/api/)
7. [https://miro.com/about/](https://miro.com/about/)
8. [https://vercel.com/docs](https://vercel.com/docs)
9. [https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) 
10. [https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
11. [https://www.freecodecamp.org/news/why-should-you-start-using-chakraui/](https://www.freecodecamp.org/news/why-should-you-start-using-chakraui/)
12. [https://www.mongodb.com/docs/atlas/](https://www.mongodb.com/docs/atlas/)
13. [https://www.javatpoint.com/mongodb-atlas](https://www.javatpoint.com/mongodb-atlas)
14. [https://en.wikipedia.org/wiki/Google_Cloud_Platform](https://en.wikipedia.org/wiki/Google_Cloud_Platform)
15. [https://github.com/googlemaps/](https://github.com/googlemaps/)
16. [https://www.hp.com/us-en/shop/tech-takes/what-is-oauth](https://www.hp.com/us-en/shop/tech-takes/what-is-oauth)
17. [https://developers.google.com/identity/protocols/oauth2/web-server](https://developers.google.com/identity/protocols/oauth2/web-server)
18. [https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
19. [https://vercel.com/docs](https://vercel.com/docs)
20. [https://www.producthunt.com/posts/heroicons-2](https://www.producthunt.com/posts/heroicons-2)
21. [https://quilljs.com/](https://quilljs.com/)
22. [https://www.courier.com/email-api/](https://www.courier.com/email-api/) 
