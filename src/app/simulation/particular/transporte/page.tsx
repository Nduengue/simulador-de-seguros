import { Suspense } from 'react'
import Transporte from './Transporte'

const FormMtPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Transporte />
    </Suspense>
  )
}

export default FormMtPage