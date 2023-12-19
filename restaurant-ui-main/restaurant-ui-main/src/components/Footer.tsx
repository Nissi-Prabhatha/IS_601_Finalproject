import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>    
    {/* <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-green-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">Green Palate</Link>
      <p>© ALL RIGHTS RESERVED.</p>      
    </div> */}
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
    <div>
      <h3>Contact Information</h3>
      <p>Email: example@example.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Address: 123 Main Street, City, Country</p>
    </div>

    <div style={{ marginTop: '20px' }}>
      <h3>Follow Us</h3>
      <p>Twitter | Facebook | Instagram</p>
    </div>

    <div style={{ marginTop: '20px' }}>
      <p>&copy; 2023 Your Website Name. All rights reserved.</p>
    </div>
  </footer>
    </div>
  );
};

export default Footer;
