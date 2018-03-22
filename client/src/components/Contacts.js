import React from 'react';
import ContactForm from '../containers/ContactForm';

const Contacts = () =>
  <div className="contact-background" >
    <div id="dev-doodle">
      <img src="https://www.xhtmlchop.com/images/dedicated-design-ban.png" alt="Developer Cartoon" />
    </div>
    <div className="contact-form" >
      <ContactForm />
    </div>
  </div>

export default Contacts;
