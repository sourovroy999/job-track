import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const Jobdetails = ({insideJob, fulljob}) => {
    console.log(fulljob);
    
    console.log(insideJob);
    const{title,jobType,jobLocation, salary,description, requirements, } = insideJob;

    const{industry, companyLocation, logo, name, website}=fulljob

    const handleApply=(website)=>{
        window.open(website ,'_blank')
    }
    
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
  <div className="modal-box space-y-4">

<div className='flex gap-3 items-center'>
<img className='w-8 rounded-full' src={logo} alt="" />
<h2 className='font-bold '>{name}</h2>
</div>
<div className="badge text-white badge-success">{industry}</div>


<div className='flex gap-7 justify-between'>
    <div className="flex gap-2 items-center">
    <MdOutlineLocationOn />
    <p>{companyLocation}</p>
    </div>



</div>


<p>Website: <Link to={website}>{website}</Link> </p>

<h2 className="font-bold">Title: {title}</h2>
<div>
        <h1 className=' font-bold'>Description:</h1>
        {description}
    </div>

    <div>
 
        
    <p> <span className='font-semibold'>Job Type:</span> {jobType}</p>
    <p><span className='font-semibold'>jobLocation:</span>  {jobLocation} </p>


    </div>
    <p> <span className='font-semibold'>Salary Range:</span> {salary}</p>

    

    <div>
        <h2 className='font-bold'>Requirements:</h2>
        {requirements}

    </div>

  
  <Link onClick={()=>{handleApply(website)}} className='btn btn-wide btn-success mt-8 flex mx-auto'>Apply</Link>



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