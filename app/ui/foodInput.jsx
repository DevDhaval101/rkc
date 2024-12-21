export default function FoodInput({
  lable,
  dbLabel,
  bulletType,
  nosOfField,
  maxWidth,
  hide,
}) {
  return (
    <div className="flex gap-8">
      <div className="flex">
        {bulletType === "star" && (
          <span className="md:text-5xl text-base text-red-900">&#9733;</span>
        )}
        {bulletType === "arrow" && (
          <span className="md:text-5xl text-base text-red-900">&rarr;</span>
        )}

        <label
          htmlFor={dbLabel}
          className={`md:text-5xl text-base mb-2 text-nowrap md:min-w-[${
            maxWidth ?? "340px"
          }] ${bulletType === "star" && "font-bold"} min-w-[50px]`}
        >
          {lable}
        </label>
      </div>
      <div>
        {nosOfField == 1 && (
          <InputField lable={lable} dbLabel={dbLabel} hide={hide} />
        )}

        {nosOfField == 2 && (
          <div>
            <ul className="flex md:flex-row flex-col md:gap-12 gap-2 list-decimal">
              <li>
                <InputField dbLabel={`${dbLabel}-1`} hide={hide} />
              </li>
              <li>
                <InputField dbLabel={`${dbLabel}-2`} hide={hide} />
              </li>
            </ul>
          </div>
        )}

        {nosOfField == 4 && (
          <div>
            <ul className="flex md:flex-row flex-col md:gap-12 gap-2 list-decimal">
              <div>
                <li>
                  <InputField dbLabel={`${dbLabel}-1`} hide={hide} />
                </li>
                <li>
                  <InputField dbLabel={`${dbLabel}-2`} hide={hide} />
                </li>
              </div>
              <div>
                <li>
                  <InputField dbLabel={`${dbLabel}-3`} hide={hide} />
                </li>
                <li>
                  <InputField dbLabel={`${dbLabel}-4`} hide={hide} />
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ dbLabel, hide }) {
  return (
    <input
      type="text"
      name={dbLabel}
      className="border-b-2 border-dotted border-black md:h-10 w-full"
      disabled={hide}
    />
  );
}
