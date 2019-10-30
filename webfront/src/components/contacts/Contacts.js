import React, { Fragment, useContext, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered , getContacts, loading } = contactContext;

  useEffect(()=>{
    getContacts();
    //eslint-disable-next-line
  },[])

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }
  // console.log(contacts);
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItem  contact={contact} />
            </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
// udemy-dl -u theoadu@gmail.com -p U45MyTh30 --lecture-start https://www.udemy.com/course/nodejs-api-masterclass/learn/lecture/16581402 --lecture-end https://www.udemy.com/course/nodejs-api-masterclass/learn/lecture/16582408 https://www.udemy.com/course-dashboard-redirect/?course_id=2609434

// udemy-dl.exe -u theoadu@gmail.com -p U45MyTh30 https://www.udemy.com/course-dashboard-redirect/?course_id=2609434
