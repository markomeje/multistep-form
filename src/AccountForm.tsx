import React from 'react'
import { Form } from 'react-bootstrap'
import FormWrapper from './FormWrapper'

export default function AccountForm() {
  return (
      <FormWrapper title="Account Details">
         <Form.Group className="mb-3">
            <Form.Label>Balance</Form.Label>
            <Form.Control autoFocus type="text" placeholder="Enter Balance" />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
         </Form.Group>
      </FormWrapper>
  )
}
