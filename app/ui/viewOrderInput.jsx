export default function ViewOrderInput({ tag, value, margin }) {
  return (
    <div className="md:text-2xl text-base flex gap-2">
      <span
        htmlFor=""
        className={`${margin && "md:min-w-[200px] min-w-[110px]"} print:mx-2 font-bold text-red-900 print:text-2xl print:min-w-[200px]`}
      >
        {tag}
      </span>
      <p className="placeholder:text-black bg-inherit print:text-2xl">{value}</p>
    </div>
  );
}
