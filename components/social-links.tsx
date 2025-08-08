import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "Twitter/X",
    href: "https://twitter.com/ashbuilds",
    icon: <FaXTwitter className="h-5 w-5" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ash",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ash",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ashbuilds",
    icon: <FaYoutube className="h-5 w-5" />,
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 -mt-2 mb-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="p-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white hover:text-amber-100 hover:bg-white/30 transition-all duration-200 shadow-lg"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
