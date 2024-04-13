export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_ICON =
  "https://cdn-icons-png.flaticon.com/128/848/848043.png";

export const NETFLIX_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {
    "identifier": "en",
    "name": "English"
  },
  {
    "identifier": "hindi",
    "name": "Hindi"
  },
  {
    "identifier": "telugu",
    "name": "Telugu"
  },
]  

export const OPENAI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;