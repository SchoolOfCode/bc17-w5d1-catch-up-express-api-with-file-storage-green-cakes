import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get('/api/recipes', async (req, res) => {
  try {
  const showRecipes = await getRecipes()
  res.status(200).json({
    success: true, 
    payload: showRecipes
  })
} catch (error) {
  res.status(500).json({    
    success: false, 
    payload: 'Internal server error'})
}
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
