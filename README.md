# School Management API

A Node.js/Express.js REST API for managing school data with location-based functionality. This system allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## 🚀 Features

- **Add Schools**: Add new schools with name, address, and GPS coordinates
- **Location-based Search**: Find schools sorted by distance from user's location
- **Geographic Distance Calculation**: Uses Haversine formula for accurate distance calculation
- **RESTful API**: Clean, well-structured REST endpoints
- **Security**: Helmet middleware for security headers
- **Logging**: Comprehensive logging with Winston
- **Error Handling**: Proper error handling and validation

## 📋 Requirements

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SteamonAP/Internship_assignment.git
   cd Internship_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd School_Management_API
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `School_Management_API/` directory:
   ```env
   MYSQL_HOST=localhost
   MYSQL_USER=your_mysql_username
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DB=your_database_name
   PORT=3000
   NODE_ENV=development
   ```

4. **Set up MySQL database**
   - Create a MySQL database
   - Update the `.env` file with your database credentials
   - The application will automatically create the `schools` table on startup

5. **Start the application**
   ```bash
   # From the root directory
   npm start
   
   # Or from School_Management_API directory
   npm run dev  # for development with nodemon
   npm start    # for production
   ```

## 🗄️ Database Schema

The application creates a `schools` table with the following structure:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

## 📡 API Endpoints

### Base URL
```
# Local Development
http://localhost:3000/api

# Live API (Deployed on Render)
https://internship-assignment-w0wi.onrender.com/api
```

### 1. Add School
**POST** `/addSchool`

Add a new school to the database.

**Request Body:**
```json
{
    "name": "St. Mary's High School",
    "address": "123 Education Street, City Center",
    "latitude": 40.7128,
    "longitude": -74.0060
}
```

**Response:**
```json
{
    "message": "School was added to db Successfully",
    "schoolId": 1
}
```

**Validation:**
- All fields (name, address, latitude, longitude) are required
- Returns 400 error if any field is missing

### 2. List Schools by Distance
**GET** `/listSchools`

Get all schools sorted by distance from user's location.

**Query Parameters:**
- `latitude` (required): User's latitude coordinate
- `longitude` (required): User's longitude coordinate

**Example Request:**
```
GET /api/listSchools?latitude=40.7128&longitude=-74.0060
```

**Response:**
```json
[
    {
        "id": 1,
        "name": "St. Mary's High School",
        "address": "123 Education Street, City Center",
        "latitude": 40.7128,
        "longitude": -74.0060,
        "distance": 0.0
    },
    {
        "id": 2,
        "name": "Central Academy",
        "address": "456 Learning Avenue, Downtown",
        "latitude": 40.7589,
        "longitude": -73.9851,
        "distance": 5.23
    }
]
```

**Distance Calculation:**
- Uses Haversine formula for accurate geographic distance calculation
- Distance is returned in kilometers
- Results are sorted by distance (nearest first)

## 🧪 Testing with Postman

1. **Import the Postman Collection**
   - Open Postman
   - Import the file: `School_Management_API/School_Management_API.postman_collection.json`

2. **Set up Environment Variables**
   - Create a new environment in Postman
   - Add variable: `base_url` = `http://localhost:3000`

3. **Test the APIs**
   - **Add School**: Send POST request with school data
   - **List Schools**: Send GET request with latitude/longitude parameters

## 📁 Project Structure

```
School_Management_API/
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore rules
├── src/
│   ├── config/
│   │   ├── db.js        # Database configuration
│   │   └── logger.js    # Winston logger setup
│   ├── controller/
│   │   └── schoolController.js  # API controllers
│   ├── model/
│   │   └── schoolSchema.js      # Database operations
│   ├── routes/
│   │   └── schoolRoute.js       # API routes
│   ├── middleware/
│   │   └── errorHandler.js      # Error handling middleware
│   └── tables/
│       └── createSchoolsTable.js # Database table creation
└── School_Management_API.postman_collection.json
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MYSQL_HOST` | MySQL server host | localhost |
| `MYSQL_USER` | MySQL username | - |
| `MYSQL_PASSWORD` | MySQL password | - |
| `MYSQL_DB` | MySQL database name | - |
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment mode | development |

### Logging

The application uses Winston for logging:
- Console output with colors
- File logging: `combined.log` (all levels) and `error.log` (errors only)
- JSON format with timestamps

## 🚀 Deployment

### Local Development
```bash
npm run dev  # Uses nodemon for auto-restart
```

### Production
```bash
npm start    # Uses node directly
```

### Recommended Hosting Platforms
- **Render**: Free tier available, good for Node.js apps


## 🔒 Security Features

- **Helmet**: Security headers for protection against common vulnerabilities
- **CORS**: Configured for cross-origin requests
- **Input Validation**: All inputs are validated before processing
- **Error Handling**: Comprehensive error handling without exposing sensitive information

## 📝 Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `201`: Created (for new school)
- `400`: Bad Request (validation errors)
- `500`: Internal Server Error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Amogh** - [GitHub](https://github.com/SteamonAP)

## 📞 Support

For support or questions, please open an issue on GitHub or contact the author.

---

**Note**: Make sure to create the `.env` file with your database credentials before running the application. The `.env` file is gitignored for security reasons.
