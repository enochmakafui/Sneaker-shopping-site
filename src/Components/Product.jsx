export default function Product({ id, image, title, description,discountedPrice }) {
  return (
    <figure className="rounded-md  border-blue-gray-500 border shadow-md p-4">
      <img
        src={image}
        alt={`product ${id}`}
        className="w-full rounded-md mb-4"
      />
      <figcaption className="text-lg font-semibold mb-2 text-black ">{title}</figcaption>
      <p className="font-bold">{discountedPrice}</p>
    </figure>
  );
}
