/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Form.scss';

// * scripts

// * contexts

// * img

// * icons

const Form = ({ type }) => {
   return (
      <>
         {(type === 'simple' || type === undefined) && (
            <form
               className="Form simple"
               autoComplete="off"
               onSubmit={(e) => e.preventDefault()}
            >
               <div className="input-group">
                  <label>
                     <span>Email address.</span>
                     <input type="email" required autoComplete="off" />
                  </label>
               </div>
               <button type="submit">Get a quote</button>
            </form>
         )}

         {type === 'complete' && (
            <div className="complete-form">
               <h3>get a quote</h3>
               <form
                  className="Form complete"
                  autoComplete="off"
                  onSubmit={(e) => e.preventDefault()}
               >
                  <div className="input-field">
                     <label htmlFor="product">Product</label>
                     <select
                        name="product"
                        id="product"
                        defaultValue="-"
                     >
                        <option value="-">-</option>
                        <option value="lifeInsurance">life insurance</option>
                        <option value="carInsurance">car insurance</option>
                        <option value="healthInsurance">
                           health insurance
                        </option>
                        <option value="quick&faster">quick & faster</option>
                        <option value="trusted&professional">
                           trusted & professional
                        </option>
                        <option value="discount&savings">
                           discount & savings
                        </option>
                     </select>
                  </div>
                  <div className="input-field" isrequired={true}>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" />
                  </div>
                  <button type="submit">Start a quote</button>
               </form>

               <p>
                  Been here before? <a href="#">Review your quotes.</a>
               </p>
            </div>
         )}
      </>
   );
};

Form.propTypes = {
   type: PropTypes.string.isRequired,
};

export default Form;
