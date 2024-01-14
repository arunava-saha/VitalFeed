# backend Api Docs

[Link](https://documenter.getpostman.com/view/29074692/2s9YsNdqGX)

## deployment

# VitalFeed

VitalFeed is a web application designed to provide daily health news, advice, and activity suggestions tailored to senior citizens. The app aims to promote a healthier lifestyle through a variety of curated content, including daily activities, yoga routines, and exercise suggestions.

## Features

### Daily Health News:

Stay informed with daily updates on health-related news and tips.

### Personalized Advice:

Receive tailored suggestions for daily activities, exercises, and yoga routines.

### User-Friendly Interface:

The app is designed with a user-friendly interface, making it accessible for seniors.

## Technologies Used

### MongoDB: Database for storing user data and health metrics.

### Express: Backend framework for handling server-side logic.

### React: Frontend library for building the user interface.

### Node.js: JavaScript runtime for server-side scripting.

## Installation

### Clone the repository:

```bash
git clone https://github.com/arunava-saha/VitalFeed.git
```

### Navigate to the project directory: client for frontend and server for backend

```bash
cd VitalFeed
cd server && cd client
```

### Install dependencies:

```bash
npm install
```

### Set up environment variables:

Create a .env file in the root directory and configure the required variables, including MongoDB connection details.

```env server
PORT=3001
DB=your_mongodb_connection_string
SECRET=Your_secret_key
```

```env client
BASEURL=YOUR_SERVER
```

### Run the application: client && server

```bash
 npm run dev
```

## Usage

Visit http://localhost:5173 to access the VitalFeed application. Sign up or log in to start receiving personalized health advice and news.

## Contributors

[Arunava Saha](https://github.com/arunava-saha)
