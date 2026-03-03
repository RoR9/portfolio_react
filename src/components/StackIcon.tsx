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
  SiMongodb,
  SiNodedotjs,
  SiTrpc,
  SiSocketdotio,
  SiExpress,
  SiPayloadcms,
  SiRadixui,
  SiSentry,
  SiTypescript,
  SiZod,
  SiReactquery,
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
  | "mongodb"
  | "node"
  | "trpc"
  | "socketio"
  | "express"
  | "payload"
  | "radix"
  | "sentry"
  | "typescript"
  | "zod"
  | "reactquery"
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
    case "mongodb":
      return <SiMongodb className={className} />;
    case "node":
      return <SiNodedotjs className={className} />;
    case "trpc":
      return <SiTrpc className={className} />;
    case "socketio":
      return <SiSocketdotio className={className} />;
    case "express":
      return <SiExpress className={className} />;
    case "payload":
      return <SiPayloadcms className={className} />;
    case "radix":
      return <SiRadixui className={className} />;
    case "sentry":
      return <SiSentry className={className} />;
    case "typescript":
      return <SiTypescript className={className} />;
    case "zod":
      return <SiZod className={className} />;
    case "reactquery":
      return <SiReactquery className={className} />;
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
