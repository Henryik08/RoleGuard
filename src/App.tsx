import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import NAvbar from './components/Navbar';


function ProtectedLayout({children}: {children: React.ReactNode}) {
  return(
    <>
      <NAvbar/>
      {children}
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />


      {/* Protected */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        </ProtectedRoute>
      } 
      />

      <Route path="/Profile" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        </ProtectedRoute>
      } 
      />

      <Route path="/settings" element={
        <ProtectedRoute requiredRole="Admin">
          <ProtectedLayout>
            <Settings />
          </ProtectedLayout>
        </ProtectedRoute>
      } 
      />

      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;