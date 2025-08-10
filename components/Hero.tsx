"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@components";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center min-h-[80vh] lg:min-h-[90vh]">
        {/* Left Column - Text Content */}
        <motion.div
          className="col-span-12 lg:col-span-7 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.p
              className="text-primary font-medium text-base sm:text-lg lg:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Yasser Alnajjar
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Front-End Developer (React.js - Next.js)
            </motion.h2>
          </div>

          <motion.p
            className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Dynamic Next.js Developer with a proven track record in enhancing
            user experience and optimizing application performance. Expert in
            Next.js and JavaScript, I excel in creating reusable components and
            implementing SEO strategies, driving significant website traffic.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button className="w-full sm:w-auto justify-center">
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Download CV</span>
              <span className="xs:hidden">CV</span>
            </Button>

            <Button className="w-full sm:w-auto justify-center">
              <Mail size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Get In Touch</span>
              <span className="xs:hidden">Contact</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Picture */}
        <motion.div
          className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Profile Picture */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-yellow-200 rounded-full animate-float"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Yasser Alnajjar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements - Hidden on very small screens */}
            <motion.div
              className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full hidden sm:block"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full hidden sm:block"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
