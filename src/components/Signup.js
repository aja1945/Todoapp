import React, { useState } from 'react';

const Signup = ({ handleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupClick = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      handleSignup(username, password);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignupClick}>Sign Up</button>
    </div>
  );
};

export default Signup;