import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { SiTelegram } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex items-center gap-5 mt-10 ">
        <a
          href="https://www.facebook.com/itsanvert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>

        <a
          href="https://www.linkedin.com/in/itsanvert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.twitter.com/itsanvert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://t.me/itsanvert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTelegram />
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
