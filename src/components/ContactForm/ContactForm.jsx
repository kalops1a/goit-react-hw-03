import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

export const ContactForm = ({ addContact }) => {
  

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be less than 50 characters'),
    number: Yup.string().required('Required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be less than 50 characters'),
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <div className={css.searchBox}>
           <div className={css.inputGroup}>
          <label label className={ css.label} htmlFor="name">Name</label>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage className={css.error } name="name" component="div" />
        </div>
        <div className={css.inputGroup}>
            <label className={ css.label} htmlFor="number">Number</label>
          <Field type="text" name="number" placeholder="Number" />
          <ErrorMessage className={css.error } name="number" component="div" />
        </div>
        </div>
       
        <button className={ css.submitBtn} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};