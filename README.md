# Vertical AI - The AI Agency of the Future

This is the official website for Vertical AI, an AI agency that specializes in building cutting-edge products and services using Next.js & Tailwind CSS.

## Running the Project Locally

To run this project on localhost, use the following commands:

```bash
git clone https://github.com/verticalai/verticalai.com.git
cd verticalai.com
npm install
npm run dev
```

When you are done coding, build your app with:

_NOTE: If you have yarn, replace `npm start` and `npm run build` with `yarn start` and `yarn build`._

## Contact Form Setup

To make the contact form work, follow these steps:

1. Create an account on [EmailJS](https://www.emailjs.com/) and create a new Outlook or Gmail account to send emails.
2. Create a new service, select and log in to your newly created Outlook or Gmail account on EmailJS.
3. Go back to the dashboard and get the Service ID.
4. Create a `.env` file in your root folder and add the following:
   NEXT_PUBLIC_USER_ID = 'YOUR_USER_ID'
   NEXT_PUBLIC_TEMPLATE_ID = 'template_fqqqb9g'
   NEXT_PUBLIC_SERVICE_ID = 'YOUR_SERVICE_ID'

Replace `YOUR_USER_ID` and `YOUR_SERVICE_ID` with your values from EmailJS.

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build && npm run export`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
