"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button, Input, Label, Textarea } from "./atoms";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "yasseralnajjar72@gmail.com",
      link: "mailto:yasseralnajjar72@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+201090179792 | +021121081998",
      link: "tel:+201090179792",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Maadi, Cairo, Egypt",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/Yasser-Alnajjar",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          <path d="M8 12h8" />
          <path d="M12 8h4" />
          <path d="M12 16h4" />
        </svg>
      ),
      name: "GitHub",
      url: "https://github.com/yasseralnajjar",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {/* Section Header */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about front-end development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* Contact Form */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                Send Me a Message
              </h3>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="firstName" className="text-sm sm:text-base">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="lastName" className="text-sm sm:text-base">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="subject" className="text-sm sm:text-base">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="message" className="text-sm sm:text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="text-sm sm:text-base resize-none"
                  />
                </div>

                <Button className="w-full sm:w-auto">
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="col-span-12 lg:col-span-5 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                Follow Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="font-medium text-foreground text-sm sm:text-base">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
