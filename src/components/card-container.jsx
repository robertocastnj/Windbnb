import { useData } from '../context/data-context'

export default function CardContainer({ data }) {
  const { isLoading, isError, isShow } = useData()
  return (
    <>
      <div className="flex justify-between items-center px-4 mt-6 sm:p-6 sm:mt-0">
        <h2 className="text-xl font-bold">Stays in Finland</h2>
        <span id="staysCount" className="text-gray-500">
          {data.length} {data.length === 1 ? 'stay' : 'stays'}
        </span>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {data.length > 0 && isShow ? (
        <div
          className="p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:pl-6 pr-6 pt-0 sm:gap-6 md:grid-cols-3"
          id="cardsContainer"
        >
          {data.map((stay, index) => (
            <div key={index} className="flex flex-col gap-2">
              <img
                src={stay.photo}
                className="w-full object-cover rounded-2xl hover:scale-102 sm:h-50 md:h-60"
                alt={stay.title}
              />
              <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                <div className="flex gap-2 text-[0.8rem]">
                  {stay.superHost && (
                    <span className="border-2 font-bold w-min h-min pl-2 pr-2 rounded-2xl">
                      SUPERHOST
                    </span>
                  )}
                  <span className="text-[1rem] sm:text-[0.9rem]">
                    {stay.type} • {stay.beds} beds
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EB5757"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#EB5757"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <span className="flex items-center space-x-1 font-semibold">
                    {stay.rating}
                  </span>
                </div>
              </div>
              <h3 className="mt-1 font-semibold">{stay.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-700">
            No properties found matching your guest criteria.
          </p>
          <p className="text-gray-500 mt-2">
            Try changing the number of guests or location to see more results.
          </p>
        </div>
      )}
    </>
  )
}
