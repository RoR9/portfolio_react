import {
  SiHtml5,
  SiReact,
  SiCss3,
  SiSass,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiSanity,
  SiLinkedin,
  SiCodewars,
  SiFacebook,
  SiGithub,
} from "react-icons/si";

export type Icon =
  | "html"
  | "css"
  | "js"
  | "sass"
  | "react"
  | "next"
  | "vite"
  | "tailwind"
  | "sanity"
  | "facebook"
  | "codewars"
  | "linkedin"
  | "github";

type Props = {
  name: Icon;
  className?: string;
};

const StackIcon: React.FC<Props> = ({
  name,
  className,
}) => {
  switch (name) {
    case "html":
      return <SiHtml5 className={className} />;
    case "css":
      return <SiCss3 className={className} />;
    case "js":
      return <SiJavascript className={className} />;
    case "react":
      return <SiReact className={className} />;
    case "sass":
      return <SiSass className={className} />;
    case "next":
      return <SiNextdotjs className={className} />;
    case "vite":
      return <SiVite className={className} />;
    case "tailwind":
      return <SiTailwindcss className={className} />;
    case "sanity":
      return <SiSanity className={className} />;
    case "facebook":
      return <SiFacebook className={className} />;
    case "codewars":
      return <SiCodewars className={className} />;
    case "linkedin":
      return <SiLinkedin className={className} />;
    case "github":
      return <SiGithub className={className} />;

    default:
      break;
  }
};

export default StackIcon;
