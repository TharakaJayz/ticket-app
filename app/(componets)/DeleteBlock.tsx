import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const DeleteBlock = (props: Props) => {
  return (
    <FontAwesomeIcon icon={faX}  className='text-red-400 hover:cursor-pointer hover:text-red-200' />
  )
}

export default DeleteBlock