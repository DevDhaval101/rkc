export default function ContactInput({ label, type, name }) {
  return (
    <div className="flex md:gap-4 gap-2 items-center w-full">
      <label
        htmlFor="name"
        className="md:text-5xl text-base mb-2 text-nowrap md:min-w-[340px] min-w[100px]"
      >
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          name={name}
          className="border border-black md:h-10 w-full"
        />
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
