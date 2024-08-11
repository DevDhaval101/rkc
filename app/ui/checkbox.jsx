export default function Checkbox({ tag, name }) {
  return (
    <div className="md:text-5xl text-base flex items-center gap-10">
      <label htmlFor="spaceAndLight" className="font-bold md:min-w-[510px] min-w-[200px]">
        {" "}
        <span className="text-red-900">&#9733;</span>
        {tag}
      </label>
      <input type="checkbox" name={name} className="md:scale-150" />
    </div>
  );
}
