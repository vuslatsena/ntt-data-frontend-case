# NTT DATA Business Solutions Turkey - Frontend Challenge'23

This repository contains my solution to the NTT DATA Business Solutions Turkey Frontend Challenge. It showcases my implementation of the given case requirements and design.

## Live Demo

You can access the live demo of the project by clicking on the following link: [Vercel](https://ntt-data-frontend-case-w9oe.vercel.app/)

## Project Details

- The design for this project can be found on Figma. Please refer to the following URL for the design specifications and visual assets: [FIGMA](https://www.figma.com/file/STzY429FfaHd51OsBVn0iE/NTT-FE?node-id=0%3A1&t=L1x8LAj5cSHgY2gs-0)
- To fetch the product data, please use the following [JSON API URL](https://honey-badgers-ecommerce.glitch.me/products)

## Case Requirements

- **CSS and SASS:** Utilize CSS and SASS for styling the application.
- **Framework/Library:** You can choose from frameworks/libraries such as MUI, Styled Emotion, React Styled, Bootstrap, or Tailwind.
- **Responsiveness:** Ensure that the design is responsive and adapts well to desktop, tablet, and mobile devices.
- **Like/Unlike Functionality:** When the heart icon is clicked, the corresponding product should transition to the "liked" state, and the heart icon should turn red. If clicked again, it should transition to the "unliked" state, and the heart icon should appear gray.
- **Display Like Count:** Display the total number of likes for each product, and ensure that this count updates when the "unlike" action is performed.
- **Filter by Liked Products:** Clicking on the "My Likes" section should filter and display only the products in the "liked" state. Clicking it again should remove the filter.
- **Product Box Click Redirect:** When a product box is clicked, it should redirect the user to a specified address (e.g., google.com).
- **Product Title Display:** The product title should be displayed within a maximum of two lines. If it exceeds two lines, it should be truncated with ellipsis (...).

## Technologies to be used

- [React](https://reactjs.org/)
- [React DOM](https://reactjs.org/docs/react-dom.html)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material-UI (MUI)](https://mui.com/)
- [Emotion React](https://emotion.sh/docs/introduction)
- [Emotion Styled](https://emotion.sh/docs/styled)
- [Tailwind CSS](https://tailwindcss.com/)
- [Slick Carousel](https://kenwheeler.github.io/slick/)
- [React Slick](https://github.com/akiran/react-slick)
- [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [React Swipeable Views](https://react-swipeable-views.com/)
- [Axios](https://axios-http.com/)

## Getting Started

Follow the steps below to set up and run the project on your local machine:

### Prerequisites

Before running the project, ensure that you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

# Installation

1. Clone the repository:

```bash
  git clone https://github.com/vuslatsena/ntt-data-frontend-case.git
```

2. Navigate to the project root directory:
```bash
   cd ntt-data-frontend-case
```
3. Install the dependencies:
```bash
   npm install
```
# Run the project

To run the project, use the following command:
```bash
  npm run start
```