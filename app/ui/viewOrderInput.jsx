export default function ViewOrderInput({ tag, value, margin }) {
  return (
    <div className="md:text-2xl text-base flex">
      <span
        htmlFor=""
        className={`${margin && "md:min-w-[200px] min-w-[110px]"} print:min-w-fit print:mx-2`}
      >
        {tag}
      </span>
      <p className="placeholder:text-black bg-inherit">{value}</p>
    </div>
  );
}
