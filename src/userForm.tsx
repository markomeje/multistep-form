import React from 'react'
import { Form } from 'react-bootstrap'
import FormWrapper from './FormWrapper'

export default function userForm() {
   return (
      <FormWrapper title="User Details">
         <Form.Group className="mb-3">
            <Form.Label>Firstname</Form.Label>
            <Form.Control autoFocus type="text" placeholder="Enter firstname" />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Enter lastname" />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" />
         </Form.Group>
      </FormWrapper>
   )
}
