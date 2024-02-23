import React from 'react'
import { Link, Outlet, json, useLoaderData } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { getContacts } from '../helpers';

export async function rootLoader () {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "../assets/fruit.jpg",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      };
    return json(contact,{status: 200});
}

const Root = () => {
    const contact  = useLoaderData();
  return (
    <>
      <div id='sidebar'>
        <div className="input-group m-1">
            <div div className="form-outline" data-mdb-input-init>
                <input id="search-focus" type="search" className="form-control" placeholder='Search...'/>
            </div>
            <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                <IoSearchOutline />
            </button>
        </div>
            
      <nav>
      {
        contact.length ? (
            <ul>
              {contact.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
        ):(
            <p>
              <i>No contacts</i>
            </p>
          )
      }
      </nav>
      </div>
      <div id='detail'> 
        <Outlet />
      </div>
    </>
  )
}

export default Root
