/**
 * Nutrition Cache Service
 * Provides instant nutrition data for common foods using USDA FoodData Central data
 */

import { AIAnalysisResult } from '@/types';

/**
 * Nutrition data for common foods
 * Data sourced from USDA FoodData Central
 * Values are per standard serving size
 */
export const nutritionCache: Record<string, Omit<AIAnalysisResult, 'confidence' | 'sources'>> = {
  // Fruits
  'apple': {
    calories: 95,
    protein: 0,
    carbs: 25,
    fat: 0,
    explanation: 'Medium apple (182g). Based on USDA standard reference data.',
  },
  'banana': {
    calories: 105,
    protein: 1,
    carbs: 27,
    fat: 0,
    explanation: 'Medium banana (118g). Based on USDA standard reference data.',
  },
  'orange': {
    calories: 62,
    protein: 1,
    carbs: 15,
    fat: 0,
    explanation: 'Medium orange (131g). Based on USDA standard reference data.',
  },
  'grapes': {
    calories: 104,
    protein: 1,
    carbs: 27,
    fat: 0,
    explanation: '1 cup of grapes (151g). Based on USDA standard reference data.',
  },
  'strawberries': {
    calories: 49,
    protein: 1,
    carbs: 12,
    fat: 0,
    explanation: '1 cup of strawberries (152g). Based on USDA standard reference data.',
  },
  'watermelon': {
    calories: 46,
    protein: 1,
    carbs: 11,
    fat: 0,
    explanation: '1 cup diced watermelon (152g). Based on USDA standard reference data.',
  },

  // Fast Food / Common Meals
  'burger': {
    calories: 540,
    protein: 25,
    carbs: 40,
    fat: 25,
    explanation: 'Standard fast food hamburger with cheese (150g). Includes bun, beef patty, cheese, lettuce, tomato.',
  },
  'cheeseburger': {
    calories: 563,
    protein: 28,
    carbs: 38,
    fat: 33,
    explanation: 'Standard cheeseburger (155g). Based on USDA fast food composite data.',
  },
  'pizza': {
    calories: 285,
    protein: 12,
    carbs: 36,
    fat: 10,
    explanation: 'One slice of cheese pizza (107g). Based on typical pizza chain data.',
  },
  'fries': {
    calories: 365,
    protein: 4,
    carbs: 48,
    fat: 17,
    explanation: 'Medium french fries (117g). Based on USDA fast food data.',
  },
  'french fries': {
    calories: 365,
    protein: 4,
    carbs: 48,
    fat: 17,
    explanation: 'Medium french fries (117g). Based on USDA fast food data.',
  },
  'hot dog': {
    calories: 290,
    protein: 10,
    carbs: 24,
    fat: 17,
    explanation: 'Hot dog with bun (98g). Based on USDA standard reference.',
  },
  'sandwich': {
    calories: 350,
    protein: 15,
    carbs: 42,
    fat: 12,
    explanation: 'Basic deli sandwich (150g). Turkey/ham with cheese, lettuce, tomato on bread.',
  },
  'taco': {
    calories: 210,
    protein: 9,
    carbs: 13,
    fat: 13,
    explanation: 'One crunchy beef taco (78g). Based on USDA fast food data.',
  },

  // Protein Foods
  'chicken breast': {
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 4,
    explanation: '100g cooked chicken breast (skinless). Based on USDA standard reference.',
  },
  'salmon': {
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 12,
    explanation: '100g cooked Atlantic salmon. Based on USDA standard reference.',
  },
  'steak': {
    calories: 271,
    protein: 26,
    carbs: 0,
    fat: 18,
    explanation: '100g beef steak, cooked. Based on USDA standard reference.',
  },
  'eggs': {
    calories: 155,
    protein: 13,
    carbs: 1,
    fat: 11,
    explanation: 'Two large eggs (100g). Based on USDA standard reference.',
  },
  'egg': {
    calories: 78,
    protein: 6,
    carbs: 1,
    fat: 5,
    explanation: 'One large egg (50g). Based on USDA standard reference.',
  },

  // Grains & Carbs
  'rice': {
    calories: 206,
    protein: 4,
    carbs: 45,
    fat: 2,
    explanation: '1 cup cooked white rice (158g). Based on USDA standard reference.',
  },
  'pasta': {
    calories: 220,
    protein: 8,
    carbs: 43,
    fat: 1,
    explanation: '1 cup cooked pasta (140g). Based on USDA standard reference.',
  },
  'bread': {
    calories: 79,
    protein: 4,
    carbs: 15,
    fat: 1,
    explanation: 'One slice of whole wheat bread (28g). Based on USDA standard reference.',
  },
  'toast': {
    calories: 79,
    protein: 4,
    carbs: 15,
    fat: 1,
    explanation: 'One slice of toasted whole wheat bread (28g). Based on USDA standard reference.',
  },
  'oatmeal': {
    calories: 158,
    protein: 6,
    carbs: 28,
    fat: 3,
    explanation: '1 cup cooked oatmeal (234g). Based on USDA standard reference.',
  },

  // Vegetables
  'broccoli': {
    calories: 55,
    protein: 4,
    carbs: 11,
    fat: 1,
    explanation: '1 cup chopped broccoli (156g). Based on USDA standard reference.',
  },
  'carrots': {
    calories: 52,
    protein: 1,
    carbs: 12,
    fat: 0,
    explanation: '1 cup chopped carrots (128g). Based on USDA standard reference.',
  },
  'salad': {
    calories: 33,
    protein: 3,
    carbs: 6,
    fat: 0,
    explanation: '1 cup mixed green salad (55g), no dressing. Based on USDA standard reference.',
  },
  'lettuce': {
    calories: 5,
    protein: 0,
    carbs: 1,
    fat: 0,
    explanation: '1 cup shredded lettuce (47g). Based on USDA standard reference.',
  },

  // Dairy
  'milk': {
    calories: 149,
    protein: 8,
    carbs: 12,
    fat: 8,
    explanation: '1 cup whole milk (244g). Based on USDA standard reference.',
  },
  'yogurt': {
    calories: 149,
    protein: 8,
    carbs: 11,
    fat: 8,
    explanation: '1 cup plain whole milk yogurt (245g). Based on USDA standard reference.',
  },
  'cheese': {
    calories: 114,
    protein: 7,
    carbs: 1,
    fat: 9,
    explanation: '1 oz cheddar cheese (28g). Based on USDA standard reference.',
  },

  // Beverages
  'water': {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    explanation: 'Water contains no calories. Hydration is important for health!',
  },
  'coffee': {
    calories: 2,
    protein: 0,
    carbs: 0,
    fat: 0,
    explanation: 'Black coffee (240ml). Add calories for milk/sugar.',
  },
  'tea': {
    calories: 2,
    protein: 0,
    carbs: 0,
    fat: 0,
    explanation: 'Plain tea (240ml). Add calories for milk/sugar.',
  },
  'soda': {
    calories: 140,
    protein: 0,
    carbs: 39,
    fat: 0,
    explanation: '12 oz can of cola (355ml). Based on typical soda nutrition data.',
  },
  'juice': {
    calories: 112,
    protein: 2,
    carbs: 26,
    fat: 0,
    explanation: '1 cup orange juice (248g). Based on USDA standard reference.',
  },

  // Snacks
  'chips': {
    calories: 152,
    protein: 2,
    carbs: 15,
    fat: 10,
    explanation: '1 oz potato chips (28g). Based on USDA standard reference.',
  },
  'popcorn': {
    calories: 31,
    protein: 1,
    carbs: 6,
    fat: 0,
    explanation: '1 cup air-popped popcorn (8g). Based on USDA standard reference.',
  },
  'nuts': {
    calories: 165,
    protein: 6,
    carbs: 6,
    fat: 14,
    explanation: '1 oz mixed nuts (28g). Based on USDA standard reference.',
  },
  'almonds': {
    calories: 164,
    protein: 6,
    carbs: 6,
    fat: 14,
    explanation: '1 oz almonds (28g, ~23 almonds). Based on USDA standard reference.',
  },
  'peanuts': {
    calories: 161,
    protein: 7,
    carbs: 5,
    fat: 14,
    explanation: '1 oz peanuts (28g). Based on USDA standard reference.',
  },
  'chocolate': {
    calories: 235,
    protein: 3,
    carbs: 26,
    fat: 13,
    explanation: '1.5 oz milk chocolate bar (43g). Based on USDA standard reference.',
  },
  'cookie': {
    calories: 49,
    protein: 1,
    carbs: 7,
    fat: 2,
    explanation: 'One chocolate chip cookie (12g). Based on USDA standard reference.',
  },
  'ice cream': {
    calories: 207,
    protein: 4,
    carbs: 24,
    fat: 11,
    explanation: '1/2 cup vanilla ice cream (66g). Based on USDA standard reference.',
  },

  // Breakfast Foods
  'cereal': {
    calories: 147,
    protein: 3,
    carbs: 33,
    fat: 1,
    explanation: '1 cup corn flakes (28g) with no milk. Based on USDA standard reference.',
  },
  'pancakes': {
    calories: 227,
    protein: 6,
    carbs: 28,
    fat: 10,
    explanation: 'Two 4-inch pancakes (76g). Based on USDA standard reference.',
  },
  'waffle': {
    calories: 218,
    protein: 6,
    carbs: 25,
    fat: 11,
    explanation: 'One 7-inch waffle (75g). Based on USDA standard reference.',
  },
  'bacon': {
    calories: 43,
    protein: 3,
    carbs: 0,
    fat: 3,
    explanation: 'One slice of cooked bacon (8g). Based on USDA standard reference.',
  },
};

/**
 * Normalize text for cache lookup
 * Handles variations like "Apple" vs "apple", extra spaces, etc.
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space
}

/**
 * Get cached nutrition data for a food item
 * @param mealText The food item text to look up
 * @returns Nutrition data if found in cache, null otherwise
 */
export function getCachedNutrition(mealText: string): AIAnalysisResult | null {
  const normalized = normalizeText(mealText);
  const cached = nutritionCache[normalized];

  if (cached) {
    return {
      ...cached,
      confidence: 0.95,
      sources: ['USDA FoodData Central (Cached)'],
    };
  }

  return null;
}

/**
 * Check if a food item is in the cache
 */
export function isCached(mealText: string): boolean {
  const normalized = normalizeText(mealText);
  return normalized in nutritionCache;
}

/**
 * Get all cached food names
 */
export function getCachedFoodNames(): string[] {
  return Object.keys(nutritionCache);
}
