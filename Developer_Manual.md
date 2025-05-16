# Developer Manual

# Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [API Sources](#api-sources)
- [Installation Guide](#installation-guide)
- [Running the Application](#running-the-application)
- [Testing Instructions](#testing-instructions)
- [Server API Documentation](#server-api-documentation)
- [Known Bugs & Issues](#known-bugs--issues)
- [Future Roadmap](#future-roadmap)

---

# Overview
 

This web application, **Football Standings API**, is built to display real-time football/soccer league standings in a visually appealing and interactive way. It uses third-party APIs to fetch data and presents it via a modern web front-end deployed on Vercel.

---

# Technologies Used

- **Front-end**: React (with Next.js or Vite), Tailwind CSS
- **Back-end**: Node.js with Express
- **Deployment**: Vercel
- **Version Control**: Git & GitHub
- **APIs Used**:
  - [API-Football](https://www.api-football.com/)
  - [Football-Data.org](https://www.football-data.org/)

---

# API Sources

- **API-Football**: Comprehensive coverage of football data including fixtures, standings, teams, etc. Requires a free or paid API key.
- **Football-Data.org**: Free API for football data with decent coverage for European leagues. Also requires API key via signup.

---

# Installation Guide

**Clone the Repository**
git clone https://github.com/alirehman2/group_project_final_deliverable.git
cd football-standings-api

**Install Dependencies**
npm install

**Set Up Environment Variables**
Create a .env file in the root of your project:

API_FOOTBALL_KEY=your_api_football_key
FOOTBALL_DATA_KEY=your_football_data_key
Directory Structure
/docs               --> Developer manual & documentation
/frontend           --> React front-end app
/backend            --> Node.js Express API server
.env                --> Environment variables

---

# Running the Application

Local Development

# Backend Server:
cd backend
npm install
npm run dev

# Frontend (React):
cd frontend
npm install
npm run dev

---

# Testing Instructions

If you have added test cases (e.g., using Jest):
npm run test

---

# Server API Documentation

| Method | Endpoint              | Description                                  |
| ------ | --------------------- | -------------------------------------------- |
| GET    | /api/standings        | Fetches current league standings             |
| GET    | /api/leagues          | Returns a list of supported football leagues |
| GET    | /api/teams/\:leagueId | Fetches teams in a specific league           |
| POST   | /api/preferences      | Saves user league preferences (planned)      |


---

# Known Bugs & Issues

Error handling for missing/invalid API keys is limited.
Currently supports a limited number of leagues; API expansion is planned.
Mobile responsiveness under testing for certain screen sizes.
Loading spinners or graceful loading states not yet implemented.

---

# Future Roadmap

Add support for multiple seasons and archived data.
Implement user login to save league preferences.
Expand testing coverage (unit + integration).
Migrate backend to serverless functions on Vercel for scalability.
Improve accessibility and mobile experience.
Add light/dark mode toggle.
Include match fixtures and top scorers per league.