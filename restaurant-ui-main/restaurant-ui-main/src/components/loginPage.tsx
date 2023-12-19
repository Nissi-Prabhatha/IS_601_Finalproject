
// LoginPage.js

// LoginPage.js

import MailchimpForm from '../components/MailchimpForm';  // Adjust the path accordingly

const LoginPage = () => {
  return (
    <div className="wrapper">
      <div className="login">
        {/* Your existing login content */}
        <div>
          {/* Add your existing login form elements here */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          {/* Add more login form elements as needed */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        {/* Mailchimp form */}
        <MailchimpForm />
      </div>
    </div>
  );
};

export default LoginPage;

