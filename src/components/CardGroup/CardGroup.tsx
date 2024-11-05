// Mark the component as a client component
"use client";
import React, { useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import Card from '@/components/Card/Card';
import { API_LOCATION } from '@/util/api';

interface IProps {
    route: string;
    link: string;
}

interface IOption {
    id: number;
    name: string;
    icon: string;
    description?: string;
}

const CardGroup = ({ route, link }: IProps) => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const [options, setOptions] = React.useState<IOption[]>([]);
    const category_id = Number(localStorage.getItem('category_id'))
    const insurance_id = Number(localStorage.getItem('insurance_id'))
    const insurance_type_id = Number(localStorage.getItem('insurance_type_id'))
    const policy_type_id = Number(localStorage.getItem('policy_type_id'))

    useEffect(() => {
        // Fetch data from API
        fetch(`${API_LOCATION}/${route}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category_id: category_id,
                insurance_id: insurance_id,
                insurance_type_id: insurance_type_id,
                policy_type_id: policy_type_id,
            })
        })
            .then(data => data.json())
            .then((data) => {
                setOptions(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error)
                setLoading(false);
            });
    }, [category_id, insurance_id, insurance_type_id, policy_type_id,route]);

    const handleCardClick = (option: IOption) => {
        if (route === 'insurance') {
            localStorage.setItem('insurance_id', option.id.toString());
        } else if (route === 'insurance_type') {
            localStorage.setItem('insurance_type_id', option.id.toString())
        } else if (route === 'policy_type') {
            localStorage.setItem('policy_type_id', option.id.toString())
        }
    }

    return (<>
        {loading ?
            <div className='flex *:flex *:items-center *:gap-x-1 gap-6 items-center'>
                <Spinner />
                <p>Loading...</p>
            </div>
            :
            options.length > 0 ? options.map((option, index) => (
                <Card
                    onClick={() => handleCardClick(option)}
                    key={index}
                    option={option}
                    index={index}
                    link={link} />
            )) : (
                <p className='bg-red-400 text-2xl'>
                    <strong>Nota:</strong> Não há seguros disponíveis para esta categoria.
                </p>
            )
        }
    </>)
}

export default CardGroup