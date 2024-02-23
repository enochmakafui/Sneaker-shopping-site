export default function AddQuantity({ onIncrease, itemQuantity, onDecrease }) {
  function handleIncrease() {
    onIncrease();
  }
  function handleDecrease() {
    onDecrease();
  }
  return (
    <div className="flex items-center justify-between bg-gray-200 py-3 px-5 my-2 rounded-md ">
      <button
        className="font-bold text-xl text-orange-400"
        onClick={handleDecrease}
      >
        -
      </button>
      <p className="font-bold ">{itemQuantity}</p>
      <button
        className="font-bold text-xl text-orange-400"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
