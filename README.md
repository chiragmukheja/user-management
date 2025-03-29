# React User Management Dashboard

A modern React application built with TypeScript that demonstrates user authentication and management using the ReqRes API. The application features a clean, responsive design with Tailwind CSS and includes functionality for user authentication, listing, editing, and deletion.

## 🚀 Features

- **Authentication**: Secure login system with token-based authentication
- **User Management**: View, edit, and delete user profiles
- **Responsive Design**: Beautiful UI that works across all device sizes
- **Real-time Search**: Client-side search functionality for users
- **Pagination**: Navigate through multiple pages of user data
- **Error Handling**: Comprehensive error management with user feedback
- **Type Safety**: Full TypeScript implementation

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- Lucide React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-user-management
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 🔑 Usage

### Authentication

The application uses the ReqRes API for authentication. Use the following credentials to log in:

- Email: eve.holt@reqres.in
- Password: cityslicka

### Features

1. **Login**: 
   - Enter the provided credentials
   - Token is stored in localStorage for persistent sessions

2. **User Management**:
   - View all users in a responsive grid layout
   - Search users by name or email
   - Edit user information
   - Delete users
   - Navigate through pages of users

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── lib/               # Utility functions and API setup
├── pages/             # Main application pages
├── types/             # TypeScript interfaces
└── App.tsx            # Main application component
```

## 🔨 Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## ⚠️ Important Notes

1. This application uses the ReqRes API which is a test API:
   - Changes are not persistent
   - Only simulated responses are returned
   - Some features are mock implementations

2. The authentication token is stored in localStorage:
   - For production applications, consider using more secure storage methods
   - Implement proper token refresh mechanisms

3. Error handling:
   - The application includes basic error handling
   - For production, implement more comprehensive error tracking
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
