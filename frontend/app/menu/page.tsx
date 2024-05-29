"use client";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import Link from "next/link";

interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function Page() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  async function getData() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json();

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return data.categories;
  }
  useEffect(() => {
    // UI Doesn't match errror solve
    getData().then((data) => {
      setCategoryData(data);
    });
    setDomLoaded(true);
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold ">Menu</h1>
      </div>
      {domLoaded && categoryData.length === 0 ? (
        <p className="text-3xl text-center text-wrap p-6">No data available</p>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="px-5 py-24 mx-auto ">
            <div className="flex flex-wrap flex-grow -m-4">
              {categoryData.map((category) => (
                <Link
                  className="lg:w-2/6 md:w-1/2 p-4 w-full"
                  key={category.idCategory}
                  href={`/Category/${category.strCategory}`}
                >
                  <Category
                    idCategory={category.idCategory}
                    strCategory={category.strCategory}
                    strCategoryThumb={category.strCategoryThumb}
                    strCategoryDescription={category.strCategoryDescription}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
