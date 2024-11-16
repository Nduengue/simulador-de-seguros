"use client";
import { useEffect } from "react";
import Card from "@/components/Card/Card";
import { API_LOCATION } from "@/util/api";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  route: string;
  link?: string;
}

const fetchOptions = async (route: string, body: object) => {
  const response = await fetch(`${API_LOCATION}/${route}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  return response.json();
};

const CardGroup = ({ route, link }: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category_id = searchParams.get("category_id")
    ? Number(searchParams.get("category_id"))
    : undefined;
  const insurance_id = searchParams.get("insurance_id")
    ? Number(searchParams.get("insurance_id"))
    : undefined;
  const insurance_type_id = searchParams.get("insurance_type_id")
    ? Number(searchParams.get("insurance_type_id"))
    : undefined;
  const policy_type_id = searchParams.get("policy_type_id")
    ? Number(searchParams.get("policy_type_id"))
    : undefined;

  // Use React Query for fetching and caching
  const { data: options, isLoading, isError } = useQuery({
    queryKey: ["options", route, category_id, insurance_id, insurance_type_id, policy_type_id],
    queryFn: () =>
      fetchOptions(route, {
        category_id,
        insurance_id,
        insurance_type_id,
        policy_type_id,
      }),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 60, // Keep data in cache for 1 hour
  });

  useEffect(() => {
    if (
      options?.length === 1 &&
      route === "insurance_type" &&
      options[0]?.id
    ) {
      const routeParam = searchParams?.get("route");
      router.replace(
        `${link}?category_id=${category_id}&insurance_id=${insurance_id}&route=${routeParam}&insurance_type_id=${options[0].id}`
      );
    }
  }, [options, route, router, category_id, insurance_id, link, searchParams]);

  const handleCardClick = (option: IChoice) => {
    if (route === "insurance") {
      const routeParam = encodeURIComponent(option.route || "");
      router.push(
        `${link}?category_id=${category_id}&insurance_id=${option.id}&route=${routeParam}`
      );
    } else if (route === "insurance_type") {
      const routeParam = encodeURIComponent(searchParams.get("route") || "");
      router.push(
        `${link}?category_id=${category_id}&insurance_id=${insurance_id}&route=${routeParam}&insurance_type_id=${option.id}`
      );
    } else if (route === "policy_type") {
      const routeParam = decodeURIComponent(searchParams.get("route") || "");
      router.push(
        `${routeParam}?category_id=${category_id}&insurance_id=${insurance_id}&insurance_type_id=${insurance_type_id}&policy_type_id=${option.id}`
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex *:flex *:items-center *:gap-x-1 gap-6 items-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="bg-red-400 text-2xl">
        <strong>Error:</strong> Failed to load data.
      </p>
    );
  }

  return (
    <>
      {options?.length > 0 ? (
        options.map((option: IChoice, index: number) => (
          <Card
            onClick={() => handleCardClick(option)}
            key={index}
            option={option}
            index={index}
          />
        ))
      ) : (
        <p className="bg-red-400 text-2xl">
          <strong>Note:</strong> No available options for this category.
        </p>
      )}
    </>
  );
};
export default CardGroup;
