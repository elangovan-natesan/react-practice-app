import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^[0-9]{10}$/;

export default function PersonalDetails() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    console.log("Personal Details component mounted");

    return () => {
      console.log("Personal Details component unmounted");
    };
  });

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Please enter a valid 10-digit phone number")
      .required("Phone number is required"),
    address: Yup.object({
      street: Yup.string()
        .min(5, "Street address must be at least 5 characters")
        .required("Street address is required"),
      city: Yup.string()
        .min(2, "City must be at least 2 characters")
        .required("City is required"),
      state: Yup.string()
        .min(2, "State must be at least 2 characters")
        .required("State is required"),
      zipCode: Yup.string()
        .matches(/^[0-9]{5,6}$/, "Please enter a valid ZIP code")
        .required("ZIP code is required"),
    }),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Submitted:", values);
      setSubmitSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Shipping Details</h3>
            </div>
            <div className="card-body">
              {submitSuccess && (
                <div className="alert alert-success mb-4" role="alert">
                  Order details submitted successfully!
                </div>
              )}

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <Field
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <Field
                        name="mobile"
                        type="tel"
                        className="form-control"
                        placeholder="Enter your mobile number"
                      />
                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address.street" className="form-label">
                        Street Address
                      </label>
                      <Field
                        name="address.street"
                        type="text"
                        className="form-control"
                        placeholder="Enter street address"
                      />
                      <ErrorMessage
                        name="address.street"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="address.city" className="form-label">
                          City
                        </label>
                        <Field
                          name="address.city"
                          type="text"
                          className="form-control"
                          placeholder="Enter city"
                        />
                        <ErrorMessage
                          name="address.city"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="address.state" className="form-label">
                          State
                        </label>
                        <Field
                          name="address.state"
                          type="text"
                          className="form-control"
                          placeholder="Enter state"
                        />
                        <ErrorMessage
                          name="address.state"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="address.zipCode" className="form-label">
                          ZIP Code
                        </label>
                        <Field
                          name="address.zipCode"
                          type="text"
                          className="form-control"
                          placeholder="Enter ZIP code"
                        />
                        <ErrorMessage
                          name="address.zipCode"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Placing Order...
                          </>
                        ) : (
                          "Place Order"
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
