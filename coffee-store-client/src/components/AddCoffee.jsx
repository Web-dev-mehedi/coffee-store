


const AddCoffee = () => {

const handleAddCoffee =(e)=>{
  e.preventDefault();
   const form = e.target;
   const name = form.name.value;
   const quantity = form.quantity.value;
   const chef = form.chef.value;
   const supplier = form.supplier.value;
   const taste = form.taste.value;
   const category = form.category.value;
   const  details = form.details.value;
   const photoUrl = form.photoUrl.value;

   const coffeeData = { name , quantity , chef, supplier, taste, category, details, photoUrl}
   console.log(coffeeData)

   fetch("http://localhost:5000/addCoffee",{
       method: 'POST',
       headers: {
        'content-type' : 'application/json'
       },
       body: JSON.stringify(coffeeData)
   })
   .then(res=> res.json())
   .then( data => {
    console.log(data)
    alert("data added to database")
   })
}



  return (
    <div className="py-20 bg-[#F4F3F0] px-10 md:px-10">
      <h1 className="text-4xl text-center font-bold text-black mb-8">
        Add a coffee
      </h1>

      <div className="container md:w-6/12 mx-auto">
        <form  onSubmit={handleAddCoffee}>
          <div className="flex justify-start items-start gap-7 flex-wrap">
            <label className="form-control w-full md:w-5/12 mx-auto">
              {" "}
              Name
              <input
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
                type="text"
                name="photoUrl"
                placeholder="Enter photo Url"
                className="input input-bordered input-accent w-full "
              />
            </label>
          </div>

          <button className="btn btn-info w-full mx-auto mt-10 text-white"> Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
