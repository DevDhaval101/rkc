export default function ContactInput({ label, type, name }) {
  return (
    <div className="flex gap-4 items-center w-full">
      <label htmlFor="name" className="text-5xl mb-2 text-nowrap min-w-[340px]">
        {label}
      </label>
      {type !== "textarea" ? (
        <input type={type} name={name} className="border border-black h-10 w-full" />
      ) : (
        <textarea
          name={name}
          rows="4"
          cols="50"
          className="border border-black w-full"
        ></textarea>
      )}
    </div>
  );
}
