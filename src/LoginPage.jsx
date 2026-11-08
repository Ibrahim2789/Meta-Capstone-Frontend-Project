import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-page-view">
      <div className="container">
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Log in to view your reservations and exclusive chef specials.</p>
          </div>

          {isLoggedIn ? (
            <div className="login-success-box">
              <h3>✓ You are signed in as</h3>
              <p><strong>{email}</strong></p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/reservations" className="btn-primary">
                  Book a Table
                </Link>
                <Link to="/" className="btn-secondary-action">
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-field">
                <label htmlFor="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="login-options-row">
                <label className="remember-checkbox-label">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-confirm-reservation" style={{ width: '100%', maxWidth: '100%' }}>
                Sign In
              </button>

              <div className="login-footer-text">
                <p>
                  Don't have an account?{' '}
                  <a href="#signup" style={{ color: 'var(--primary-green)', fontWeight: 700 }}>
                    Create account
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
