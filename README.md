Meeting Calendar
A modern React application for managing meetings, users, and a calendar. The project features a dashboard layout with navigation, meeting CRUD operations, and several informational pages.

Features
Dashboard Layout with Navbar and Sidebar

Meeting Management: Create, update, delete, and list meetings

User Management (Users Page)

Calendar View

Informational Pages: Home, About, Services, Contact

Responsive Design using Bootstrap

API Integration with Axios

Tech Stack
React 19

React Router DOM 7

Bootstrap 5

Axios

Vite (for development and build tooling)

FontAwesome (icons)

Getting Started
Prerequisites
Node.js (v18 or higher recommended)

npm or yarn

Installation
Clone the repository:

bash
git clone https://github.com/your-username/meeting-calendar.git
cd meeting-calendar
Install dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npm run dev
# or
yarn dev
Open your browser:
Visit http://localhost:5173 (default Vite port).

Build for Production
bash
npm run build
Lint the Code
bash
npm run lint
Preview Production Build
bash
npm run preview
Project Structure
text
src/
  components/
    Navbar.jsx
    Sidebar.jsx
    MeetingForm.jsx
    MeetingList.jsx
    Footer.jsx
    HomePage.jsx
    AboutPage.jsx
    ServicesPage.jsx
    ContactPage.jsx
    UsersPage.jsx
    CalendarPage.jsx
  App.jsx
  App.css
  main.jsx
public/
  vite.svg
index.html
API
The app expects an API for meetings at /api/meetings.
Endpoints used:

GET /api/meetings – Fetch all meetings

POST /api/meetings – Add a new meeting

PUT /api/meetings/:id – Update a meeting

DELETE /api/meetings/:id – Delete a meeting

Note: You need to provide a backend API for full functionality.

Customization
Update or add pages/components in src/components.

Adjust styles in src/App.css or add your own CSS/SCSS files.

Change the API endpoint in App.jsx if needed.

Dependencies
See package.json for the full list.
