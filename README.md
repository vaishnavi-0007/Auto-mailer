# AutoMailer - Professional Resume Distribution System

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)

> A modern frontend application built with **React + Vite** for managing and distributing professional resumes to HR contacts.

## ✨ Features

- 🚀 **Lightning-fast development** with Vite's HMR (Hot Module Replacement)
- 📧 **Email Management Interface** - Manage email templates and contacts
- 👥 **Contact Management** - Store and organize HR contact information
- 🎯 **Skills-Based Filtering** - Filter contacts based on relevant skills
- 📝 **Template Management** - Create and customize professional email templates
- 🔒 **User Authentication UI** - Clean login and registration interfaces
- 📱 **Responsive Design** - Mobile-first approach with modern UI
- ⚡ **Fast Performance** - Optimized with Vite for quick loading

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks and functional components
- **Vite** - Next-generation frontend build tool for fast development
- **CSS3 Modules** - Scoped styling with CSS Modules approach
- **ESLint** - Code quality and consistency enforcement

## 📁 Project Structure

```
automailer/
├── public/                     # Static assets
│   ├── index.html             # HTML entry point
│   └── favicon.ico            # Application favicon
├── src/
│   ├── assets/                # Images, fonts, and media files
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/            # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.module.css
│   │   ├── EmailTemplate/
│   │   │   ├── EmailTemplate.jsx
│   │   │   └── EmailTemplate.module.css
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.module.css
│   ├── features/              # Feature-based modules
│   │   ├── auth/              # Authentication UI components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── auth.module.css
│   │   ├── contacts/          # Contact management UI
│   │   │   ├── ContactsList.jsx
│   │   │   ├── ContactCard.jsx
│   │   │   ├── AddContact.jsx
│   │   │   └── contacts.module.css
│   │   ├── email/             # Email functionality UI
│   │   │   ├── EmailComposer.jsx
│   │   │   ├── TemplateEditor.jsx
│   │   │   ├── BulkSender.jsx
│   │   │   └── email.module.css
│   │   └── dashboard/         # Dashboard components
│   │       ├── Dashboard.jsx
│   │       ├── Stats.jsx
│   │       └── dashboard.module.css
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useContacts.js
│   │   ├── useLocalStorage.js
│   │   └── useApi.js
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Contacts.jsx
│   │   ├── Templates.jsx
│   │   └── Settings.jsx
│   ├── layouts/               # Layout components
│   │   ├── MainLayout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── layout.module.css
│   ├── services/              # API services
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── contactService.js
│   ├── styles/                # Global styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── reset.css
│   ├── utils/                 # Utility functions
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   └── validators.js
│   ├── App.jsx                # Main App component
│   └── main.jsx               # React entry point
├── .eslintrc.cjs             # ESLint configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/automailer.git
   cd automailer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Component Structure

Each component follows this structure:
```
ComponentName/
├── ComponentName.jsx      # Component logic
├── ComponentName.module.css  # Scoped styles
└── index.js              # Export file (optional)
```

### Styling Guidelines

- Use **CSS Modules** for component-specific styles
- Global styles in `src/styles/globals.css`
- CSS variables in `src/styles/variables.css`
- Follow BEM naming convention for CSS classes

## 📱 Pages Overview

### Home Page (`/`)
- Landing page with application overview
- Call-to-action buttons for registration/login

### Dashboard (`/dashboard`)
- Main application interface
- Quick stats and recent activity
- Navigation to other features

### Contacts (`/contacts`)
- HR contacts management
- Add, edit, delete contacts
- Search and filter functionality

### Templates (`/templates`)
- Email template management
- Create and edit templates
- Preview functionality

### Settings (`/settings`)
- User profile management
- Application preferences
- Account settings

## 🎨 UI Components

### Core Components
- **Button** - Reusable button with variants
- **Modal** - Popup dialogs and confirmations
- **Header** - Navigation and user menu
- **ContactForm** - Add/edit contact forms
- **EmailTemplate** - Template editor component

### Layout Components
- **MainLayout** - Main app layout with sidebar
- **AuthLayout** - Login/register page layout

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` folder.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing UI library
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

**Happy Coding! ⚡**
