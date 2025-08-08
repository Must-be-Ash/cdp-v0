import { FaTiktok, FaYoutube, FaInstagram, FaXTwitter, FaGithub, FaLinkedin, FaGlobe, FaTwitch } from "react-icons/fa6";
import { FaSpotify, FaDiscord } from "react-icons/fa";

interface LinkItem {
  name: string;
  href: string;
  description?: string;
  followers?: string;
  color?: string;
}

interface LinkGridProps {
  links: LinkItem[];
  className?: string;
}

const platformIcons: { [key: string]: React.ReactNode } = {
  "twitter": <FaXTwitter className="h-6 w-6" />,
  "x": <FaXTwitter className="h-6 w-6" />,
  "instagram": <FaInstagram className="h-6 w-6" />,
  "tiktok": <FaTiktok className="h-6 w-6" />,
  "youtube": <FaYoutube className="h-6 w-6" />,
  "github": <FaGithub className="h-6 w-6" />,
  "linkedin": <FaLinkedin className="h-6 w-6" />,
  "website": <FaGlobe className="h-6 w-6" />,
  "portfolio": <FaGlobe className="h-6 w-6" />,
  "twitch": <FaTwitch className="h-6 w-6" />,
  "spotify": <FaSpotify className="h-6 w-6" />,
  "discord": <FaDiscord className="h-6 w-6" />,
};

const platformColors: { [key: string]: string } = {
  "twitter": "from-sky-400 to-blue-500",
  "x": "from-gray-700 to-black",
  "instagram": "from-pink-400 to-purple-600",
  "tiktok": "from-pink-500 to-black",
  "youtube": "from-red-500 to-red-600",
  "github": "from-gray-700 to-gray-900",
  "linkedin": "from-blue-600 to-blue-700",
  "website": "from-green-400 to-blue-500",
  "portfolio": "from-purple-400 to-pink-500",
  "twitch": "from-purple-500 to-purple-700",
  "spotify": "from-green-400 to-green-600",
  "discord": "from-indigo-500 to-purple-600",
};

function getIcon(linkName: string) {
  const key = linkName.toLowerCase();
  return platformIcons[key] || <FaGlobe className="h-6 w-6" />;
}

function getGradient(linkName: string) {
  const key = linkName.toLowerCase();
  return platformColors[key] || "from-white/20 to-white/10";
}

export function LinkGrid({ links, className = "" }: LinkGridProps) {
  return (
    <div className={`space-y-4 mb-6 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full p-4 bg-gradient-to-r ${link.color || getGradient(link.name)} backdrop-blur-2xl border border-white/20 rounded-2xl hover:border-white/30 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-white">{getIcon(link.name)}</div>
            <div className="flex-grow min-w-0">
              <h3 className="font-semibold text-white text-lg">{link.name}</h3>
              {link.description && (
                <p className="text-white/80 text-sm mt-1">{link.description}</p>
              )}
            </div>
            {link.followers && (
              <div className="flex-shrink-0 text-right">
                <p className="text-white/90 text-sm font-medium">{link.followers}</p>
                <p className="text-white/60 text-xs">followers</p>
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
