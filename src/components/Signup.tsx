/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unreachable */
/* eslint-disable no-return-assign */
import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';

interface SignupState {
  [key: string]: string
}

interface Field {
  id: string,
  labelText: string,
  labelFor: string,
  type?: string,
  isRequired?: boolean,
  placeholder?: string,
}

const fields: Field[] = signupFields;
const fieldsState: SignupState = {};

fields.forEach((field: Field) => fieldsState[field.id] = '');

export default function Signup (): JSX.Element {
  const [signupState, setSignupState] = useState<SignupState>(fieldsState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const createAccount = () => {
    const local = signupState;

    fetch('http://127.0.0.1:5600/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(local)
    })
      .then((res: Response) => res.text())
      .then((text: string) => {
        console.log(text);
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {
          fields.map((field: Field) =>
            <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={signupState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder} type={''}            />
          )
        }
        <FormAction handleSubmit={handleSubmit} text="Signup"/>
      </div>
    </form>
  );
}