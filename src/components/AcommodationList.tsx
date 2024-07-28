import { useQuery } from "@tanstack/react-query";
import { getAccommodation } from "../api/accommodationApi";

const AcommodationList = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["accommodations"],
    queryFn: getAccommodation,
  });
  const { content } = data?.data.data || { content: [] };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="px-60">
      <ul className="grid grid-cols-4 gap-4">
        {content.map((accommodation: any) => (
          <li
            key={accommodation.id}
            className="flex flex-col rounded-lg shadow-lg"
          >
            <img
              src={accommodation.thumbnail}
              alt={accommodation.name}
              className="rounded-lg "
            />
            <div className="flex flex-col gap-2 p-3">
              <div className="text-xl font-bold text-red-400">
                <span>{accommodation.name}</span>
              </div>
              <div>
                <span>{accommodation.address}</span>
              </div>
              <div>
                <span>{accommodation.numbers}</span>
              </div>
              <div>
                <span>{accommodation.price}원</span>
              </div>
              <div className="text-lg font-bold">
                <span>{accommodation.comment}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcommodationList;
