# Everbright Remodeling Website

A modern, production-ready website for a local home remodeling business built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Multi-page marketing site (Home, Services, Gallery, About, Contact)
- Reusable UI components (Navbar, Footer, Button, Card)
- Responsive, premium contractor styling
- Contact form with validation and API route logging

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## Form API

The contact form posts to `/api/contact`. Submissions are logged to the server console and can be connected to email or CRM services later.
