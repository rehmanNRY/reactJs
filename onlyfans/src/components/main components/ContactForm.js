import React, { useState } from 'react';
import contact_image from '../../images/contact.png';

const ContactForm = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const handleTitleChange = (event) => {
      setTitle(event.target.value);
   };

   const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
   };

   const handleSend = () => {
      const encodedTitle = encodeURIComponent(title);
      const encodedDescription = encodeURIComponent(description);
      const defaultEmail = 'spideronlyfanmanagement@gmail.com'; // Replace with the default email address
      // Construct the URL for composing a mail in Gmail with default recipient
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${defaultEmail}&su=${encodedTitle}&body=${encodedDescription}`;
      // Open Gmail in a new tab/window with the prefilled data
      window.open(gmailURL, '_blank');
    };
   return (
      <div className='contact_main' id='ContactForm'>
         <div className="contact_content">
            <h2>Let's discuss about your account</h2>
            <img src={contact_image} alt="Contact illustrate" />
            <ul>
               <li><span><i className='bx bxs-envelope'></i></span>spideronlyfanmanagement@gmail.com</li>
            </ul>
         </div>
         <form>
            <h3>I am gonna provide you with a Google form that we have to add start with us</h3>
               <input
                  type="text"
                  id="title"
                  value={title}
                  placeholder='Your subject'
                  onChange={handleTitleChange}
               />
               <textarea
                  id="description"
                  value={description}
                  placeholder='Your message'
                  onChange={handleDescriptionChange}
               />
            <button type="button" onClick={handleSend}>
               Send mail now
            </button>
         </form>
      </div>
   );
};

export default ContactForm;