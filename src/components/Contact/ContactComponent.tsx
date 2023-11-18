import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import "./ContactComponent.css";
import { ImMail } from "react-icons/im";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const ContactComponent = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [t] = useTranslation("global");

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_eyd3qrg",
          "template_rqrqqsa",
          form.current,
          "9mwp7GUmqPoWf5Svh"
        )
        .then(
          (result) => {
            console.log(result.text);

            //show message success
            toast.success("The details have been sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            //clear form
            setFormValues({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="formContact">
      <div className="properties">
        <div className="container">
          <div className="row">
            <div className="col-sm icon-text">
              <div className="iconProperties">
                <FaSquarePhone size={60} />
              </div>
              <p className="text-under-icon">
                {t("contact.details2")}
                <a href="tel:0527293377">0527293377</a>
              </p>
            </div>
            <div className="col-sm icon-text">
              <div className="iconProperties">
                <ImMail size={60} />
              </div>
              <p className="text-under-icon">
                {t("contact.details3")}{" "}
                <a href="mailto:Sharonli161@gmail.com">Sharonli161@gmail.com</a>
              </p>
            </div>
            <div className="col-sm icon-text">
              <div className="iconProperties">
                <FaLocationDot size={60} />
              </div>
              <p className="text-under-icon">{t("contact.details4")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm map-div">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.8561394072703!2d35.28490865986455!3d32.61001709261106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c53c0f5add481%3A0xcad85b516a256b1c!2z15nXlNeV16nXoiDXl9eg16fXmdefIDgwLCDXotek15XXnNeU!5e0!3m2!1siw!2sil!4v1700317885978!5m2!1siw!2sil"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-sm">
            <div className="form-div">
              <div className="headerForm">
                <h3>{t("contact.contact-us")}</h3>
              </div>

              <form
                id="contact_form"
                name="contact_form"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <label>{t("contact.fname")}</label>
                      <input
                        type="text"
                        required
                        maxLength={50}
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        placeholder={t("contact.fname")}
                        value={formValues.firstName}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-sm">
                      <label>{t("contact.lname")}</label>
                      <input
                        type="text"
                        required
                        maxLength={50}
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        placeholder={t("contact.lname")}
                        value={formValues.lastName}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <label>{t("contact.email")}</label>
                      <input
                        type="email"
                        required
                        maxLength={50}
                        className="form-control"
                        id="email_addr"
                        name="user_email"
                        placeholder="name@example.com"
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-sm">
                      <label>{t("contact.phone")}</label>
                      <input
                        type="tel"
                        required
                        maxLength={50}
                        className="form-control"
                        id="phone_input"
                        name="user_phone"
                        placeholder={t("contact.phone")}
                        value={formValues.phone}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-">
                      <label>{t("contact.message")}</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formValues.message}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            message: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                    <div className="buttonSubmit">
                      <button
                        type="submit"
                        className="btn btn-primary px-4 btn-lg btnSubmit"
                      >
                        {t("contact.send")}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default ContactComponent;
