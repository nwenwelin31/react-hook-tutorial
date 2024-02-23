import React from 'react'
import { Form, Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import fruit from '../assets/fruit.jpg'

function Favorite ({contact}){
    let favorite = contact.favorite;
    return (
        <Form method='post'>
            <button name='favorite' 
            value={favorite? "false":"true"} 
            aria-label={ favorite
            ? "Remove from favorites"
            : "Add to favorites"}>
            {favorite ? <FaStar />: <FaRegStar />}
            </button>
        </Form>
    );
}

const Contact = () => {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "../assets/fruit.jpg",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      };
    
  return (
    <div className='row'>
        <div className='col-md-4'>
            <img src={fruit} alt='fruit' className='img-fluid'/>
        </div>
        <div className='col-md-6'>
            <h1>
                {contact.first || contact.last ? (<>{contact.first} {contact.last}</>):<i>No Name</i> }
                <Favorite contact={contact} />
            </h1>
            {
                contact.twitter && (
                    <p>
                        <Link target='_blank' to={`https://twitter.com/${contact.twitter}`}>
                            {contact.twitter}
                        </Link>
                    </p>
                )
            }
            {contact.notes && (<p>{contact.notes}</p>)}
            <div>
                <Form action='edit'>
                    <button type='submit'>Edit</button>
                </Form>
                <Form method='post' action='destory' onSubmit={(event) => {
                    if(!window.confirm('Please confirm you want to delete this record.'))
                    {
                        event.preventDefault();
                    }
                }}>
                    <button type='submit'>Delete</button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Contact
