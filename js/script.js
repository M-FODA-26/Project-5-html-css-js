var meals = [
    {
        mealName: "Creamy Spaghetti Carbonara",
        mealDescription:
            "A classic Italian pasta dish with eggs, cheese, and pancetta",
        mealImage:
            "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "Italian",
        ratingAverage: 4.8,
        ratingQuantity: 234,
        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta or guanciale, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Freshly ground black pepper",
            "Salt for pasta water",
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
            "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
            "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg",
        },
        tips: [
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water - it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream - authentic carbonara is made with eggs only",
        ],
    },
    {
        mealName: "Honey Garlic Salmon",
        mealDescription: "Pan-seared salmon with a sweet and savory glaze",
        mealImage:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
        prepTime: "10 min",
        cookTime: "15 min",
        totalTime: 25,
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        ratingsAverage: 4.9,
        ratingsQuantity: 187,
        ingredients: [
            "2 salmon fillets (6oz each)",
            "3 tablespoons honey",
            "2 tablespoons soy sauce",
            "4 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1 teaspoon fresh ginger, grated",
            "Sesame seeds for garnish",
            "Green onions, sliced",
        ],
        instructions: [
            "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
            "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
            "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
            "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "35g",
            carbs: "28g",
            fat: "14g",
            fiber: "0g",
            sodium: "720mg",
        },
        tips: [
            "Don't overcook salmon - it should be slightly pink in the center",
            "Use wild-caught salmon for best flavor and nutrition",
            "Let the sauce caramelize slightly for deeper flavor",
            "Pair with steamed broccoli or asparagus for a complete meal",
        ],
    },
    {
        mealName: "Thai Green Curry",
        mealDescription:
            "Vibrant and aromatic curry with vegetables and coconut milk",
        mealImage:
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "25 min",
        totalTime: 40,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        ratingsAverage: 4.7,
        ratingsQuantity: 312,
        ingredients: [
            "2 tablespoons green curry paste",
            "400ml coconut milk",
            "300g chicken breast, sliced",
            "1 red bell pepper, sliced",
            "100g green beans",
            "1 eggplant, cubed",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Fresh Thai basil leaves",
        ],
        instructions: [
            "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
            "Add half the coconut milk and stir to combine with the curry paste.",
            "Add sliced chicken and cook until no longer pink, about 5 minutes.",
            "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
            "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
            "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
        ],
        nutrition: {
            calories: "420 kcal",
            protein: "26g",
            carbs: "22g",
            fat: "26g",
            fiber: "5g",
            sodium: "890mg",
        },
        tips: [
            "Adjust spice level by using more or less curry paste",
            "Add vegetables in stages based on cooking time needed",
            "Fresh Thai basil is essential for authentic flavor",
            "Use full-fat coconut milk for richest, creamiest sauce",
        ],
    },
    {
        mealName: "Classic Beef Burger",
        mealDescription: "Juicy homemade burger with all the fixings",
        mealImage:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ratingsAverage: 4.6,
        ratingsQuantity: 421,
        ingredients: [
            "500g ground beef (80/20)",
            "4 burger buns",
            "4 slices cheddar cheese",
            "Lettuce leaves",
            "Tomato slices",
            "Red onion, sliced",
            "Pickles",
            "Burger sauce or condiments",
        ],
        instructions: [
            "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
            "Season patties generously with salt and pepper on both sides.",
            "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast burger buns lightly on the grill or in a pan.",
            "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
        ],
        nutrition: {
            calories: "650 kcal",
            protein: "38g",
            carbs: "42g",
            fat: "35g",
            fiber: "2g",
            sodium: "920mg",
        },
        tips: [
            "Don't press down on burgers while cooking - keeps them juicy",
            "Make indent in center to prevent burger from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and flavor",
        ],
    },
    {
        mealName: "Mediterranean Quinoa Bowl",
        mealDescription:
            "Healthy bowl with quinoa, vegetables, and tahini dressing",
        mealImage:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
        prepTime: "20 min",
        cookTime: "35 min",
        totalTime: 55,
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        ratingsAverage: 4.5,
        ratingsQuantity: 156,
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing",
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
        ],
        nutrition: {
            calories: "480 kcal",
            protein: "18g",
            carbs: "58g",
            fat: "20g",
            fiber: "10g",
            sodium: "540mg",
        },
        tips: [
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein",
        ],
    },
    {
        mealName: "Chicken Tikka Masala",
        mealDescription: "Rich and creamy Indian curry with tender chicken pieces",
        mealImage:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
        prepTime: "20 min",
        cookTime: "30 min",
        totalTime: 50,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        ratingsAverage: 4.7,
        ratingsQuantity: 389,
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons ginger, grated",
            "400g canned tomatoes",
            "Fresh cilantro for garnish",
        ],
        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "38g",
            carbs: "24g",
            fat: "22g",
            fiber: "4g",
            sodium: "760mg",
        },
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice",
        ],
    },
    {
        mealName: "Margherita Pizza",
        mealDescription: "Classic Italian pizza with fresh mozzarella and basil",
        mealImage:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        prepTime: "90 min",
        cookTime: "12 min",
        totalTime: 102,
        servings: "2 people",
        difficulty: "Intermediate",
        category: "Italian",
        ratingsAverage: 4.9,
        ratingsQuantity: 512,
        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Parmesan cheese for topping",
        ],
        instructions: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature (usually 250°C/480°F).",
            "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
            "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
        ],
        nutrition: {
            calories: "580 kcal",
            protein: "24g",
            carbs: "68g",
            fat: "22g",
            fiber: "4g",
            sodium: "920mg",
        },
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture",
        ],
    },
    {
        mealName: "Beef Tacos",
        mealDescription: "Flavorful Mexican tacos with seasoned ground beef",
        mealImage:
            "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ratingsAverage: 4.6,
        ratingsQuantity: 278,
        ingredients: [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa",
        ],
        instructions: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened, about 5 minutes.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
        ],
        nutrition: {
            calories: "420 kcal",
            protein: "26g",
            carbs: "32g",
            fat: "20g",
            fiber: "4g",
            sodium: "780mg",
        },
        tips: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option",
        ],
    },
    {
        mealName: "Caesar Salad",
        mealDescription: "Classic salad with crispy romaine and creamy dressing",
        mealImage:
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "0 min",
        totalTime: 15,
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        ratingsAverage: 4.4,
        ratingsQuantity: 198,
        ingredients: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese, shaved",
            "1 cup croutons",
            "2 anchovy fillets (optional)",
            "Lemon wedges",
            "Black pepper",
        ],
        instructions: [
            "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper.",
        ],
        nutrition: {
            calories: "320 kcal",
            protein: "12g",
            carbs: "18g",
            fat: "22g",
            fiber: "3g",
            sodium: "680mg",
        },
        tips: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve",
        ],
    },
    {
        mealName: "Pad Thai",
        mealDescription: "Popular Thai stir-fried noodles with shrimp and peanuts",
        mealImage:
            "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
        prepTime: "20 min",
        cookTime: "15 min",
        totalTime: 35,
        servings: "2 people",
        difficulty: "Intermediate",
        category: "Asian",
        ratingsAverage: 4.8,
        ratingsQuantity: 445,
        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "Lime wedges and cilantro",
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro.",
        ],
        nutrition: {
            calories: "540 kcal",
            protein: "32g",
            carbs: "62g",
            fat: "16g",
            fiber: "4g",
            sodium: "1120mg",
        },
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook",
        ],
    },
    {
        mealName: "French Onion Soup",
        mealDescription:
            "Rich beef broth with caramelized onions and melted cheese",
        mealImage:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "60 min",
        totalTime: 75,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Mediterranean",
        ratingsAverage: 4.7,
        ratingsQuantity: 267,
        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated",
        ],
        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg",
        },
        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning",
        ],
    },
    {
        mealName: "Chicken Stir-Fry",
        mealDescription: "Quick and healthy stir-fry with colorful vegetables",
        mealImage:
            "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "15 min",
        totalTime: 30,
        servings: "4 people",
        difficulty: "Easy",
        category: "Asian",
        ratingsAverage: 4.5,
        ratingsQuantity: 324,
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated",
        ],
        instructions: [
            "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
            "Serve immediately over steamed rice or noodles.",
        ],
        nutrition: {
            calories: "320 kcal",
            protein: "34g",
            carbs: "18g",
            fat: "12g",
            fiber: "5g",
            sodium: "840mg",
        },
        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch",
        ],
    },
    {
        mealName: "Lasagna Bolognese",
        mealDescription: "Layered Italian pasta with rich meat sauce and béchamel",
        mealImage:
            "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
        prepTime: "30 min",
        cookTime: "90 min",
        totalTime: 120,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Italian",
        ratingsAverage: 4.9,
        ratingsQuantity: 478,
        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil",
        ],
        instructions: [
            "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
            "Cook lasagna sheets according to package directions. Drain and set aside.",
            "Preheat oven to 180°C (350°F).",
            "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
            "Top final layer with béchamel, mozzarella, and parmesan cheese.",
            "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
        ],
        nutrition: {
            calories: "680 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "28g",
            fiber: "6g",
            sodium: "920mg",
        },
        tips: [
            "Make bolognese sauce a day ahead for better flavor",
            "Don't skip the resting time after baking",
            "Use fresh pasta sheets for best texture",
            "Freeze leftovers in individual portions",
        ],
    },
    {
        mealName: "Shrimp Scampi",
        mealDescription: "Garlicky shrimp in white wine butter sauce",
        mealImage:
            "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
        prepTime: "10 min",
        cookTime: "15 min",
        totalTime: 25,
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        ratingsAverage: 4.8,
        ratingsQuantity: 356,
        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes",
        ],
        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately.",
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "36g",
            carbs: "54g",
            fat: "18g",
            fiber: "3g",
            sodium: "620mg",
        },
        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste",
        ],
    },
    {
        mealName: "Vegetable Curry",
        mealDescription: "Hearty vegetarian curry with coconut milk",
        mealImage:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
        prepTime: "20 min",
        cookTime: "30 min",
        totalTime: 50,
        servings: "4 people",
        difficulty: "Easy",
        category: "Asian",
        ratingsAverage: 4.6,
        ratingsQuantity: 289,
        ingredients: [
            "2 potatoes, cubed",
            "1 cauliflower, florets",
            "2 carrots, sliced",
            "1 can chickpeas",
            "400ml coconut milk",
            "3 tablespoons curry powder",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Fresh spinach",
        ],
        instructions: [
            "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
            "Add potatoes and carrots, cook for 5 minutes.",
            "Pour in coconut milk and 1 cup water. Bring to simmer.",
            "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
            "Stir in fresh spinach and cook until wilted.",
            "Serve hot over basmati rice or with naan bread.",
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "14g",
            carbs: "48g",
            fat: "16g",
            fiber: "12g",
            sodium: "480mg",
        },
        tips: [
            "Add vegetables in order of cooking time needed",
            "Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired",
        ],
    },
    {
        mealName: "BBQ Pulled Pork",
        mealDescription: "Slow-cooked tender pork in smoky barbecue sauce",
        mealImage:
            "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "240 min",
        totalTime: 255,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ratingsAverage: 4.7,
        ratingsQuantity: 412,
        ingredients: [
            "1kg pork shoulder",
            "1 cup BBQ sauce",
            "1/2 cup apple cider vinegar",
            "2 tablespoons brown sugar",
            "1 tablespoon paprika",
            "1 tablespoon garlic powder",
            "Burger buns",
            "Coleslaw for serving",
        ],
        instructions: [
            "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
            "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
            "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
            "Remove pork and shred with two forks. Discard excess fat.",
            "Return shredded pork to slow cooker, mix with BBQ sauce.",
            "Serve on toasted buns with coleslaw on top.",
        ],
        nutrition: {
            calories: "620 kcal",
            protein: "48g",
            carbs: "52g",
            fat: "22g",
            fiber: "3g",
            sodium: "1180mg",
        },
        tips: [
            "Use pork shoulder for best results - it stays moist",
            "Let pork rest before shredding for juicier meat",
            "Make your own BBQ sauce for better flavor",
            "Leftovers freeze well for up to 3 months",
        ],
    },
    {
        mealName: "Greek Moussaka",
        mealDescription: "Traditional layered eggplant casserole with lamb",
        mealImage:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
        prepTime: "30 min",
        cookTime: "60 min",
        totalTime: 90,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Mediterranean",
        ratingsAverage: 4.8,
        ratingsQuantity: 234,
        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil",
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
        ],
        nutrition: {
            calories: "580 kcal",
            protein: "36g",
            carbs: "32g",
            fat: "32g",
            fiber: "8g",
            sodium: "820mg",
        },
        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving",
        ],
    },
    {
        mealName: "Teriyaki Chicken Bowl",
        mealDescription: "Sweet and savory chicken over rice with vegetables",
        mealImage:
            "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "2 people",
        difficulty: "Easy",
        category: "Asian",
        ratingsAverage: 4.7,
        ratingsQuantity: 367,
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil",
        ],
        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot.",
        ],
        nutrition: {
            calories: "540 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "14g",
            fiber: "4g",
            sodium: "1240mg",
        },
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead",
        ],
    },
    {
        mealName: "Caprese Sandwich",
        mealDescription:
            "Fresh Italian sandwich with mozzarella, tomato, and basil",
        mealImage:
            "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
        prepTime: "10 min",
        cookTime: "5 min",
        totalTime: 15,
        servings: "2 people",
        difficulty: "Easy",
        category: "Italian",
        ratingsAverage: 4.5,
        ratingsQuantity: 189,
        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella, sliced",
            "2 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tablespoons pesto",
            "2 tablespoons balsamic glaze",
            "Olive oil",
            "Salt and pepper",
        ],
        instructions: [
            "Slice ciabatta bread in half horizontally.",
            "Toast bread lightly until just crispy.",
            "Spread pesto on both sides of bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
            "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
            "Close sandwich, cut in half, and serve immediately.",
        ],
        nutrition: {
            calories: "480 kcal",
            protein: "22g",
            carbs: "48g",
            fat: "22g",
            fiber: "3g",
            sodium: "680mg",
        },
        tips: [
            "Use ripe, in-season tomatoes for best flavor",
            "Buffalo mozzarella is traditional but harder to slice",
            "Toast bread lightly - not too crispy",
            "Add prosciutto or salami for a heartier sandwich",
        ],
    },
];
var x = Math.floor(Math.random() * meals.length)

function random() {
    x = Math.floor(Math.random() * meals.length)
    display(x)
}

function display(i) {
    var ingredientsD = "";
    for (var j = 0; j < meals[i].ingredients.length; j++) {
        ingredientsD += `<p class="mb-2"><i class="fa-solid fa-check text-orange me-2"></i> ${meals[i].ingredients[j]}</p>`;
    }

    var instructionsD = "";
    for (var k = 0; k < meals[i].instructions.length; k++) {
        instructionsD += `<p class="mb-3"><strong>Step ${k + 1}:</strong> ${meals[i].instructions[k]}</p>`;
    }

    var tipsD = "";
    for (var l = 0; l < meals[i].tips.length; l++) {
        tipsD += `<div class="firstTips p-3 mb-2">
                        <span class="badge mb-2">Tip</span>
                        <p class="m-0">${meals[i].tips[l]}</p>
                    </div>`;
    }

    var cartona = `
        <div class="img col-lg-4 position-relative">
            <span class="badge fw-semibold bg-white position-absolute p-3 z-1 text-black fs-6 rounded-pill">
                <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> 
                ${meals[i].ratingsAverage} <span class="text-secondary">(${meals[i].ratingsQuantity} reviews)</span>
            </span>
            <img src="${meals[i].mealImage}" class="w-100 h-100 object-fit-cover" alt="${meals[i].mealName}">
            <div class="d-flex bg-white p-3 rounded-4 position-absolute shadow-sm" style="bottom: 20px; left: 17px; right: 17px;">
                <div class="text-center flex-fill">
                    <i class="fa-solid fa-clock fs-4 text-warning"></i>
                    <p class="m-0 text-secondary small">Prep</p>
                    <p class="fw-bold m-0 small">${meals[i].prepTime}</p>
                </div>
                <div class="text-center flex-fill border-start border-end">
                    <i class="fa-solid fa-fire-burner fs-4 text-danger"></i>
                    <p class="m-0 text-secondary small">Cook</p>
                    <p class="fw-bold m-0 small">${meals[i].cookTime}</p>
                </div>
                <div class="text-center flex-fill">
                    <i class="fa-solid fa-users fs-4 text-primary"></i>
                    <p class="m-0 text-secondary small">Servings</p>
                    <p class="fw-bold m-0 small">${meals[i].servings}</p>
                </div>
            </div>
        </div>

        <div class="col-lg-8 bg-white p-4">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <span class="bg-green p-2 px-3 me-2 rounded-pill">${meals[i].difficulty}</span>
                    <span class="bg-blue p-2 px-3 rounded-pill">${meals[i].category}</span>
                    <h3 class="display-5 mt-3 fw-bold">${meals[i].mealName}</h3>
                    <p class="text-secondary fs-5">${meals[i].mealDescription}</p>
                </div>
                <div class="d-flex">
                    <i class="fa-solid fa-bookmark p-3 bg-orange rounded-circle text-white cursor-pointer"></i>
                </div>
            </div>

            <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#ingredients-tab"><i class="fa-solid fa-list-check"></i> Ingredients</button></li>
                <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#instructions-tab"><i class="fa-solid fa-book-open"></i> Instructions</button></li>
                <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#nutrition-tab"><i class="fa-solid fa-chart-pie"></i> Nutrition</button></li>
                <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tips-tab"><i class="fa-solid fa-lightbulb"></i> Chef's Tips</button></li>
            </ul>

            <div class="tab-content p-3">
                <div class="tab-pane fade show active" id="ingredients-tab">
                    <div class="bg-orange2 rounded-4 p-3 mt-3">${ingredientsD}</div>
                </div>
                <div class="tab-pane fade" id="instructions-tab">
                    <div class="bg-orange2 rounded-4 p-3 mt-3">${instructionsD}</div>
                </div>
                <div class="tab-pane fade" id="nutrition-tab">
                    <div class="row g-3 mt-2">
                        <div class="col-md-6"><div class="d-flex p-3 bg-light rounded justify-content-between"><span>Calories</span><b>${meals[i].nutrition.calories}</b></div></div>
                        <div class="col-md-6"><div class="d-flex p-3 bg-light rounded justify-content-between"><span>Protein</span><b>${meals[i].nutrition.protein}</b></div></div>
                        <div class="col-md-6"><div class="d-flex p-3 bg-light rounded justify-content-between"><span>Carbs</span><b>${meals[i].nutrition.carbs}</b></div></div>
                        <div class="col-md-6"><div class="d-flex p-3 bg-light rounded justify-content-between"><span>Fat</span><b>${meals[i].nutrition.fat}</b></div></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tips-tab">
                    <div class="mt-3">${tipsD}</div>
                </div>
            </div>

            <button onclick="random()" class="btn btn-danger btn-lg mt-4 ">
                <i class="fa-solid fa-rotate me-2"></i> Try Another Recipe
            </button>
        </div>`;

    document.getElementById("rowData").innerHTML = cartona;
}

display(x)

