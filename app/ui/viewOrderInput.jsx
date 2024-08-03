export default function ViewOrderInput({tag, value}) {
  return (
    <div className="text-2xl flex">
      <label htmlFor="" className="min-w-[200px]">{tag}</label>
      <input
        type="text"
        placeholder={value}
        disabled
        className="placeholder:text-black bg-inherit"
      />
    </div>
  );
}
