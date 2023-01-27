import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Form } from 'react-bootstrap';
import { useMultistepForm } from "./useMultistepForm";
import UserForm from './userForm';
import AccountForm from './AccountForm';
import AddressForm from './AddressForm';

export default function App() {
   const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultistepForm([
      <UserForm />, 
      <AccountForm />, 
      <AddressForm />
   ]);

   return (
      <Container className='mt-4'>
         <Row className='d-flex justify-content-center'>
            <Col md="5">
               <div className="p-4 border w-100">
                  <Form>
                     <div className='p-3 text-white d-flex bg-dark mb-4 rounded justify-content-between'>
                        <div className='text-white'>{ currentStepIndex + 1 } / { steps.length }</div>
                     </div>
                     <div className="border p-4 mb-4">
                        <div className='text-dark'>{ step }</div>
                     </div>
                     <div className='d-flex'>
                        { !isFirstStep && <Button type='button' onClick={back} className='me-3'>Back</Button> }
                        <Button type='button' onClick={next} className='me-3'>{ isLastStep ? 'Finish' : 'Next' }</Button>
                     </div>
                  </Form>
               </div>
            </Col>
         </Row>
      </Container>
   )
}

