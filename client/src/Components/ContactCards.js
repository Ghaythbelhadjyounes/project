import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact } from '../JS/Actions/contact'

function ContactCards({contact}) {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div>
      <Card>
        
    <Image  src={`uploads/${contact.imageURL}`} wrapped ui={false} />
    
    <Card.Content>
      <Card.Header>{contact.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{contact.age} Years Old</span>
      </Card.Meta>
      <Card.Description>
        Phone : {contact.phone}
      </Card.Description>
      <Card.Header>{contact.functionality}</Card.Header>
    </Card.Content>
    {isAuthAdmin ? (
    <Button.Group>
    <Button onClick={()=>dispatch(deleteContact(contact._id))} >delete</Button>
    <Button.Or />
    <Button positive onClick={()=>navigate(`/edit/${contact._id}`)}>Edit</Button>
  </Button.Group>
  ) : null}
  </Card>
    </div>
  )
}

export default ContactCards