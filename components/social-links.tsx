import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
{
  name: "Twitter/X",
  href: "https://twitter.com",
  icon: <FaXTwitter className="h-5 w-5" />,
},
{
  name: "Instagram",
  href: "https://instagram.com",
  icon: <FaInstagram className="h-5 w-5" />,
},
{
  name: "TikTok",
  href: "https://tiktok.com",
  icon: <FaTiktok className="h-5 w-5" />,
},
{
  name: "YouTube",
  href: "https://youtube.com",
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
        className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
      >
        {link.icon}
      </a>
    ))}
  </div>
);
}
