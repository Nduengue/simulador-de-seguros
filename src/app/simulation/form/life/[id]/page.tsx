interface ILife {
    params: { id: string };
}

export default function Life({params}:ILife) {
    return (
        <div className="text-gray-800 ">
            {params.id}

           ------Life  eeeeeeeeeeeeeeeeeeeeeee
        </div>
    );
}