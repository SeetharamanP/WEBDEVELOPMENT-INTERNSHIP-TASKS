// Sample data for initial recipes
let recipes = [
    { title: 'Pasta Carbonara', ingredients: 'Spaghetti, eggs, bacon, parmesan cheese, garlic, black pepper' },
    { title: 'Chocolate Cake', ingredients: 'Flour, sugar, cocoa powder, eggs, milk, butter' }
];

// Function to display recipes
function displayRecipes() {
    const recipesSection = document.getElementById('recipes');
    recipesSection.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipesSection.appendChild(recipeDiv);
    });
}

// Function to show add/edit form
function showAddForm() {
    const formSection = document.getElementById('add-edit-form');
    formSection.style.display = 'block';
    formSection.innerHTML = `
        <h2>Add Recipe</h2>
        <form id="recipeForm">
            <input type="text" id="title" placeholder="Title" required>
            <textarea id="ingredients" placeholder="Ingredients" required></textarea>
            <button onclick="saveRecipe()">Save</button>
        </form>
    `;
}

// Function to save a recipe
function saveRecipe() {
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;

    recipes.push({ title, ingredients });
    displayRecipes();
    hideForm();
}

// Function to edit a recipe
function editRecipe(index) {
    const formSection = document.getElementById('add-edit-form');
    formSection.style.display = 'block';
    formSection.innerHTML = `
        <h2>Edit Recipe</h2>
        <form id="recipeForm">
            <input type="text" id="title" value="${recipes[index].title}" required>
            <textarea id="ingredients" required>${recipes[index].ingredients}</textarea>
            <button onclick="updateRecipe(${index})">Update</button>
        </form>
    `;
}

// Function to update a recipe
function updateRecipe(index) {
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;

    recipes[index].title = title;
    recipes[index].ingredients = ingredients;
    displayRecipes();
    hideForm();
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Function to hide the add/edit form
function hideForm() {
    const formSection = document.getElementById('add-edit-form');
    formSection.style.display = 'none';
}

// Display initial recipes when the page loads
displayRecipes();
