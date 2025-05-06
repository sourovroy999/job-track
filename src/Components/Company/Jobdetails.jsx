import React from 'react';

const Jobdetails = ({insideJob, fulljob}) => {
    console.log(fulljob);
    
    console.log(insideJob);
    const{title,jobType, salary} = insideJob;

    const{industry, location, logo, name, website}=fulljob
    
    return (
        <div >
           <div className="card w-96 bg bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <div>
        
    <p> <span className='font-semibold'>Job Type:</span> {jobType}</p>


    </div>
    <p> <span className='font-semibold'>Salary Range:</span> {salary}</p>

    <div className="mt-6">
      {/* <button className="btn btn-info btn-block">Details</button> */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white  btn-info btn-block" onClick={()=>document.getElementById('my_modal_5').showModal()}>Details</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">


    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>


    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>


  </div>
</dialog>

    </div>
  </div>
</div>

        </div>
    );
};

export default Jobdetails;