import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Jing Wu",
  DESCRIPTION: "DPhil Student @ Avtive Vision Lab, Oxford | 3D Vision, Generative Models, Diffusion",
  EMAIL: "jing.wu@eng.ox.ac.uk",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://astro-micro-academic.vercel.app' // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "Jing Wu"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "DPhil Student @ Avtive Vision Lab, Oxford | 3D Vision, Generative Models, Diffusion",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION:
    "My past experiences",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "blog tag filter",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION:
    "DPhil Student @ Avtive Vision Lab, Oxford | About | Misc",
};