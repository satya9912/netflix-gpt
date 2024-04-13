import OpenAI from 'openai';
import { MY_OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: MY_OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;