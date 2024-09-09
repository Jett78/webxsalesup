import React from 'react'

const VisionMisision = () => {
  return (
   <main className='w-9/12 mx-auto my-28'>
    <div className='grid grid-cols-2 gap-10'>
        {visionmission.map((item,index) => (
            <div key={index} className='bg-gray-100 rounded-2xl p-6'>
                <h3 className='text-tertiary font-semibold text-xl'>{item.title}</h3>
                <h2 className='font-bold text-4xl w-[60%] py-4'>{item.name}</h2>
                <p>{item.desc}</p>
            </div>
        ))}
    </div>
   </main>
  )
}

export default VisionMisision

const visionmission = [
    {
        title:"Our Vision",
        name:"Empowering Lives Through Education",
        desc:"  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosamnisi eaque quasi obcaecati suscipit eos, impedit provident quo hicvoluptas ullam, asperiores, nam ab molestias rerum. Veniam aut quinecessitatibus!",
    },
    {
        title:"Our Mission",
        name:"Learning for All,Everywhere",
        desc:"  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosamnisi eaque quasi obcaecati suscipit eos, impedit provident quo hicvoluptas ullam, asperiores, nam ab molestias rerum. Veniam aut quinecessitatibus!",
    },
]