import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href='https://www.instagram.com/dabeat360/' target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        </div>
        <div>
        <a href='https://github.com/db360/' target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        </div>
    </div>
  )
}

export default SocialMedia