


## Evento
*Event Management App for the Web*




##### PROBLEM STATEMENT

Whenever we are organizing an event, the usual approach is as follows. 

We create a google form for accepting registrations, then we craft a long message on WhatsApp regarding the event and attach the Google Form link to the message, and send this message to our different WhatsApp groups, but this approach has a lot of limitations. 



1. Anyone can manipulate the message and can also remove the registration link or even add false information.
2. Google forms are boring and dull. 
3. We cannot attach other services to google forms such as sending confirmation emails to people who registered for the event.
4. Event information through Whatsapp only reaches a limited number of people.
5. We cannot sell tickets without a proper web application.
6. Creating a website to reach a large number of people is a good choice but creating web pages is time-consuming and requires technical knowledge.

Even if somehow we solve all these challenges, we still get stuck at managing guests. Sometimes we have a limited capacity and we only want to allow certain people. The organizers should be able to add/remove guests easily through an intuitive interface.


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


##### Entity Relationship Diagram



**UML Sequence Diagram**





Figure 1

**_Create a new event_**



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


	

Figure 2

**_Loads all the events created by the user_**



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")


Figure 3

**_Fetch event information by event_id_**



<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")


Figure 4

**_Update event information by event_id_**



<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")


Figure 5

**_Fetch attendees who registered for the event_**



<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")


Figure 6

**_Add new guests from the event manage dashboard_**



<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")


Figure 7

**_People register using the event page_**



<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")


Figure 8

**_User authentication_**


# **<span style="text-decoration:underline;">OUTPUT SNAPSHOTS</span>**



<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image12.png "image_tooltip")


Figure 1

**_Dashboard_**



<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image13.png "image_tooltip")


Figure 2

**_Creating new event page_**



<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image14.png "image_tooltip")


Figure 3

**_Quick Menu for events in the dashboard_**



<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image15.png "image_tooltip")


Figure 4.1

**_Event Edit Page _**



<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image16.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image16.png "image_tooltip")


Figure 4.2

**_Event Edit Page_**



<p id="gdcalert17" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image17.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert18">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image17.png "image_tooltip")


Figure 4.3

**_Event Edit Page_**



<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image18.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image18.png "image_tooltip")


Figure 4.4

**_Event Edit Page_**



<p id="gdcalert19" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image19.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert20">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image19.png "image_tooltip")


Figure 4.5

**_Event Edit Page_**



<p id="gdcalert20" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image20.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert21">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image20.png "image_tooltip")


Figure 5.1

**_Guests Management Tab (Loading guests who registered for the event)_**



<p id="gdcalert21" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image21.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert22">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image21.png "image_tooltip")


Figure 5.2

**_List of all the people who registered for the event_**



<p id="gdcalert22" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image22.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert23">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image22.png "image_tooltip")


Figure 5.3

**_Add new guest from dashboard_**



<p id="gdcalert23" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image23.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert24">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image23.png "image_tooltip")


Figure 5.4

**_New guest added successfully_**



<p id="gdcalert24" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image24.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert25">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image24.png "image_tooltip")


Figure 5.5

**_remove guest _**



<p id="gdcalert25" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image25.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert26">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image25.png "image_tooltip")


Figure 6.1

**_Event Access Settings _**



<p id="gdcalert26" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image26.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert27">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image26.png "image_tooltip")


Figure 6.2

**_Accept Registrations Turned off_**



<p id="gdcalert27" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image27.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert28">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image27.png "image_tooltip")


Figure 7

**_Sign In Page_**



<p id="gdcalert28" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image28.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert29">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image28.png "image_tooltip")


Figure 8.1

**_Event Page_**



<p id="gdcalert29" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image29.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert30">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image29.png "image_tooltip")


Figure 8.2

**_Event Page when registrations are turned off_**



<p id="gdcalert30" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image30.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert31">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image30.png "image_tooltip")


Figure 8.3

**_Event Page when registrations are turned on_**



<p id="gdcalert31" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image31.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert32">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image31.png "image_tooltip")


Figure 8.4

**_Event page when a person has been registered successfully_**



<p id="gdcalert32" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image32.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert33">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image32.png "image_tooltip")


Figure 9

**_Confirmation Email sent by the app on successful registration _**

**<span style="text-decoration:underline;">Conclusion</span>**

A web-based platform has been developed that allows event organizers to create an event, promote it and manage guest registrations. 

The platform provides an intuitive interface for -



1. Creating hosted web pages for the events with a single click.
2. Sharing event information with images, descriptions, and google maps.
3. Accepting guest registrations using auto-integrated forms 
4. Sending confirmation emails automatically to registered users
5. Making it easy for the organizers to manage the guest list.
6. Turning registration form on/off based on the requirements.
7. Proper SEO so that the event information reaches a wider audience

**<span style="text-decoration:underline;">Bibliography</span>**



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
