import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
/*     const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/T-Rajeev30')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
 */
    return (
        <div  className=' flex justify-center text-center m-4 bg-slate-600 text-white p-5 text-3xl gap-6'>
            <div className='text-xl mt-4'>
                GitHub
                {data.name && <p>Name: {data.name}</p>}
                {data.bio && <p>Bio: {data.bio}</p>}
                {data.public_repos !== undefined && <p>Public Repositories: {data.public_repos}</p>}
                {data.html_url && (
                    <p>
                        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-300">
                            Visit Profile
                        </a>
                    </p>
                )}
            </div>
            <img src={data.avatar_url}  alt="" height={100} width={200} />
        </div>
    );
}

export default Github;

export const githubLoader = async () =>{
    const response = await fetch ('https://api.github.com/users/T-Rajeev30')
    return response.json()
}
