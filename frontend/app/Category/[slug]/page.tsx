"use client";
import React from "react";
import Meal from "./Meal";

interface IMeal {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}

async function getMeal(type: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
  );
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data.meals;
}

export default async function page({ params }: { params: { slug: string } }) {
  const mealData: IMeal[] = await getMeal(params.slug);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* main  heading */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            {params.slug} Meals
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify subway tile poke farm-to-table. Franzen you probably havent
            heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {mealData?.map((meal) => (
            <Meal key={meal.idMeal} {...meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
