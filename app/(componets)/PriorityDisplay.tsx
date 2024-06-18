import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
  priority:number
}

const PriorityDisplay = (props: Props) => {
  return (
    <div className=' flex justify-start align-baseline'>
        <FontAwesomeIcon icon={faFire}  className={` pr-1 ${props.priority > 0? 'text-red-400' :'text-slate-400'} `}/>
        <FontAwesomeIcon icon={faFire}  className={` pr-1 ${props.priority > 1? 'text-red-400' :'text-slate-400'} `}/>
        <FontAwesomeIcon icon={faFire}  className={` pr-1 ${props.priority > 2? 'text-red-400' :'text-slate-400'} `}/>
        <FontAwesomeIcon icon={faFire}  className={` pr-1 ${props.priority > 3? 'text-red-400' :'text-slate-400'} `}/>
        <FontAwesomeIcon icon={faFire}  className={` pr-1 ${props.priority > 4? 'text-red-400' :'text-slate-400'} `}/>
        
        
        
        </div>
  )
}

export default PriorityDisplay