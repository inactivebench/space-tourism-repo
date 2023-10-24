# Space tourism website

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [License](#license)

## Overview

Space Tourism Website allows users to explore & learn about space. With this website, users can browse space destinations, check insights about the crew, and learn about the technology used to embark on adventures.

## The Challenge

![Design preview for the Space tourism website coding challenge](./preview/preview.jpg)

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

Home page
![screenshot of the Space tourism website home page](./preview/Screen%20Shot%20home%201.png)
![screenshot of the Space tourism website home page](./preview/Screen%20Shot%20home%202.png)

Destination page
![screenshot of the Space tourism website destination page](./preview/Screen%20Shot%20destination%201.png)

![screenshot of the Space tourism website destination page](./preview/Screen%20Shot%20destination%202.png)

Crew page
![screenshot of the Space tourism website crew page](./preview/Screen%20Shot%20crew%201.png)

![screenshot of the Space tourism website crew page](./preview/Screen%20Shot%20crew%202.png)

Technology page
![screenshot of the Space tourism website technology page](./preview/Screen%20Shot%20technology%201.png)

![screenshot of the Space tourism website technology page](./preview/Screen%20Shot%20technology%202.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

In creating the space tourism website, I started the process by implementing the design system provided in the figma files inroder to get the visual and interactive elements of the user interface styled. I utilized the design system to construct the individual web pages, ensuring that each page adhered to the design guidelines. After the pages were built, I integrated fetch to retrieve data from the data.json file to populate each page with dynamic content.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript
- ES6 Js
- Mobile-first workflow

### What I learned

1. Learned how to leverage the use of custom CSS variables to enhance webpage design flexibility.
   In the code snippet below I used the custom variable --flow-space for better spacing between the components.

```css
.grid-container--destination {
  --flow-space: 2rem;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";
}
```

2. Developed proficiency in CSS grid layout design through resources from [Scrimba](https://scrimba.com/) , enabling efficient page layout structuring.

3. Acquired fundamental knowledge of data retrieval using the Fetch API locally, setting the stage for handling data from external sources in future projects.

```js
fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        ....
      });
```

This would also have worked in place of Fetch.

```js
import data from "./data.json" assert { type: "json" };
```

### Useful resources

- [HTML picture element explained by Kevin powell](https://youtu.be/Rik3gHT24AM?si=6yfPHYJ3Wa_XHIjq) - The picture element made the challenging assignment of art direction on the technology page easier.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own space-related projects.
