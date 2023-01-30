import React,{useState,useEffect, useInsertionEffect} from "react";
import './App.css';
import './index.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import { useState } from 'react';

function App() {
const LOCAL_STORAGE_KEY = "contacts";
const [contacts ,setContacts]=useState([]);

const addContactHandler=(contact) => {
  console.log(contact);
  setContacts([...contacts,contact]);
};

useEffect(() =>{
 const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 if(retrieveContacts) setContacts(retrieveContacts);
},[]);

useEffect(() =>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);
  return (
    <><div className="ui container">
      <Header />

      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div><div>
      <h1 className="text-3xl font-bold red">
      Hello world!
    </h1></div></>
   );
}

export default App;
