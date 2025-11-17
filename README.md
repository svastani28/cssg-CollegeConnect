# CollegeConnect

A React-based web platform designed to support high-school students—especially first-generation and under-resourced students—through the college application process. Inspired by mentorship programs like Apollo Aspire, this project focuses on increasing access to guidance, resources, and personalized support.

## Features

- **Landing Page**: Welcome page introducing the platform and its mission
- **Student Dashboard**: Track application progress, deadlines, and next steps
- **Resources Library**: Comprehensive guides covering:
  - Application process and Common App
  - Financial aid and scholarships
  - Test preparation (SAT/ACT)
  - College life and campus visits
- **Mentorship Program**: Connect with experienced mentors for personalized guidance
- **College Search**: Browse and filter colleges based on various criteria
- **Responsive Design**: Mobile-friendly interface for access anywhere

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS with modern design patterns
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/svastani28/cssg-CollegeConnect.git
cd cssg-CollegeConnect
```

2. Navigate to the client directory:
```bash
cd client
```

3. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
cssg-CollegeConnect/
├── client/                  # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Header.jsx  # Navigation header
│   │   │   └── Footer.jsx  # Footer component
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx    # Landing page
│   │   │   ├── Dashboard.jsx   # Student dashboard
│   │   │   ├── Resources.jsx   # Resources library
│   │   │   ├── Mentorship.jsx  # Mentorship program
│   │   │   └── Colleges.jsx    # College search
│   │   ├── App.jsx         # Main app component with routing
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json        # Dependencies
└── README.md              # This file
```

## Mission

CollegeConnect is committed to increasing access to guidance and support for students who may not have traditional resources. We believe every student deserves the opportunity to pursue higher education.

## Contributing

This is a student project. Contributions and feedback are welcome!

## License

© 2024 CollegeConnect. All rights reserved.

