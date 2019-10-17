import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext.contacts;

  console.log(contacts);
  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
// udemy-dl -u theoadu@gmail.com -p U45MyTh30 --lecture-start https://www.udemy.com/course/nodejs-api-masterclass/learn/lecture/16581402 --lecture-end https://www.udemy.com/course/nodejs-api-masterclass/learn/lecture/16582408 https://www.udemy.com/course-dashboard-redirect/?course_id=2609434

// udemy-dl.exe -u theoadu@gmail.com -p U45MyTh30 https://www.udemy.com/course-dashboard-redirect/?course_id=2609434
