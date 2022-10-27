import React from 'react'
import Resume from '../../assets/'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default CTA