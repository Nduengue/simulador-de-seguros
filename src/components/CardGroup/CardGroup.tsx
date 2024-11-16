// Mark the component as a client component
"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import { API_LOCATION } from "@/util/api";
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from "@/app/loading";

interface IProps {
  route: string;
  link?: string;
}

const CardGroup = ({ route, link }: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [options, setOptions] = useState<IChoice[]>([]);

  const category_id = searchParams.get("category_id") ? Number(searchParams.get("category_id")) : undefined;
  const insurance_id = searchParams.get("insurance_id") ? Number(searchParams.get("insurance_id")) : undefined;
  const insurance_type_id = searchParams.get("insurance_type_id") ? Number(searchParams.get("insurance_type_id")) : undefined;
  const policy_type_id = searchParams.get("policy_type_id") ? Number(searchParams.get("policy_type_id")) : undefined;
  useEffect(() => {
    // Fetch data from API
    fetch(`${API_LOCATION}/${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category_id: category_id,
        insurance_id: insurance_id,
        insurance_type_id: insurance_type_id,
        policy_type_id: policy_type_id,
      }),
      next: { revalidate: 3600 },
    })
      .then((data) => data.json())
      .then((data) => {
        setOptions(data);
        setLoading(false);

        if (data.length === 1 && route === "insurance_type") {
          const routeParam = searchParams?.get("route")
          router.replace(`${link}?category_id=${category_id}&insurance_id=${insurance_id}&route=${routeParam}&insurance_type_id=${data[0].id}`);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [route, router, category_id, insurance_id, insurance_type_id, policy_type_id, link, searchParams]);

  const handleCardClick = (option: IChoice) => {
    if (route === "insurance") {
      router.push(`${link}?category_id=${category_id}&insurance_id=${option.id}`);
      if (option.route) {
        const routeParam = encodeURIComponent(option.route)
        router.push(`${link}?category_id=${category_id}&insurance_id=${option.id}&route=${routeParam}`);
      }
    } else if (route === "insurance_type") {
      const routeParam = encodeURIComponent(searchParams.get("route") || "")
      router.push(`${link}?category_id=${category_id}&insurance_id=${insurance_id}&route=${routeParam}&insurance_type_id=${option.id}`);
    } else if (route === "policy_type") {
      const routeParam = decodeURIComponent(searchParams.get("route") || "")
      router.push(`${routeParam}?category_id=${category_id}&insurance_id=${insurance_id}&insurance_type_id=${insurance_type_id}&policy_type_id=${option.id}`);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex *:flex *:items-center *:gap-x-1 gap-6 items-center">
          <Loading />
        </div>
      ) : options.length > 0 ? (
        options.map((option, index) => (
          <Card
            onClick={() => handleCardClick(option)}
            key={index}
            option={option}
            index={index}
          />
        ))
      ) : (
        <p className="bg-red-400 text-2xl">
          <strong>Nota:</strong> Não há seguros disponíveis para esta categoria.
        </p>
      )}
    </>
  );
};

export default CardGroup;
