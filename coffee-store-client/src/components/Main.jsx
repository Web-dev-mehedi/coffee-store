import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  // const data = useLoaderData()
  const [coffees, setCoffees] = useState([]);
 
  // tanstack query for fetch data and cache data
  const { data } = useQuery({
    queryKey: ["addCoffee"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addCoffee");
       const data = await res.json()
      return data
    },
    onSuccess : (data) =>{
        setCoffees(data)
    }
  });
  console.log(data)
  //
  return (
    <div className="container w-11/12 mx-auto py-20">
      <Link to="/addCoffee">
        <h1 className="text-center text-2xl font-bold capitalize btn mb-10">
          add coffee
        </h1>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.map((item) => (
          <CoffeeCard
            key={item._id}
            coffee={item}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
