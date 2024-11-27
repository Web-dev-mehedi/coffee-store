import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  //

  const coffee = useLoaderData();
  const {
    name,
    quantity,
    chef,
    supplier,
    taste,
    category,
    details,
    photoUrl,
    _id,
  } = coffee || {};
  console.log(coffee);

  const handleUpdateCoffee = (e) => {
 
    //
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const updateCoffeeData = {
      name,
      quantity,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    //
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!",
      }).then(result=>{
          if(result.isConfirmed){
            fetch(`http://localhost:5000/addCoffee/${_id}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(updateCoffeeData),
              })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                  Swal.fire({
                    title: "Updated!",
                    text: "Your coFfee has been updated.",
                    icon: "success",
                  });
                }
              });
          }
      })
   
  
  };

  return (
    <div className="py-20 bg-[#F4F3F0] px-10 md:px-10">
      <h1 className="text-4xl text-center font-bold text-black mb-8">
        Update {name} coffee
      </h1>

      <div className="container md:w-6/12 mx-auto">
        <form onSubmit={handleUpdateCoffee}>
          <div className="flex justify-start items-start gap-7 flex-wrap">
            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Name
              <input
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input input-bordered input-accent w-full"
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Quantity
              <input
                defaultValue={quantity}
                type="number"
                name="quantity"
                placeholder="Enter Coffee Quantity"
                className="input input-bordered input-accent w-full "
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto ">
              {" "}
              Chef
              <input
                defaultValue={chef}
                type="text"
                name="chef"
                placeholder="Eneter Chef Name"
                className="input input-bordered input-accent w-full "
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Supplier
              <input
                defaultValue={supplier}
                type="text"
                name="supplier"
                placeholder="Enter Supplier Name"
                className="input input-bordered input-accent w-full "
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Taste
              <input
                defaultValue={taste}
                type="text"
                name="taste"
                placeholder="Enter Coffee text"
                className="input input-bordered input-accent w-full "
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto ">
              {" "}
              Category
              <input
                defaultValue={category}
                type="text"
                name="category"
                placeholder="Enter Coffee Category"
                className="input input-bordered input-accent w-full "
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Details
              <input
                defaultValue={details}
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
                className="input input-bordered input-accent w-full "
              />
            </label>

            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Photo
              <input
                defaultValue={photoUrl}
                type="text"
                name="photoUrl"
                placeholder="Enter photo Url"
                className="input input-bordered input-accent w-full "
              />
            </label>
          </div>

          <button className="btn btn-info w-full mx-auto mt-10 text-white">
            {" "}
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
