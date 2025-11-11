// DOM Elements
const recipeGrid = document.querySelector('.recipe-grid');
const recipesGrid = document.querySelector('.recipes-grid');

// Utility Functions
function createRecipeCard(recipe) {
    const card = document.createElement('article');
    card.className = 'recipe-card fade-in';
    card.innerHTML = `
        <div class="recipe-card-image">
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
        </div>
        <div class="recipe-card-content">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <a href="recipedetails.html?id=${recipe.id}" class="view-recipe-btn">View Recipe</a>
        </div>
    `;
    return card;
}

// Initialize Featured Recipes
function initializeFeaturedRecipes() {
    if (!recipeGrid) return;
    
    // Display first 3 recipes on homepage
    const featuredRecipes = recipes.slice(0, 3);
    featuredRecipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeGrid.appendChild(card);
    });
}

// Initialize All Recipes
function initializeAllRecipes() {
    if (!recipesGrid) return;
    
    recipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipesGrid.appendChild(card);
    });
}

// Intersection Observer for smooth animations
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeFeaturedRecipes();
    initializeAllRecipes();
    initializeAnimations();
});
