import Link from 'next/link';
import React from 'react'

interface IProps {
    title: string;
    description: string;
    image: string;
    // className?: string;
}

const SwiperContent = ({ title, description, image/* , className */ }: IProps) => {

    const categories: IChoice[] = [
        {
            "id": 1,
            "name": "Particular",
            "icon": "person",
            "description": "Projetado para empresas de todos os portes, oferecendo proteção para ativos empresariais, como equipamentos, instalações e funcionários. Garantir a segurança da sua empresa é essencial para o sucesso e continuidade do seu negócio."
        },
        {
            "id": 2,
            "name": "Empresarial",
            "icon": "building",
            "description": "Ideal para indivíduos que buscam proteger seus bens pessoais, como veículos, imóveis, ou contratar um seguro de vida. Escolha essa opção para garantir sua segurança e tranquilidade no dia a dia."
        }
    ];

    return (
        <div className="h-full w-full flex flex-col items-center justify-center" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
        }}>
            <div className="h-full w-full flex flex-col justify-center items-center gap-y-3 px-6 text-center bg-black/50 p-8">
                <h2 className="text-[#d18f46] font-bold text-3xl ">
                    {title}
                </h2>
                <p className="text-white">
                    {description}
                </p>

                <div className="flex *:flex *:items-center *:gap-x-1 gap-6 items-center *:bg-[#d18f46] *:p-3 *:rounded-2xl font-bold text-[#fff]">
                    {
                        categories.map((category) => (
                            <Link
                                href={`/simulation?category_id=${category.id}`} key={category.id}>
                                <i className={`text-2xl bi bi-${category.icon}`}></i>
                                {category.name}
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
export default SwiperContent