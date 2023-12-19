// MailchimpForm.jsx

// MailchimpForm.jsx

const MailchimpForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        action="https://gmail.us21.list-manage.com/subscribe/post?u=346b5ce19ef1439dadc724ece&amp;id=1cf18948fb&amp;f_id=00efeee6f0" // Replace with your Mailchimp form action URL
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate w-full max-w-lg bg-white p-8 rounded-lg shadow-md" // Corrected className
        target="_blank"
        noValidate
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up for Updates</h2>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="mce-EMAIL" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="mce-FNAME" className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="mce-LNAME" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Subscribe Button */}
        <div className="mb-4">
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;
