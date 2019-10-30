import React, { useReducer } from "react";
import axios from "axios";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  GET_CONTACTS
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      /* {
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
      } */
    ],
    current: null,
    filtered: null,
    error: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/v1/contacts');
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    } catch (err) {
      dispatch({type: CONTACT_ERROR,payload: err.response.msg})
    }
  }
  // Add contact
  const addContact = async contact => {
    // contact.id = uuid.v4();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post('/api/v1/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({type: CONTACT_ERROR,payload: err.response.msg})
    }
    // console.log(contact)
  };

  // Delete Contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Update Contact

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Set Current
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getContacts,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
