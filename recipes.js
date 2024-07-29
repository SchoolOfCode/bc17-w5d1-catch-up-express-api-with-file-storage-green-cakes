import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        throw new Error('Error reading file');
    }
};

// GET A RECIPE BY ID
export async function getRecipeByID(enteredId) {
    const jsonData = await getRecipes();
    const index = jsonData.findIndex(({id}) => id === enteredId);
    if (index === -1) {
        throw new Error(`No activity with ID ${enteredId} found.`);
    } 
    const data = jsonData[index];
    return data;
}



// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
