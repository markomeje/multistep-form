import { Form } from 'react-bootstrap'
import FormWrapper from './FormWrapper';

type UserData = {
   firstname: string,
   lastname: string,
   age: string,
};

type UserFormProps = UserData & {
   updateFields: (fields: Partial<UserData>) => void,
};

export default function userForm({ firstname, lastname, age, updateFields }: UserFormProps) {
   return (
      <FormWrapper title="User Details">
         <Form.Group className="mb-3">
            <Form.Label>Firstname</Form.Label>
            <Form.Control required autoFocus type="text" placeholder="Enter firstname" value={firstname} onChange={(e) => updateFields({ firstname: e.target.value })} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Lastname</Form.Label>
            <Form.Control required type="text" placeholder="Enter lastname" value={lastname} onChange={(e) => updateFields({ lastname: e.target.value })} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control required type="number" placeholder="Enter age" value={age} onChange={(e) => updateFields({ age: e.target.value })} />
         </Form.Group>
      </FormWrapper>
   )
}
