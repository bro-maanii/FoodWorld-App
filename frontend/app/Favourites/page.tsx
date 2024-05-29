"use client";
import { Button } from "@/components/ui/button";
import { removefav } from "@/lib/features/AddtofavSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const favData = useAppSelector((state) => state.fav);
  const [domLoaded, setDomLoaded] = useState(false);
  const dispatch = useAppDispatch();

  const handleRemovefav = (id: number, title: string, strMealThumb: string) => {
    // Dispatch action to remove from fav
    dispatch(
      removefav({ idMeal: id, strMeal: title, strMealThumb: strMealThumb })
    );
  };

  // UI Doesn't match errror solve
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center py-4">
        Favourites
      </h1>
      <div className="flex justify-center align-middle">
        {favData.length !== 0 && domLoaded ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center align-middle px-4">
            {favData.map((item) => (
              <div
                key={item.idMeal}
                className="flex flex-col justify-center align-middle sm:h-96"
              >
                <Image
                  src={item.strMealThumb}
                  alt=""
                  width={300}
                  height={300}
                />
                <h1 className="sm:text-sm text-xs">{item.strMeal}</h1>
                <Button
                  onClick={() =>
                    handleRemovefav(
                      item.idMeal,
                      item.strMeal,
                      item.strMealThumb
                    )
                  }
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-3xl font-bold text-center ">No Favourites</p>
        )}
      </div>
    </>
  );
}
