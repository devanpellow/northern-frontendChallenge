import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

export default class InternForm extends React.Component {
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {

    setSubmitting(true)
    setTimeout(() => {

      setSubmitting(false);
      this.props.setHasSubmitted(true)
    }, 2000);
     
    return;
  }

  render() {
    return (
      <div className="form-wrapper">
      <p>Prepare for your career with a Project Managment, Web-Developement, Graphic Design, or Digital Marketing Internship at Northern</p>
      <Formik 
        initialValues={{
           email: '',
           interest: ''
        }}
        validate={(values) => {
          let errors = {};
      
          if(!values.email)
             errors.email = "Please Enter A Valid Address";
              
             //check if my values have errors
             return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return(
            <Form className="form">
            <ErrorMessage className="error-msg" name="email" />
            <div className="inputs">
              <Field 
              type="email" 
              name="email" 
              placeholder="Email address" 
              /> 
              
              <Field
              name="interest" 
                  component="select" 
                  placeholder="Your Interest">   
                  <option disabled value="">Your Interests</option>
                  <option value="project-management">Project Management</option>
                  <option value="web-dev">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  </Field>                                
                  </div>
                  <button 
                    type="submit" 
                    disabled={formProps.isSubmitting}>
                    {formProps.isSubmitting ? 'Submitting...': `Sign Up Now \u25B8`}
                  </button>
            </Form>
           );
        }}
     />
     </div>);
   }
}
  