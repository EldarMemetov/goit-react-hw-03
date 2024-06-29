import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import formModule from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.number()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
});
const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={formModule.bigContainerForm}>
          <div className={formModule.containerForm}>
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage
              name="name"
              component="span"
              className={formModule.spanError}
            />
          </div>
          <div className={formModule.containerForm}>
            <label>Number</label>
            <Field name="number" type="text" />
            <ErrorMessage
              name="number"
              component="span"
              className={formModule.spanError}
            />
          </div>
          <button type="submit" className={formModule.buttonAdd}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
