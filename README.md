# Living Heritage Walks - Backend Setup

This backend server handles email submissions from the supportus.html page and saves them to a MySQL database.

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server (v5.7 or higher)
- npm or yarn

## Database Setup

1. **Install MySQL Server** (if not already installed):
   - Windows: Download from https://dev.mysql.com/downloads/mysql/
   - macOS: `brew install mysql`
   - Linux: `sudo apt install mysql-server`

2. **Create Database**:
   - Open MySQL command line or MySQL Workbench
   - Run the SQL script in `setup-database.sql`:
     ```sql
     SOURCE setup-database.sql;
     ```

   Or manually create the database and table using the SQL commands in the file.

## Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   - Create a `.env` file in the root directory
   - Copy the contents from `.env.example` (if available) or use:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_mysql_password_here
     DB_NAME=living_heritage_walks
     PORT=3001
     ```

3. **Update Database Credentials**:
   - Replace `your_mysql_password_here` with your actual MySQL password
   - Update other credentials if needed

## Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3001` by default.

## API Endpoints

### POST /api/email-submissions
Saves an email submission to the database.

**Request Body:**
```json
{
  "email": "user@example.com",
  "submission_type": "stay_connected",
  "additional_notes": "Optional additional information"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email submission saved successfully",
  "id": 123
}
```

**Submission Types:**
- `stay_connected` - User wants to stay updated
- `contact_request` - User wants to be contacted
- `support_request` - User needs support/guidance

### GET /api/email-submissions
Retrieves all email submissions (for admin purposes).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "email": "user@example.com",
      "submission_type": "stay_connected",
      "additional_notes": null,
      "submitted_at": "2025-11-29T10:00:00.000Z"
    }
  ]
}
```

### GET /api/health
Health check endpoint.

## Database Schema

The `email_submissions` table includes:
- `id` - Auto-incrementing primary key
- `email` - User's email address (unique)
- `submission_type` - Type of submission
- `additional_notes` - Optional notes from user
- `user_agent` - Browser/client information
- `referrer` - Referring page
- `ip_address` - Client IP address
- `submitted_at` - Timestamp of submission

## Troubleshooting

1. **Database Connection Issues**:
   - Ensure MySQL server is running
   - Check credentials in `.env` file
   - Verify database exists

2. **Port Already in Use**:
   - Change PORT in `.env` file
   - Or kill process using the port: `npx kill-port 3001`

3. **CORS Issues**:
   - The server includes CORS middleware for frontend requests

## Frontend Integration

Update your frontend JavaScript to send POST requests to `http://localhost:3001/api/email-submissions` instead of using the Bolt configuration.

Example fetch request:
```javascript
const response = await fetch('http://localhost:3001/api/email-submissions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    submission_type: 'stay_connected',
    additional_notes: 'Optional notes'
  })
});
```
