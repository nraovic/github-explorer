import React from 'react';
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types';

const handleSubmit = onSubmitForm => e => {
  e.preventDefault()
  const values = serializeForm(e.target, { hash: true })
  onSubmitForm(values)
}
const LandingPage = ({onSubmitForm}) => (
      <div>
        <h1 className='landing-page-title'>Find User on Github</h1>
        <form onSubmit={handleSubmit(onSubmitForm)} className='landing-page-form'>
          <div className='landing-page-details'>
            <input type='text' name='token' placeholder='Access Token' required/>
            <input type='text' name='username' placeholder='Username' required/>
            <button>Find User</button>
          </div>
        </form>
      </div>

)

LandingPage.propTypes = {
 onSubmitForm: PropTypes.func.isRequired
}
export default LandingPage
