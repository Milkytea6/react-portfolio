import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setmessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setmessage(inputValue);
    }
  };


  return (
    <div className="contact-container">
      {/* <h2>Enter your contact information</h2>
      <div className="form-container">
        <form className='form'>
          <input value={email} onChange={handleInputChange} name="email" type="email" placeholder='email...'></input>
          <input value={userName} onChange={handleInputChange} name="userName" type="username" placeholder='username...'></input>
          <textarea value={message} onChange={handleInputChange} name="message" type="message" placeholder='Enter you message here...' className='message-input' rows="4" cols="40"></textarea>
          <button type="submit" className='submit'>Submit</button>
        </form>
      </div> */}

      <h2>My Information</h2>
      <div className="my-info-container">
        <div>
          <h4>My Linkedin Profile</h4>
          <a href="https://www.linkedin.com/in/christopher-giordano-4486366b/">
            <img src="/assets/img/screenshots/linkedin.png"></img>
          </a>
        </div>
        <div>
          <h4>My GitHub</h4>
          <a href="https://github.com/Milkytea6">
            <img src="/assets/img/screenshots/github.png"></img>
          </a>
        </div>

        <h4>Email: chrisgcpg@gmail.com</h4>
        <h4>Phone: 609-314-1094</h4>
      </div>
    </div>
  )
}
export default Contact;