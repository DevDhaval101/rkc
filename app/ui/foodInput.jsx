export default function FoodInput({ lable, dbLabel, bullet, fieldCount, max_w_label }) {
  return (
    <div className="flex gap-4 items-center w-full">
      <div className="flex items-center">
        {bullet === "star" && (
          <span className="text-5xl text-red-900">&#9733;</span>
        )}
        {bullet === "arrow" && (
          <span className="text-5xl text-red-900">&rarr;</span>
        )}

        <label
          htmlFor={dbLabel}
          className={`text-5xl mb-2 text-nowrap min-w-[${
            max_w_label ?? "340px"
          }] ${bullet === "star" && "font-bold"}`}
        >
          {lable}
        </label>
      </div>
      <div>
        {fieldCount == 1 && <InputField lable={lable} dbLabel={dbLabel}/>}

        {fieldCount > 1 && fieldCount < 3 && (
          <div>
            <ul className="flex gap-12 list-decimal">
              <li>
                <InputField lable={lable} dbLabel={dbLabel}/>
              </li>
              <li>
                <InputField lable={lable} dbLabel={dbLabel}/>
              </li>
            </ul>
          </div>
        )}

        {fieldCount > 2 && fieldCount < 5 && (
          <div>
            <ul className="flex gap-12 list-decimal">
              <div>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel}/>
                </li>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel}/>
                </li>
              </div>
              <div>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel}/>
                </li>
                <li>
                  <InputField lable={lable} dbLabel={dbLabel}/>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ dbLabel }) {
  return (
    <input
      type="text"
      name={dbLabel}
      className="border-b-2 border-dotted border-black h-10 w-full"
    />
  );
}
