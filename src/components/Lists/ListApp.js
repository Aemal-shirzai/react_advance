import { useState } from "react";
import DessertsList from "./DessertsList";

const desserts = [
    {
      id: 1,
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      id: 2,
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      id: 3,
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      id: 4,
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
];

const ListApp = () => {
    return (
        <div>
          <h2>List of low calorie desserts:</h2>
          <p>Use of maps, filters and sort.</p>
          <hr />
          <DessertsList data={desserts} />
        </div>
    );
}

export default ListApp;