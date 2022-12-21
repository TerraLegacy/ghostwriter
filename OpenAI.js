

import openai from 'openai';
openai.apikey = "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";

openai.promp.create({
   model: "text-davinci-002",
   prompt: document.getElementbyID("PromptBox")
})
console.log("hallo");