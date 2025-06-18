"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return text && text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // reset forms which is bad UX
    // throw new Error("Invalid input");

    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  //means clear cache and refetch the data , 2nd argument(page/layout), page is default which means only page should be revalidated and layout means entire laout needs to be revalidated however for enitre app we can use revalidatePath("/")
  revalidatePath("/meal");
  redirect("/meals");
}
