import React, { useState } from "react"
import * as Yup from "yup"
import { Formik } from "formik"
import axios from "axios"
import Toast from "../components/Toast"
import ReachUs from "../components/ReachUs"

const Form = ({ card, form }) => {
  const [conf, setConf] = useState({})
  const { validation } = form

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

  const schema = Yup.object({
    firstName: Yup.string().required(validation.firstNameRequired),
    lastName: Yup.string().required(validation.lastNameRequired),
    email: Yup.string()
      .required(validation.emailRequired)
      .email(validation.emailInvalid),
    phone: Yup.string().required(validation.phoneRequired),
    subject: Yup.string().required(validation.subjectRequired),
    message: Yup.string().required(validation.messageRequired),
  })

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { firstName, lastName, email, phone, subject, message } = values

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }

    const config = {
      method: "post",
      url: `${process.env.GATSBY_AWS_API_GATEWAY}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }

    axios(config)
      .then((response) => {
        if (response.status === 200) {
          resetForm()
          setConf({
            type: "success",
            error: false,
            heading: validation.successHeader,
            body: validation.successBody,
            visible: true,
          })
          setTimeout(() => handleClose(), 5000)
        }
      })
      .catch((error) => {
        setSubmitting(false)
        setConf({
          type: "alert",
          error: true,
          heading: validation.errorHeader,
          body: validation.errorBody,
          visible: true,
        })
        setTimeout(() => handleClose(), 5000)
      })
  }

  const handleClose = () => {
    setConf({ ...conf, visible: false })
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <Toast handleClose={handleClose} conf={conf} />
          <section className="relative overflow-hidden">
            <div className="container py-4 lg:py-8 mx-auto flex">
              <div className="grid gap-8 row-gap-10 sm:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="font-black text-2xl mb-4 lg:mb-8 font-bold leading-none tracking-tight text-gray-900 lg:text-3xl">
                    {form.heading}
                  </h1>
                  <ReachUs data={card} />
                </div>
                <div>
                  <p className="leading-7 text-base text-gray-900 md:text-lg mb-5">
                    {form.body}
                  </p>
                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    action={`${process.env.GATSBY_AWS_API_GATEWAY}`}
                    method="POST"
                  >
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-full sm:w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="firstName"
                            className="leading-7 text-base text-gray-900 md:text-lg font-semibold"
                          >
                            {form.firstName}
                          </label>
                          <input
                            type="text"
                            id="firstName-input"
                            name="firstName"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out"
                            placeholder={form.firstName}
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.firstName && touched.firstName ? (
                            <p className="invalid mt-1 text-sm text-fire font-semibold">
                              {errors.firstName}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="p-2 w-full sm:w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="lastName-input"
                            className="leading-7 text-base text-gray-900 md:text-lg font-semibold"
                          >
                            {form.lastName}
                          </label>
                          <input
                            type="text"
                            id="lastName-input"
                            name="lastName"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out"
                            placeholder={form.lastName}
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.lastName && touched.lastName ? (
                            <p className="invalid mt-1 text-sm text-fire font-semibold">
                              {errors.lastName}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="p-2 w-full sm:w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="leading-7 text-base text-gray-900 md:text-lg font-semibold"
                          >
                            {form.email}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out"
                            placeholder={form.email}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.email && touched.email ? (
                            <p className="invalid mt-1 text-sm text-fire font-semibold">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="p-2 w-full sm:w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="phone-input"
                            className="leading-7 text-base text-gray-900 md:text-lg font-semibold"
                          >
                            {form.phone}
                          </label>
                          <input
                            type="text"
                            id="phone-input"
                            name="phone"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out"
                            placeholder={form.phone}
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.phone && touched.phone ? (
                            <p className="invalid mt-1 text-sm text-fire font-semibold">
                              {errors.phone}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="subject-input"
                            className="leading-7 text-base text-gray-900 md:text-lg font-semibold"
                          >
                            {form.subject}
                          </label>
                          <input
                            type="text"
                            id="subject-input"
                            name="subject"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out"
                            placeholder={form.subject}
                            value={values.subject}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.subject && touched.subject ? (
                            <p className="invalid mt-1 text-sm text-fire font-semibold">
                              {errors.subject}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="message-input"
                            className="leading-7 text-base text-gray-900 md:text-lg font-semibold"
                          >
                            {form.message}
                          </label>
                          <textarea
                            id="message-inut"
                            name="message"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-out"
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          ></textarea>
                          {errors.message && touched.message ? (
                            <p className="invalid mt-1 text-sm text-fire font-semibold">
                              {errors.message}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex mx-auto text-white font-black bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 text-lg"
                        >
                          {isSubmitting ? form.submitting : form.submit}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <div className="container py-4 lg:py-8 mx-auto flex"></div> */}
          </section>
        </>
      )}
    </Formik>
  )
}

export default Form
