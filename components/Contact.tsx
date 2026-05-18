"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { sendContactEmail } from "@lib/smtp";

import { Button, Input, Label, Textarea } from "./atoms";
import { useToast } from "@hooks";

type ContactItem = {
  id: string;
  type: "contact" | "social";
  title: string;
  value: string;
  link: string;
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});

export const Contact = ({ data }: { data: ContactItem[] }) => {
  const { toast } = useToast();
  const getIcon = (item: ContactItem) => {
    if (item.type === "contact") {
      switch (item.title.toLowerCase()) {
        case "email":
          return <Mail size={24} />;

        case "phone":
          return <Phone size={24} />;

        case "location":
          return <MapPin size={24} />;

        default:
          return <Mail size={24} />;
      }
    }

    if (item.title.toLowerCase() === "linkedin") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    }

    return <Mail size={24} />;
  };

  const contacts = data.filter((item) => item.type === "contact");

  const socials = data.filter((item) => item.type === "social");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id="contact">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Get In Touch
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mt-4">
            I&apos;m always open to discussing new opportunities and projects.
          </p>
        </motion.div>

        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* FORM */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send Me a Message
              </h3>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                  try {
                    const response = await sendContactEmail({
                      email: values.email,
                      message: values.message,
                      subject: values.subject,
                      firstName: values.firstName,
                      lastName: values.lastName,
                    });
                    console.log("response", response);

                    if (response.success) {
                      resetForm();
                      toast({
                        title: "Success",
                        description: response.message,
                        variant: "success",
                      });
                    } else {
                      toast({
                        title: "Error",
                        description: response.message,
                        variant: "error",
                      });
                    }
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: String(error),
                      variant: "error",
                    });
                    console.error(error);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First Name</Label>

                        <Field
                          as={Input}
                          id="firstName"
                          name="firstName"
                          placeholder="First name"
                        />

                        <ErrorMessage
                          name="firstName"
                          component="p"
                          className="text-sm text-red-500"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last Name</Label>

                        <Field
                          as={Input}
                          id="lastName"
                          name="lastName"
                          placeholder="Last name"
                        />

                        <ErrorMessage
                          name="lastName"
                          component="p"
                          className="text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>

                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />

                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="subject">Subject</Label>

                      <Field
                        as={Input}
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                      />

                      <ErrorMessage
                        name="subject"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Message</Label>

                      <Field
                        as={Textarea}
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="resize-none"
                      />

                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      <Send size={18} />

                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            className="col-span-12 lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contacts.map((info) => (
                  <a
                    key={info.id}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                  >
                    <div className="text-primary">{getIcon(info)}</div>

                    <div>
                      <h4 className="font-medium">{info.title}</h4>

                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Follow Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                  >
                    <div className="text-primary">{getIcon(social)}</div>

                    <span className="font-medium">{social.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
