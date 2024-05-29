"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addfav, IFavorite } from "@/lib/features/AddtofavSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import Notification from "@/app/UI-components/Notification";

export default function Meal(props: {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    console.log(isFavorite);
    setShowNotification(true); // Show notification
    setTimeout(() => setShowNotification(false), 5000);
    dispatch(
      addfav({
        idMeal: props.idMeal,
        strMeal: props.strMeal,
        strMealThumb: props.strMealThumb,
      })
    );
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            width={200}
            height={200}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={props.strMealThumb}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {props.strMeal}
            </h2>
            <div>
              <Button
                onClick={handleToggleFavorite}
                className="mt-4 bg-blue-500"
              >
                Add to Favourites
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Notification showNotification={showNotification} />
    </>
  );
}
