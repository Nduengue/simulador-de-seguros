import React, { Suspense } from 'react'
import Vida from './Vida'

const FormVidaPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Vida />
    </Suspense>
  )
}

export default FormVidaPage