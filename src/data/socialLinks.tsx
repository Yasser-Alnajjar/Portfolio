import { ReactNode } from "react";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const socialLinks: {
  href: string;
  icon: ReactNode;
  name: string;
}[] = [
  {
    href: "https://www.facebook.com/yasseralnajjar23",
    icon: <FaFacebookSquare />,
    name: "Facebook",
  },
  {
    href: "https://wa.me/+201090179792",
    icon: <FaWhatsapp />,
    name: "Whatsapp",
  },
  {
    href: "mailto:yasseralnajjar@gmail.com",
    icon: <MdEmail />,
    name: "Gmail",
  },
  {
    href: "https://www.linkedin.com/in/yasser-alnajjar-643a77225",
    icon: <FaLinkedin />,
    name: "Linkedin",
  },
  {
    href: "https://github.com/Yasser-Alnajjar",
    icon: <FaGithub />,
    name: "Github",
  },
];
