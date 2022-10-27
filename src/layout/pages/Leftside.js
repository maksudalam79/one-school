import { Link, useLoaderData } from 'react-router-dom';




const Leftside = () => {
    const cata=useLoaderData()
    console.log(cata)
    
    
  
    return (
       <div className='pt-6'>
        <h1 className='text-2xl'>Our Courses</h1>
        {
            cata.map(c=><li className='border w-48 mx-auto list-none border-rounded m-2 p-2'>
                <Link to={`/courses/${c.id}`}
            key={c.id}
            >{c.name}
            </Link>
            </li>
            
                
            )
        }
        
       </div>
    );
};

export default Leftside;