import React from 'react'
import { Form } from 'react-bootstrap';
import FormWrapper from './FormWrapper';

type AccountData = {
   email: string,
   password: string,
};

type AccountFormProps = AccountData & {
   updateFields: (fields: Partial<AccountData>) => void,
};

export default function AccountForm({ email,
   password, updateFields }: AccountFormProps) {
  return (
      <FormWrapper title="Account Creation">
         <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control required autoFocus type="email" placeholder="Enter Email" value={email} onChange={(e) => updateFields({ email: e.target.value })} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Enter city" value={password} onChange={(e) => updateFields({ password: e.target.value })} />
         </Form.Group>
      </FormWrapper>
  )
}
