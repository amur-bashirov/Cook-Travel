# Cook&Travel
## Specification Deliverable
### Elevator pitch
Have you ever wondered how to cook local cuisine while traveling in a foreign country, where to find the ingredients in that country, or how a dish is traditionally prepared in the native town of someone important—like your boss—who’s coming over to your house? Or perhaps you’re curious about recreating a dish in the specific style of a region from halfway across the globe? The **Cook&Travel**  website brings the world of global cooking to your fingertips. It offers access to millions of recipes and step-by-step instructions for the most popular dishes from around the world.

### Design
![Design 1](IMG_5322.HEIC)  
![Design 2](IMG_5323.HEIC)  
![Design 3](IMG_5324.HEIC)  
![Searching](IMG_5325.HEIC)  
![About](IMG_5326.HEIC)




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




