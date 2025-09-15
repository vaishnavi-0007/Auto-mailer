# AutoMailer - Professional Resume Distribution System

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.0-336791.svg)

> A modern full-stack web application built with **React + Vite** that streamlines the job application process by enabling bulk sending of personalized resumes to HR contacts.

## ✨ Features

- 🚀 **Lightning-fast development** with Vite's HMR (Hot Module Replacement)
- 📧 **Bulk Email Distribution** - Send personalized resumes to multiple HR contacts
- 👥 **Contact Management** - Store and organize HR contact information
- 🎯 **Skills-Based Targeting** - Filter and select relevant skills for applications
- 📝 **Email Templates** - Customizable professional email templates
- 🔒 **Secure Authentication** - JWT-based user authentication system
- 📱 **Responsive Design** - Mobile-first approach with modern UI
- 🗄️ **Database Integration** - PostgreSQL for reliable data persistence

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks and functional components
- **Vite** - Next-generation frontend build tool for fast development
- **CSS3 Modules** - Scoped styling with CSS Modules approach
- **ESLint** - Code quality and consistency enforcement

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Minimal and flexible web application framework
- **PostgreSQL** - Advanced open-source relational database
- **JWT** - JSON Web Tokens for secure authentication
- **Nodemailer** - Email sending with Gmail SMTP integration

## 📁 Project Structure

```
automailer/
├── public/                     # Static assets
│   ├── index.html             # HTML entry point
│   └── favicon.ico            # Application favicon
├── src/
│   ├── assets/                # Images, fonts, and media files
│   │   ├── images/
│   │   └── fonts/
│   ├── components/            # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Header/
│   │   └── ContactForm/
│   ├── features/              # Feature-based modules
│   │   ├── auth/              # Authentication logic
│   │   ├── contacts/          # Contact management
│   │   └── email/             # Email functionality
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.js
│   │   └── useContacts.js
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   └── Contacts.jsx
│   ├── layouts/               # Layout components
│   │   ├── MainLayout.jsx
│   │   └── AuthLayout.jsx
│   ├── services/              # API services
│   │   └── api.js
│   ├── styles/                # Global styles
│   │   ├── globals.css
│   │   └── variables.css
│   ├── utils/                 # Utility functions
│   ├── App.jsx                # Main App component
│   └── main.jsx               # React entry point
├── server/                    # Backend API
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   └── server.js
├── .eslintrc.cjs             # ESLint configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **PostgreSQL** (v13+ recommended)
- **Gmail Account** (for SMTP configuration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/automailer.git
   cd automailer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/automailer_db

   # Email Configuration
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-digit-app-password

   # Authentication
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d

   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   # Create PostgreSQL database
   createdb automailer_db
   
   # Run database migrations
   npm run db:migrate
   ```

5. **Start the application**
   ```bash
   # Start backend server
   npm run server
   
   # Start frontend development server (in another terminal)
   npm run dev
   ```

## 📖 Usage

### Setting up Gmail App Password

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings → Security → 2-Step Verification
3. Generate an App Password for "Mail"
4. Use the 16-digit password in your `.env` file

### Basic Workflow

1. **Register/Login** to your account
2. **Add HR Contacts** with company details and email addresses
3. **Upload Resume** in PDF format
4. **Create Email Template** with personalized content
5. **Select Recipients** based on skills or company type
6. **Send Bulk Emails** with tracking capabilities

## 🔧 Development

### Available Scripts

```bash
# Frontend development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Backend development
npm run server       # Start Express server
npm run server:dev   # Start server with nodemon

# Database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
```

### API Endpoints

```
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
GET  /api/contacts          # Get all contacts
POST /api/contacts          # Create new contact
PUT  /api/contacts/:id      # Update contact
DELETE /api/contacts/:id    # Delete contact
POST /api/email/send        # Send bulk emails
GET  /api/email/history     # Get email history
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set environment variables in your hosting dashboard

### Backend (Railway/Heroku)

1. Create a production database
2. Set environment variables
3. Deploy using Git or Docker

### Environment Variables for Production

```env
DATABASE_URL=your-production-database-url
GMAIL_USER=your-production-email
GMAIL_APP_PASSWORD=your-app-password
JWT_SECRET=your-production-jwt-secret
NODE_ENV=production
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing UI library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [PostgreSQL](https://www.postgresql.org/) for reliable data storage
- [Nodemailer](https://nodemailer.com/) for email functionality

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/automailer/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer at your-email@domain.com

---

**Happy Job Hunting! 🎯**
