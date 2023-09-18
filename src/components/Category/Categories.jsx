import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { trends } from "../../data/trendingData";
import CategoryIcon from "./CategoryIcon";
// import { categories } from "../../data/categoriesData";
import { camera, phone, computer, headphone, watch, game } from "../../assets";

function Categories() {
  
    // Define an array of category objects with SVGs and names
    const categories = [
     {
       name: 'Camera',
       imageUrl: camera, // Replace with the actual path to your image
       color: 'blue',
     },
     {
       name: 'Phones',
       imageUrl: phone, // Replace with the actual path to your image
       color: 'red',
     },
     {
        name: 'PCs',
        imageUrl: computer, // Replace with the actual path to your image
        color: 'red',
      },
      {
        name: 'Gaming',
        imageUrl: game, // Replace with the actual path to your image
        color: 'red',
      },
     {
       name: 'Music',
       imageUrl: headphone, // Replace with the actual path to your image
       color: 'red',
     },
     {
       name: 'Watch',
       imageUrl: watch, // Replace with the actual path to your image
       color: 'red',
     },
   
     // Add more category objects here
   ];
  return (
    <>
      <section id="latest" class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div className="flex justify-between">
            <h3 className="text-left mb-5 text-2xl font-semibold text-black">
              Browse by Categories
            </h3>            
          </div>
          <div class="flex flex-wrap items-center">
            {categories.map((category, index) => (
              <CategoryIcon
                key={index}
                imageUrl={category.imageUrl}
                categoryName={category.name}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
