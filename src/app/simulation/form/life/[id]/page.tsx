interface ILife {
  params: Promise<{ id: string }>;
}

export default async function Life({ params }: ILife) {
  const { id } = await params;

  return (
    <div className="text-gray-800 ">
      {id}
      ------Life eeeeeeeeeeeeeeeeeeeeeee
    </div>
  );
}
