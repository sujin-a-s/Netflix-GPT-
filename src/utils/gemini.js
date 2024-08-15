import { OPEN_AI_KEY } from "./constant";
import OpenAI from "openai";
console.log('OPEN_AI_KEY:', OPEN_AI_KEY);
const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
    dangerouslyAllowBrowser:true
  }); 

  export default openai