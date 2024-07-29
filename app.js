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
  res.status(404).json({    
    success: false, 
    payload: {error: error.message}
  })
}
});
app.post('/api/recipes', async (req, res) => {
  try {
    const newRecipe = await createRecipe(req.body)
    res.status(201).json({
      success: true, 
      payload: newRecipe
    })
  } catch (error) {
    res.status(404).json({    
      success: false, 
      payload: {error: error.message}
  })
}
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const showRecipe = await getRecipeByID(req.params.id)
    res.status(200).json({
      success: true,
      payload: showRecipe
    })
    } catch (error) {
    res.status(406).json({
      success: false, 
      payload: {error: error.message}
    })
  }
});

app.patch('/api/recipes/:id', async (req, res) => {
  const changeRecipe = await updateRecipeByID(req.params.id)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
