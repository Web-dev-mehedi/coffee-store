import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Main = () => {
const data = useLoaderData()
const [coffees , setCoffees] = useState(data) || [];

// 
    return (
        <div className="container w-11/12 mx-auto py-20">
            <Link to="/addCoffee"><h1 className="text-center text-2xl font-bold capitalize btn mb-10">add coffee</h1></Link> 
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {
             coffees.map( item =>(
                <CoffeeCard key={item._id} coffee= {item} setCoffees={setCoffees} coffees={coffees} />
             ))   
            }
           </div>
        </div>
    );
};

export default Main;