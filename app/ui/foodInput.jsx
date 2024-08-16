export default function FoodInput({ lable, dbLabel, bullet, fieldCount, max_w_label, hide }) {
  return (
    <div className="flex gap-8 w-full">
      <div className="flex">
        {bullet === "star" && (
          <span className="md:text-5xl text-base text-red-900">&#9733;</span>
        )}
        {bullet === "arrow" && (
          <span className="md:text-5xl text-base text-red-900">&rarr;</span>
        )}

        <label
          htmlFor={dbLabel}
          className={`md:text-5xl text-base mb-2 text-nowrap md:min-w-[${
            max_w_label ?? "340px"
          }] ${bullet === "star" && "font-bold"} min-w-[50px]`}
        >
          {lable}
        </label>
      </div>
      <div>
        {fieldCount == 1 && <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>}

        {fieldCount > 1 && fieldCount < 3 && (
          <div>
            <ul className="flex md:flex-row flex-col md:gap-12 gap-2 list-decimal">
              <li>
                <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>
              </li>
              <li>
                <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>
              </li>
            </ul>
          </div>
        )}

        {fieldCount > 2 && fieldCount < 5 && (
          <div>
            <ul className="flex md:flex-row flex-col md:gap-12 gap-2 list-decimal">
              <div>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>
                </li>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>
                </li>
              </div>
              <div>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>
                </li>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel} hide={hide}/>
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
      disabled = {hide}
    />
  );
}
