# Quick Start Guide - Fixing the Email Submission Error

## The Error You're Seeing
If you see "Sorry, there was an error saving your request. Please try again.", it means the backend server is not running or not accessible.

## Quick Fix Steps

### Step 1: Install Node.js (if not already installed)
1. Download Node.js from: https://nodejs.org/
2. Install the LTS version
3. Restart your terminal/command prompt

### Step 2: Install MySQL (if not already installed)
1. Download MySQL from: https://dev.mysql.com/downloads/mysql/
2. Install MySQL Server
3. Remember your root password during installation

### Step 3: Set Up Database
1. Open MySQL Command Line or MySQL Workbench
2. Run this command:
   ```sql
   CREATE DATABASE IF NOT EXISTS living_heritage_walks;
   ```
3. Or run the full setup script:
   ```bash
   mysql -u root -p < setup-database.sql
   ```

### Step 4: Configure Environment
1. Create a file named `.env` in your project root
2. Add these lines (replace with your MySQL password):
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password_here
   DB_NAME=living_heritage_walks
   PORT=3001
   ```

### Step 5: Install Dependencies
Open terminal in your project folder and run:
```bash
npm install
```

### Step 6: Start the Server
```bash
npm start
```

You should see:
```
Database connection pool created successfully
Database tables initialized successfully
Server is running on http://localhost:3001
```

### Step 7: Test
1. Keep the server running (don't close the terminal)
2. Open `supportus.html` in your browser
3. Try submitting an email - it should work now!

## Troubleshooting

**"Cannot connect to server" error:**
- Make sure the server is running (Step 6)
- Check that port 3001 is not being used by another application

**Database connection error:**
- Verify MySQL is running
- Check your `.env` file has the correct password
- Make sure the database exists

**Port already in use:**
- Change PORT in `.env` to a different number (e.g., 3002)
- Update `API_BASE_URL` in `js/email-submissions.js` to match

## Running in Development Mode
For auto-restart on file changes:
```bash
npm run dev
```

(Requires nodemon - will be installed with `npm install`)
