import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const contactState = props => {
  const initialState = {
    contacts: []
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  // Update Contact

  // Set Current

  // Clear Current

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
