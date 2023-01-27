import React, { ReactNode } from 'react'

type FormWrapperProps = {
   title: string,
   children: ReactNode
};

export default function FormWrapper({ title, children }: FormWrapperProps) {
   return (
      <>
         <h2>{ title }</h2>
         <div>{ children }</div>
      </>
   )
}
