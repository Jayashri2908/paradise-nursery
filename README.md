# Paradise Nursery Shopping Cart

This is a simple shopping cart application for an online plant shop.

## Features

- Browse a list of plants grouped by category.
- Add plants to your shopping cart.
- View and manage the items in your cart.
- Adjust the quantity of items or remove them from the cart.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://example.com/your-repo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start
   ```

## Deployment

To deploy this application, you can use any static site hosting service like Netlify, Vercel, or GitHub Pages.

### Building for Production

First, you need to create a production-ready build of the application. Run the following command in your terminal:

```sh
npm run build
```

This will create a `dist` folder in your project directory. This folder contains all the static files for your application.

### Deploying to a Host

1. **Sign up for a hosting service:** Create an account on a service like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

2. **Deploy your site:** You can usually deploy your site by dragging and dropping the `dist` folder into the provider's web interface. Alternatively, you can connect your Git repository for continuous deployment.

   - **Publish directory:** When prompted, set the publish directory to `dist`.
   - **Build command:** If you are connecting a Git repository, you may be asked for a build command. You can use `npm run build`.

That's it! Your application will be deployed and available online.
