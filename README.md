# RoleGuard

A React + TypeScript role-based authentication system built with vite and React Router, featuring protected routes(Admin/Editor/Viewer), conditional UI rendering, and Context API state management.

## Overview

RoleGuard is a small example app showing how to implement role-based access control in a React application. It uses React Router for navigation and a context-based auth state to protect routes and render UI elements based on the authenticated user role.

## Key Features

- Role-based protected routes for Admin, Editor, and Viewer
- Conditional navigation and page rendering based on user role
- Context API for centralized authentication state
- Simple login flow with mock user role assignment
- 404 handling for unknown routes

## Project Structure

- `src/App.tsx` — main app layout and route definitions
- `src/main.tsx` — app entry point
- `src/components/Navbar.tsx` — navigation menu with role-aware links
- `src/components/ProtectedRoute.tsx` — route guard for role checks
- `src/context/AuthContext.tsx` — authentication state and role logic
- `src/pages/Login.tsx` — login page
- `src/pages/Dashboard.tsx` — protected dashboard
- `src/pages/Profile.tsx` — role-specific profile page
- `src/pages/Settings.tsx` — role-specific settings page
- `src/pages/NotFound.tsx` — fallback 404 page

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser at the local URL shown in the terminal.

## Usage

- Open the login page and choose a user role.
- The app stores the current role in context and updates available routes.
- Protected routes are only accessible to authorized roles.
- Unauthorized access redirects to the login page or a fallback route.

## Note

- The app is built with Vite, TypeScript, and React Router.
