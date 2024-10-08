export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVATAR = "https://tse2.mm.bing.net/th?id=OIP.RE_WgzICByGEGmvLtanb6QHaHa&pid=Api&P=0&h=180"
export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"
export const NETFLIX_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const SUPPORTED_LANGUAGES = [
  {identifier : "en" , name : "English"},
  {identifier : "tamil" , name : "Tamil"},
  {identifier : "japanese" , name : "Japenese"}
]

console.log('REACT_APP_OPEN_AI_KEY:',process.env.REACT_APP_OPEN_AI_KEY);
export const OPEN_AI_KEY=process.env.REACT_APP_OPEN_AI_KEY;