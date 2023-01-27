import React from 'react'
import { Form } from 'react-bootstrap'
import FormWrapper from './FormWrapper'

export default function AddressForm() {
   return (
      <FormWrapper title="Address Details">
         <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control autoFocus type="text" placeholder="Enter state" />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" />
         </Form.Group>
      </FormWrapper>
   )
}
