import React from "react";

export default function Notification(props: { showNotification: boolean }) {
  if (!props.showNotification) return null; // Early return if not visible
  return (
    <div className="notification text-xs sm:text-base fixed right-60 sm:right-80 top-20 w-full text-white md:w-auto bg-blue-500 shadow-md rounded-lg z-50 transition duration-300 ease-in-out transform translate-x-full ${showNotification ? 'translate-x-0' : ''}">
      <div className="p-4">
        <h1>Item Added to Favourites</h1>
        <p>You can now view it in your Favourites</p>
      </div>
    </div>
  );
}
