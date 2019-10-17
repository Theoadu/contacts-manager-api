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

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Makafui Anav Adukpo",
        email: "maadukpo@avemmedfarms.com",
        phone: "0244284451",
        type: "personal"
      },
      {
        id: 2,
        name: "Aseye Odelia Adukpo",
        email: "aoadukpo@avemmedfarms.com",
        phone: "0244284451",
        type: "professional"
      },
      {
        id: 3,
        name: "Emefa Amma Adukpo",
        email: "eaadukpo@avemmedfarms.com",
        phone: "0244284451",
        type: "personal"
      }
    ]
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
