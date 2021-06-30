import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";

import styles from "./edit-puppy-form.module.scss";
import axios from "axios";

const addPuppySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  breed: Yup.string().required("Breed is required"),
  color: Yup.string().required("Color is required"),
  picture: Yup.string().url("Must be a url").required("Picture is required"),
  description: Yup.string().required(),
});

function EditPuppyForm({ id, name, breed, color, picture, description }) {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        name: name,
        breed: breed,
        color: color,
        picture: picture,
        description: description,
      }}
      validationSchema={addPuppySchema}
      onSubmit={async (values) => {
        console.log(values);
        const result = await axios.put(`/api/puppies/${id}`, values);
        if (result.status === 200) {
          router.push("/");
        }
      }}
    >
      <Form className={styles.new_puppy_form}>
        <h3>Use this form to edit puppy.</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <Field id="name" name="name"></Field>
        </div>
        <div>
          <label htmlFor="breed">Breed:</label>
          <Field id="breed" name="breed"></Field>
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <Field id="color" name="color"></Field>
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <Field id="picture" name="picture"></Field>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <Field id="description" name="description"></Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default EditPuppyForm;
