import React from 'react'
import { Form } from 'react-bootstrap'
import FormWrapper from './FormWrapper';

type AddressData = {
   state: string,
   city: string,
   zip: string,
   street: string
};

type AddressFormProps = AddressData & {
   updateFields: (fields: Partial<AddressData>) => void,
};



export default function AddressForm({ state, city, zip, street, updateFields }: AddressFormProps) {
   return (
      <FormWrapper title="Address Details">
         <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control required autoFocus type="text" placeholder="Enter state" value={state} onChange={(e) => updateFields({ state: e.target.value })} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="Enter city" value={city} onChange={(e) => updateFields({ city: e.target.value })} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control required type="number" placeholder="Enter zip" value={zip} onChange={(e) => updateFields({ zip: e.target.value })} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Street</Form.Label>
            <Form.Control required type="text" placeholder="Enter street" value={street} onChange={(e) => updateFields({ street: e.target.value })} />
         </Form.Group>
      </FormWrapper>
   )
}
