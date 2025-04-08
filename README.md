# Cook&Travel
## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.
### Elevator pitch
Have you ever wondered how to cook local cuisine while traveling in a foreign country, where to find the ingredients in that country, or how a dish is traditionally prepared in the native town of someone important—like your boss—who’s coming over to your house? Or perhaps you’re curious about recreating a dish in the specific style of a region from halfway across the globe? The **Cook&Travel**  website brings the world of global cooking to your fingertips. It offers access to millions of recipes and step-by-step instructions for the most popular dishes from around the world.

### Design
<img src="public/Images/IMG_5322.HEIC" alt="Design 1" width="200"> <img src="public/Images/IMG_5323.HEIC" alt="Design 2" width="200"> 
<img src="public/Images/IMG_5324.HEIC" alt="Design 3" width="200">
<img src="public/Images/IMG_5325.HEIC" alt="Searching" width="200"> <img src="public/Images/IMG_5326.HEIC" alt="About" width="200">





### Key features
- Secure login over HTTPS
- Ability to post recipes and provide instructions on how to prepare them.
- Ability to recommend where to find ingredients locally.
- Recipes and instructions can be liked and promoted by other users.
- Ability to input a location to view the most popular local dishes and recipes, curated based on community feedback.

### Technologies

I am going to use the required technologies in the following ways:

- **HTML**  
  - Uses correct HTML structure for the application.  
  - Three HTML pages:  
    1. Registration Page  
    2. Recipe Search Page  
    3. Recipe Posting Page
    4. Logged in About Page
    5. Logged out About Page

- **CSS**  
  - Provides styling for the application, ensuring responsiveness and a clean user interface.  
  - Implements a visually appealing design for buttons, forms, and recipe cards.  

- **React**  
  - Provides a dynamic and interactive user experience.  
  - Components for:
    - Registration and login forms  
    - Recipe search and display  
    - Recipe posting forms  
    - Real-time updates for likes using WebSocket  

#### **Service Endpoints**

| **Endpoint**                           | **What it Does**                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| `POST` [`/login`](#login)              | Authenticate users.                                                              |
| `GET` [`/recipe/search`](#recipesearch)| Retrieve recipes based on location, popularity, or keywords.                     |
| `POST` [`/recipe/upload`](#recipeupload)| Upload new recipes and instructions.                                             |
| `POST` [`/recipe/like`](#recipelike)   | Allow users to like recipes and trigger real-time updates via WebSocket.         |


- **DB/Login**  
  - Database stores:  
    - Users  
    - Recipes  
    - Instructions  
    - Locations  
  - Securely stores credentials (hashed passwords).  
  - Only authenticated users can post recipes or search for recipes/ingredients.  

- **WebSocket**  
  - As users like a recipe, updates are broadcast in real time to:  
    - The recipe owner.  
    - Other users viewing the recipe. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.eatandtravel.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Five different pages. One for each view. `index.html` (Login), `search.html`, `create.html`,  `logged_about.html` and `logged_out_about.html`.
- [x] **Proper HTML element usage** - I spent a lot of time learning about elements. I used header, footer, main, nav, img, a, fieldset, input, button, form, and many more.
- [x] **Links** - Links between views.
- [x] **Text** - About page has text.
- [x] **Images** - Image is displayed on the about page.
- [x] **Login placeholder** - Placeholder for auth on the login page.
- [x] **DB data placeholder** - for the most popular reciepes or ingridients locations in the region in the search page.
- [x] **WebSocket placeholder** - The search page recipes and ingridiets locations have the amount of like and texts themselves will update for other viewrs to see the most popular ones online.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I used a common CSS file to style these `main.css`. The views specific things are in `about.css` , `create.css`. and `search.css`
- [x] **Navigation elements** - Bootstrap NavBar. 
- [x] **Responsive to window resizing** - Bootstrap and `display:flex'
- [x] **Application elements** - I used a lot of `display:flex` to get things to align correctly.
- [x] **Application background** - I changed the background for every page, now it has different images as background, some of them scrolling some are fize
- [x] **Cascading CSS files ** - added mian.css and changed unique features for every page with additional css files.
- [x] **Deployed files ** - deployed to simon subdomain the simon.css code and deployed updated version of my startup to startup subdomain.
- [x] **Responsive** - use of the elements that work nicely both for desktop and phones

- [ ] 
## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Easy to install and use Vite.
- [x] **Components** - Easy to bring the code over from HTML, but had issues with the CSS for main, becuase I had some code outside main which made it complecated.
- [x] **Router** - Easy to creating the component routing.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - created proper logins, also created page stores all the posts and search page shows them and likes are implemented.
- [x] **Simon** - added simon to [My server link](https://simon.eatandtravel.click).
- [x] **Multiple hooks** - implemented many usages of useState and used useEffect in search.jsx


## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Installed Express with NPM. Default port on 4000.js`.
- [x] **Static middleware for frontend** - Simple endpoints in `service/index`.
- [x] **Calls to third party endpoints** - About page calls `quote.cs260.click`, renders the resulting JSON with React.
- [x] **Backend service endpoints** - Simple endpoints in `service/index` for auth and scores.
- [x] **Frontend calls service endpoints** - All mocked functionality removed from the frontend and replaced with calls to the service.
- [x] **Supports registration, login, logout, create post, searchposts, toggle like and restricted endpoint** - Fully support authentication and restrict access to scores.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Posts data in MongoDB** - Posts stored in MongoDB from `service/database.js`.
- [x] **Stores credentials in MongoDB** - Auth stored in MongoDB from `service/database.js`.






