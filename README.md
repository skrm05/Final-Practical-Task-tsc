# React E-Commerce Product Listing

This project is a responsive, fully-typed React application that fetches and displays a list of e-commerce products. It demonstrates core React concepts including state management, side effects, asynchronous data fetching, and component composition using TypeScript and Tailwind CSS.

## Features

- **Asynchronous Data Fetching:** Integrates with a mock API to fetch product data dynamically.
- **Robust State Management:** Handles `loading`, `error`, and `success` states gracefully to ensure a smooth user experience.
- **Fully Typed:** Utilizes TypeScript for API responses, state variables, and component props, ensuring type safety and fewer runtime errors.
- **Reusable UI Components:** Includes a modular `ProductCard` component designed for easy reuse and maintenance.
- **Modern Styling:** Styled with Tailwind CSS for a fully responsive, grid-based layout with hover effects and clean typography.

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** Fetch API / Axios (via `product.service`)

## Project Structure

```text
src/
├── components/
│   ├── ProductList.tsx      # Main container managing state and data fetching
│   └── ProductCard.tsx      # Reusable UI component for individual products
├── services/
│   └── product.service.ts   # API call logic (getProducts)
└── types/
    └── product.types.ts     # TypeScript interfaces (Product, API Response)
```
