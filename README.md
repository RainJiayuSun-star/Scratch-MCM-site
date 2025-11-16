# MCM Scratch Club Website

A web application for the Scratch Club at Madison Children's Museum (MCM), part of CS402 (Introducing Computer Science to K-12) at UW Madison.

## Purpose

This website helps K-12 students navigate club resources and document club activities. It provides access to:
- Class presentations and materials
- Project demonstration videos
- Example Scratch projects
- Session documentation with dates and topics
- Student project showcase

The design emphasizes **simplicity, clarity, and kid-friendly navigation** for educational use.

## Design Overview

### Pages

- **Home**: Displays club sessions as cards with dates, topics, and resources
- **Gallery**: Showcases student Scratch projects with embedded previews
- **About**: Contains program information, links, and credits

### Key Features

- **Yellow ribbon header** with Scratch cat logo and navigation
- **Responsive design** for desktop, tablet, and mobile
- **Interactive hover effects** on navigation elements
- **Clean, minimalist UI** optimized for children

For detailed design specifications, see [design.md](./design.md).

## Technology Stack

- **React** 19.2.0 - UI framework
- **Vite** 7.2.2 - Build tool and dev server
- **React Router DOM** 7.9.6 - Client-side routing
- **React Compiler** - Performance optimization

## Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages including:
   - React and React DOM
   - React Router DOM
   - Vite and related plugins
   - ESLint configuration

## Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

Open the URL in your browser to view the website. Changes to the code will automatically reload in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation header component
│   └── Header.css
├── pages/
│   ├── Home.jsx           # Home page with session cards
│   ├── Home.css
│   ├── Gallery.jsx        # Gallery page for student projects
│   ├── Gallery.css
│   ├── About.jsx          # About page with program info
│   └── About.css
├── assets/
│   └── Scratchcat-hquality.png
├── App.jsx                # Main router configuration
├── main.jsx               # Application entry point
├── index.css              # Global styles
└── App.css                # App-level styles
```

## Additional Information

- **Club Location**: Madison Children's Museum (MCM)
- **Schedule**: Every Sunday, 2:30pm - 3:30pm
- **Leaders**: Rain Sun, Brendan, Aleeza
- **Designer**: Rain Sun

For more information about the CS402 program:
- [Lead a Scratch Club - UW Madison Students](https://www.cs.wisc.edu/lead-a-scratch-club-uw-madison-students/)
- [CS402 - Introducing Computer Science to K-12](https://www.cs.wisc.edu/cs402-introducing-computer-science-to-k-12/)

## Notes

- The React Compiler is enabled for performance optimization
- The application uses React Router for client-side navigation
- All styles are responsive and mobile-friendly
- Scratch Cat logo links to [scratch.mit.edu](https://scratch.mit.edu)
