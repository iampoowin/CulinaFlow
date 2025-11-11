const recipes = [
  {
    id: 1,
    name: "Creamy Alfredo Pasta",
    image: "assets/id1.png",
    description: "Rich and creamy pasta tossed with parmesan and herbs.",
    ingredients: ["Pasta", "Garlic", "Cream", "Butter", "Parmesan"],
    steps: [
      "Boil pasta until al dente.",
      "Sauté garlic in butter.",
      "Add cream and parmesan, stir until thick.",
      "Combine pasta and sauce, serve hot."
    ]
  },
  {
    id: 2,
    name: "Classic Tomato Bruschetta",
    image: "assets/id2.png",
    description: "A classic Italian appetizer with fresh tomatoes, garlic, and basil on toasted bread.",
    ingredients: ["Baguette", "Tomatoes", "Garlic", "Fresh Basil", "Olive Oil", "Balsamic Glaze"],
    steps: [
      "Slice the baguette and toast until golden brown.",
      "Dice the tomatoes and chop the basil.",
      "In a bowl, combine tomatoes, basil, minced garlic, and olive oil.",
      "Top the toasted bread with the tomato mixture.",
      "Drizzle with balsamic glaze before serving."
    ]
  },
  {
    id: 3,
    name: "Lemon Herb Roasted Chicken",
    image: "assets/id3.png",
    description: "A juicy and flavorful roasted chicken with lemon and herbs.",
    ingredients: ["Whole Chicken", "Lemon", "Rosemary", "Thyme", "Garlic", "Olive Oil"],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Stuff the chicken cavity with lemon, rosemary, and thyme.",
      "Rub the outside of the chicken with olive oil and garlic.",
      "Roast for 1.5 hours or until cooked through."
    ]
  },
  {
    id: 4,
    name: "Beef and Broccoli Stir-Fry",
    image: "assets/id4.png",
    description: "A quick and easy beef and broccoli stir-fry, better than takeout.",
    ingredients: ["Beef Sirloin", "Broccoli", "Soy Sauce", "Ginger", "Garlic", "Rice"],
    steps: [
      "Slice the beef and marinate in soy sauce, ginger, and garlic.",
      "Stir-fry the beef until browned.",
      "Add broccoli and stir-fry until tender-crisp.",
      "Serve over rice."
    ]
  },
  {
    id: 5,
    name: "Vegetarian Chili",
    image: "assets/id5.png",
    description: "A hearty and healthy vegetarian chili with beans and vegetables.",
    ingredients: ["Kidney Beans", "Black Beans", "Diced Tomatoes", "Onion", "Bell Pepper", "Chili Powder"],
    steps: [
      "Sauté onion and bell pepper until softened.",
      "Add beans, tomatoes, and chili powder.",
      "Simmer for at least 30 minutes.",
      "Serve with your favorite toppings."
    ]
  },
  {
    id: 6,
    name: "Chocolate Chip Cookies",
    image: "assets/id6.png",
    description: "The best soft and chewy chocolate chip cookies.",
    ingredients: ["Flour", "Butter", "Sugar", "Brown Sugar", "Eggs", "Chocolate Chips"],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Cream together butter and sugars.",
      "Beat in eggs, then stir in flour and chocolate chips.",
      "Drop by spoonfuls onto a baking sheet and bake for 10-12 minutes."
    ]
  },
  {
    id: 7,
    name: "Classic Caesar Salad",
    image: "assets/id7.png",
    description: "A classic Caesar salad with crisp romaine lettuce and creamy dressing.",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
    steps: [
      "Wash and chop the romaine lettuce.",
      "Toss with Caesar dressing, croutons, and Parmesan cheese.",
      "Serve immediately."
    ]
  },
  {
    id: 8,
    name: "Shrimp Scampi",
    image: "assets/id8.png",
    description: "A simple yet elegant shrimp scampi with garlic, white wine, and lemon.",
    ingredients: ["Shrimp", "Linguine", "Garlic", "White Wine", "Lemon", "Butter"],
    steps: [
      "Cook linguine according to package directions.",
      "Sauté garlic in butter, then add shrimp and cook until pink.",
      "Deglaze the pan with white wine and lemon juice.",
      "Toss with cooked linguine."
    ]
  },
  {
    id: 9,
    name: "Pulled Pork Sandwiches",
    image: "assets/id9.png",
    description: "Slow-cooked pulled pork, perfect for sandwiches.",
    ingredients: ["Pork Shoulder", "BBQ Sauce", "Buns", "Coleslaw"],
    steps: [
      "Cook pork shoulder in a slow cooker with BBQ sauce for 6-8 hours.",
      "Shred the pork with two forks.",
      "Serve on buns with coleslaw."
    ]
  },
  {
    id: 10,
    name: "Margherita Pizza",
    image: "assets/id10.png",
    description: "A classic Margherita pizza with fresh mozzarella, tomatoes, and basil.",
    ingredients: ["Pizza Dough", "Fresh Mozzarella", "Tomatoes", "Fresh Basil", "Olive Oil"],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough and top with olive oil, mozzarella, and tomatoes.",
      "Bake for 10-12 minutes.",
      "Top with fresh basil before serving."
    ]
  },
  {
    id: 11,
    name: "Chicken Noodle Soup",
    image: "assets/id11.png",
    description: "A comforting and classic chicken noodle soup.",
    ingredients: ["Chicken Breast", "Egg Noodles", "Carrots", "Celery", "Onion", "Chicken Broth"],
    steps: [
      "Boil chicken breast and shred.",
      "Sauté carrots, celery, and onion.",
      "Add chicken broth, shredded chicken, and noodles.",
      "Simmer until noodles are cooked."
    ]
  },
  {
    id: 12,
    name: "Apple Pie",
    image: "assets/id12.png",
    description: "A classic American apple pie with a flaky crust.",
    ingredients: ["Pie Crust", "Apples", "Sugar", "Cinnamon", "Nutmeg", "Butter"],
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Line a pie plate with one crust.",
      "Fill with sliced apples mixed with sugar and spices.",
      "Top with the second crust, seal, and bake for 45-55 minutes."
    ]
  },
  {
    id: 13,
    name: "Pancakes",
    image: "assets/id13.png",
    description: "Fluffy and delicious pancakes, a breakfast favorite.",
    ingredients: ["Flour", "Milk", "Eggs", "Baking Powder", "Sugar", "Butter"],
    steps: [
      "Whisk together flour, baking powder, and sugar.",
      "In a separate bowl, whisk together milk and eggs.",
      "Combine wet and dry ingredients.",
      "Cook on a griddle until golden brown."
    ]
  }
];