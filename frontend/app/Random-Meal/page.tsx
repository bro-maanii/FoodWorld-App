"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

interface IMeal {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}

function NameGenerator() {
  const [name, setName] = useState<IMeal>({} as IMeal);

  // Declare fetchName function here
  const fetchName = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data: IMeal = response.data.meals[0];
      setName(data); // Assuming the API response structure
    } catch (error) {
      console.error(error);
      setName({} as IMeal);
    }
  };

  useEffect(() => {
    fetchName(); // Call fetchName within useEffect
  }, []);

  const handleClick = () => {
    fetchName();
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <Image
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-3 object-cover object-center rounded"
        alt="hero"
        width={600}
        height={700}
        src={name.strMealThumb}
      />
      <div className="flex flex-col text-center w-full">
        <h1 className="text-xl font-medium title-font mb-14 text-gray-900">
          {name.strMeal}
        </h1>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Generate Random Meal
      </button>
    </div>
  );
}

export default NameGenerator;
