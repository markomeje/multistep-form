import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Form } from 'react-bootstrap';
import { useMultistepForm } from "./useMultistepForm";
import UserForm from './userForm';
import AccountForm from './AccountForm';
import AddressForm from './AddressForm';
import { FormEvent, useState } from 'react';

type FormData = {
   firstname: string,
   lastname: string,
   age: string,
   street: string,
   city: string,
   state: string,
   zip: string,
   email: string,
   password: string
};

const INITIAL_DATA: FormData = {
   firstname: '',
   lastname: '',
   age: '',
   street: '',
   city: '',
   state: '',
   zip: '',
   email: '',
   password: ''
};

export default function App() {
   const [data, setData] = useState(INITIAL_DATA);
   function updateFields(newFields: Partial<FormData>) {
      setData((prevFields) => {
         return {...prevFields, ...newFields};
      });
   }

   const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultistepForm([
      <UserForm { ...data } updateFields={updateFields} />,
      <AddressForm { ...data } updateFields={updateFields} />,
      <AccountForm { ...data } updateFields={updateFields} />, 
   ]);

   const onSubmit = (event: FormEvent) => {
      event.preventDefault();
      if(!isLastStep) return next();
      alert('Successful Account Creation');
   }

   return (
      <Container className='mt-4'>
         <Row className='d-flex justify-content-center'>
            <Col md='5'>
               <div className='p-4 border w-100'>
                  <Form onSubmit={onSubmit}>
                     <div className='p-3 text-white d-flex bg-dark mb-4 rounded justify-content-between'>
                        <div className='text-white'>{ currentStepIndex + 1 } / { steps.length }</div>
                     </div>
                     <div className="border p-4 mb-4">
                        <div className='text-dark'>{ step }</div>
                     </div>
                     <div className='d-flex'>
                        { !isFirstStep && <Button type='button' onClick={back} className='me-3'>Back</Button> }
                        <Button type='submit' className='me-3'>{ isLastStep ? 'Finish' : 'Next' }</Button>
                     </div>
                  </Form>
               </div>
            </Col>
         </Row>
      </Container>
   )
}

