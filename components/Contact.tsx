"use client";

import { ArrowUpRight } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { sendContactEmail } from "@lib/smtp";

import { Input, Label, Textarea } from "./atoms";
import { Container, Reveal } from "./Section";
import { cn, scrollToSection } from "@lib/utils";
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

const labelClass =
  "font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-subtle-foreground";
const fieldClass =
  "h-11 rounded-lg border-input bg-background/60 shadow-none placeholder:text-subtle-foreground focus-visible:border-highlight focus-visible:ring-0";

export const Contact = ({
  data,
  cv_url,
}: {
  data: ContactItem[];
  cv_url?: string;
}) => {
  const { toast } = useToast();

  const rows = [
    ...data
      .filter((item) => item.type === "contact")
      .map((item) => ({ ...item, value: item.value.split("|")[0].trim() })),
    ...data.filter((item) => item.type === "social"),
    ...(cv_url
      ? [{ id: "cv", title: "CV", value: "Download CV (PDF)", link: cv_url }]
      : []),
  ];

  return (
    <Container>
      <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
        <Reveal className="col-span-12 lg:col-span-6">
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl">
            Have a product to build?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            I&apos;m always open to discussing meaningful engineering
            challenges, frontend architecture, and new opportunities.
          </p>

          <ul className="mt-12 border-t border-border">
            {rows.map((row) => {
              const external = !/^(mailto|tel):/.test(row.link);
              return (
                <li key={row.id}>
                  <a
                    href={row.link}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group grid grid-cols-[6rem_1fr_auto] items-center gap-4 border-b border-border py-4"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle-foreground">
                      {row.title}
                    </span>
                    <span className="truncate text-sm text-foreground transition-colors group-hover:text-highlight sm:text-base">
                      {row.value}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-subtle-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-6" delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold tracking-[-0.01em]">
                Send a message
              </h3>
              <span className="font-mono text-[11px] text-subtle-foreground">
                Replies within 48h
              </span>
            </div>
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
                <Form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className={labelClass} htmlFor="firstName">
                        First Name
                      </Label>

                      <Field
                        as={Input}
                        className={fieldClass}
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                      />

                      <ErrorMessage
                        name="firstName"
                        component="p"
                        className="text-xs text-destructive"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className={labelClass} htmlFor="lastName">
                        Last Name
                      </Label>

                      <Field
                        as={Input}
                        className={fieldClass}
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                      />

                      <ErrorMessage
                        name="lastName"
                        component="p"
                        className="text-xs text-destructive"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className={labelClass} htmlFor="email">
                      Email
                    </Label>

                    <Field
                      as={Input}
                      className={fieldClass}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-xs text-destructive"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className={labelClass} htmlFor="subject">
                      Subject
                    </Label>

                    <Field
                      as={Input}
                      className={fieldClass}
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />

                    <ErrorMessage
                      name="subject"
                      component="p"
                      className="text-xs text-destructive"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className={labelClass} htmlFor="message">
                      Message
                    </Label>

                    <Field
                      as={Textarea}
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project..."
                      className={cn(fieldClass, "min-h-36 resize-none py-3")}
                    />

                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-xs text-destructive"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-[filter] hover:brightness-95 disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUpRight size={16} />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Reveal>
      </div>
    </Container>
  );
};

export const Footer = ({ name }: { name?: string }) => (
  <footer className="border-t border-border">
    <Container className="flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p className="text-muted-foreground">
        <span className="text-foreground">{name}</span> · Front-End Developer
      </p>
      <div className="flex items-center gap-6 font-mono text-xs text-subtle-foreground">
        <span>© {new Date().getFullYear()}</span>
        <button
          onClick={() => scrollToSection("#home")}
          className="cursor-pointer transition-colors hover:text-foreground"
        >
          Back to top ↑
        </button>
      </div>
    </Container>
  </footer>
);
