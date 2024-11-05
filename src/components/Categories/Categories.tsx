// Mark the component as a client component
"use client";

import Link from 'next/link'
import React, { useEffect } from 'react'
import Spinner from '../Spinner/Spinner';
import { API_LOCATION } from '@/util/api';

interface ICategory {
    id: number;
    name: string;
    icon: string;
}

const Categories = () => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const [categories, setCategories] = React.useState<ICategory[]>([]);

    useEffect(() => {
        // fetch data from API
        fetch(`${API_LOCATION}/category`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        })
            .then(data => data.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error)
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex *:flex *:items-center *:gap-x-1 gap-6 items-center  *:bg-[#d18f46] *:p-3 *:rounded-2xl font-bold text-[#fff]">
            {loading ?
                <div className='flex *:flex *:items-center *:gap-x-1 gap-6 items-center'>
                    <Spinner />
                    <p>Loading...</p>
                </div>
                :
                categories.map((category) => (
                    <Link
                        onClick={() => {
                            localStorage.setItem('category_id', category.id.toString());
                        }}
                        href={"/simulation"} key={category.id}>
                        <i className={`text-2xl bi bi-${category.icon}`}></i>
                        {category.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Categories