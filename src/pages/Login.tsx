import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../types/useAuth';
import type { UserRole } from '../types/auth';
import '../styles/Login.css'

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole>('Viewer');

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    if (!username.trim()) return;

    login(username, role);

    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}