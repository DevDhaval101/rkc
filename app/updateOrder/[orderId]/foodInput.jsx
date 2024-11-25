export default function FoodInput({
  lable,
  dbLabel,
  bulletType,
  nosOfField,
  maxWidth,
  hide,
  value,
  updateHandler,
}) {
  return (
    <div className="flex gap-8 w-full">
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
          <InputField
            lable={lable}
            dbLabel={dbLabel}
            hide={hide}
            value={value}
            updateHandler={updateHandler}
          />
        )}

        {nosOfField == 2 && (
          <div>
            <ul className="flex md:flex-row flex-col md:gap-12 gap-2 list-decimal">
              <li>
                <InputField
                  lable={lable}
                  dbLabel={`${dbLabel}-1`}
                  hide={hide}
                  value={Array.isArray(value) ? value[0] : value}
                  updateHandler={updateHandler}
                />
              </li>
              <li>
                <InputField
                  lable={lable}
                  dbLabel={`${dbLabel}-2`}
                  hide={hide}
                  value={Array.isArray(value) ? value[1] : value}
                  updateHandler={updateHandler}
                />
              </li>
            </ul>
          </div>
        )}

        {nosOfField == 4 && (
          <div>
            <ul className="flex md:flex-row flex-col md:gap-12 gap-2 list-decimal">
              <div>
                <li>
                  <InputField
                    lable={lable}
                    dbLabel={`${dbLabel}-1`}
                    hide={hide}
                    value={Array.isArray(value) ? value[0] : value}
                    updateHandler={updateHandler}
                  />
                </li>
                <li>
                  <InputField
                    lable={lable}
                    dbLabel={`${dbLabel}-2`}
                    hide={hide}
                    value={Array.isArray(value) ? value[1] : value}
                    updateHandler={updateHandler}
                  />
                </li>
              </div>
              <div>
                <li>
                  <InputField
                    lable={lable}
                    dbLabel={`${dbLabel}-3`}
                    hide={hide}
                    value={Array.isArray(value) ? value[2] : value}
                    updateHandler={updateHandler}
                  />
                </li>
                <li>
                  <InputField
                    lable={lable}
                    dbLabel={`${dbLabel}-4`}
                    hide={hide}
                    value={Array.isArray(value) ? value[3] : value}
                    updateHandler={updateHandler}
                  />
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ dbLabel, hide, value, updateHandler }) {
  // console.log("VALUE", value);
  return (
    <input
      type="text"
      name={dbLabel}
      className="border-b-2 border-dotted border-black md:h-10 w-full"
      disabled={hide}
      value={value}
      onChange={(e) => updateHandler(dbLabel, e)}
    />
  );
}
