import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Form Component
// Task : ผูก State กับ UI
function Form() {
  // Data State
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //# Color
  const [usernameColor, setUsernameColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

  // Error State
  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Username
    if (username.length >= 8) {
      setErrorUserName('');
      setUsernameColor('green')
    } else {
      setErrorUserName('กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร');
      setUsernameColor('red')
    }

    // Validate Email
    if (email.includes('@')) {
      setErrorEmail('');
      setEmailColor('green')
    } else {
      setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
      setEmailColor('red');
    }
    
    // Validate Password
      if(password.length >= 8) {
        setErrorPassword('')
        setPasswordColor('green')
      }
      else {
        setErrorPassword('กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร')
        setPasswordColor('red')
      }

      // Validate Confirm Password
      if(confirmPassword === password) {
        setErrorConfirmPassword('')
        setConfirmPasswordColor('green')
      } else {
        setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน กรุณาระบุใหม่')
        setConfirmPasswordColor('red')
      }
      
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input">
          <label>username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={{borderColor: usernameColor}}
          />
          <small style={{color: usernameColor}}>{errorUserName}</small>
        </div>
        <div className="form__input">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{borderColor: emailColor}}
          />
          <small style={{color: emailColor}}>{errorEmail}</small>
        </div>
        <div className="form__input">
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{borderColor: passwordColor}}
          />
          <small style={{color: passwordColor}}>{errorPassword}</small>
        </div>
        <div className="form__input">
          <label>confirm-password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{borderColor: confirmPasswordColor}}
          />
          <small style={{color: confirmPasswordColor}}>{errorConfirmPassword}</small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);