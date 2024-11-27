/* eslint-disable react/prop-types */
import { AiFillEye , AiFillEdit , AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({ coffee , setCoffees ,coffees }) => {
  const { name, quantity, chef, photoUrl, _id } = coffee || {};

// 
const handleDelete = (id)=>{
// 
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    // 
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/addCoffee/${id}`,{
           method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
         if(data.deletedCount > 0){
             Swal.fire({
            title: "Deleted!",
            text: "Your coFfee has been deleted.",
            icon: "success"
      });
         
        const remaining = coffees.filter(item => item._id !== id );
        setCoffees(remaining)
    }

        
      })
    }
    console.log('delete comfirm', id)
  });
}


// 
  return (
    <div className="card card-side items-start flex-wrap bg-[#F5F4F1] shadow-xl rounded-lg p-6">
      <figure className="w-48 h-32 mx-auto ">
        <img
          className="rounded-lg object-cover w-full mx-auto"
          src={photoUrl}
          alt="coffee"
        />
      </figure>
      <div className="card-body capitalize">
        <h2 className="card-title">Name : {name}</h2>
        <p>Chef : {chef}</p>
        <p>quantity : {quantity} piece</p>
      </div>

      <div className="flex flex-col gap-2 ">
        <button className="btn bg-[#D2B48C] text-[#ffffff] text-xl"><span><AiFillEye/></span></button>
        <button  className="btn bg-[#3C393B] text-[#ffffff] text-xl"><Link to={`/updateCoffee/${_id}`}><span><AiFillEdit /></span></Link></button>
        <button onClick={()=>handleDelete(_id)} className="btn bg-[#EA4744] text-[#ffffff] text-xl"><span><AiFillDelete /></span></button>
      </div>
    </div>
  );
};

export default CoffeeCard;
