export default function FlashMessage({error}) {
  return (
    <div className="flex reletive justify-center">
      <div className="w-fit mx-auto">
        <p className="bg-red-500 rounded-md px-2 py-1">Error: {error}</p>
      </div>
    </div>
  );
}
