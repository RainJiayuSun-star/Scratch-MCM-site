# Design Documentation: MCM Scratch Club Website

## Overview

This website is built for the Scratch Club at Madison Children's Museum (MCM), part of CS402 (Introducing Computer Science to K-12) at UW Madison. The application helps kids navigate club resources and document club activities.

## Purpose

The site provides a kid-friendly platform to access:
- Class presentations (Google Slides)
- Project demonstration videos
- Example Scratch projects for learning concepts
- Documentation of club sessions and progress

Design principles: **straightforward, neat, and intuitive** for K-12 students.

## Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Routing**: React Router DOM 7.9.6
- **Styling**: CSS3 with responsive design
- **React Compiler**: Enabled for performance optimization

## Application Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation header with Scratch cat logo
│   └── Header.css
├── pages/
│   ├── Home.jsx           # Main page with session cards
│   ├── Home.css
│   ├── Gallery.jsx        # Student project showcase
│   ├── Gallery.css
│   ├── About.jsx          # Program information and credits
│   └── About.css
├── assets/
│   └── Scratchcat-hquality.png
├── App.jsx                # Main router configuration
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## UI/UX Design

### Header Navigation (Shared Across All Pages)

**Yellow Ribbon Bar** (`#FFCC00` - Scratch cat color):
- **Scratch Cat Logo** (far left): Links to [scratch.mit.edu](https://scratch.mit.edu)
- **Site Title** "MCM - Scratch Club" (left side): Clickable, navigates to home
  - Styling: Black fill with white outline, transforms to orange on hover
- **Navigation Buttons** (right side): Home, Gallery, About
  - Minimal design with underline animation on hover
  - Spacing: Comfortable padding on right side of "About" button

### Home Page

**Purpose**: Display club sessions and resources

**Features**:
- Session cards showing:
  - Date
  - Topic title
  - Description
  - Resource links (when available)
- Responsive grid layout
- Hover effects for interactivity

### Gallery Page

**Purpose**: Showcase student Scratch projects

**Features**:
- Embedded Scratch project previews (iframes)
- Project metadata (title, author)
- Direct links to view projects on Scratch platform

### About Page

**Purpose**: Provide program context and credits

**Content**:
- CS402 program information at UW Madison
- Links:
  - [Lead a Scratch Club - UW Madison Students](https://www.cs.wisc.edu/lead-a-scratch-club-uw-madison-students/)
  - [CS402 - Introducing Computer Science to K-12](https://www.cs.wisc.edu/cs402-introducing-computer-science-to-k-12/)
- Credits: Designed by Rain Sun
- Club details:
  - Location: Madison Children's Museum
  - Schedule: Every Sunday, 2:30pm - 3:30pm
  - Leaders: Rain Sun, Brendan, Aleeza

### Responsive Design

The layout adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side elements
- **Tablet** (≤768px): Stacked navigation, adjusted card grid
- **Mobile** (≤480px): Single column layout, optimized spacing

All pages maintain functionality and readability across devices.
