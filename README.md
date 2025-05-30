# Portfolio Site

This is my personal portfolio, built with [React](https://react.dev/), [Next.js](https://nextjs.org/), and deployed on [Vercel](https://vercel.com/). It highlights the projects I’ve worked on, the technologies I use, and the skills I’m continuing to build.

I created this site to stay active with modern web technologies, explore AI integration, and apply DevSecOps workflows in real-world scenarios. It's a space that evolves alongside my learning and professional growth.

---

## Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

* **Framework** : Next.js (App Router)
* **Hosting** : Vercel
* **Styling** : Tailwind CSS
* **Security** : Google reCAPTCHA, Firebase (for contact form)
* **Backend** : Firebase Firestore (Admin SDK via API Routes)

## Structure

* `app/` – Pages and routing
* `components/` – Reusable UI components
* `lib/` – Firebase config and utility functions
* `public/` – Static assets (images, icons)
* `app/api/contact/` – API route for handling form submissions securely
* 

## Deployment

The site is automatically deployed via Vercel on push to the `main` branch. Environment variables like Firebase credentials are managed through Vercel's dashboard.

## Contact

You can reach out to me through the contact form on the site. The form is protected by reCAPTCHA and securely writes to Firebase.
