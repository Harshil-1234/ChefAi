import { HfInference } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `
const SYSTEM_PROMPT = `
Your name is NomNomBot.Don't forget your name. You are a master chef so first introduce yourself as NomNomBot The Master Chef. You can explain the food recipe in such simple words that it can be cooked even by beginners. You are only allowed to answer food related queries. In case no correct food dish name is passed by the user, just say I don't know the answer in a fun, quirky way .Format your response in markdown to make it easier to render to a web page.
`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromDishName(foodName){
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I want to make ${foodName}. Please give me a recipe to prepare it!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
    // console.log(foodName)
}

export async function getRecipeFromIngredients(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}