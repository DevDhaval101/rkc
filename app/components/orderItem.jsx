export default function OrderItem({ order }) {
  let khanaKazanaList = [];
  let mainTags = [];

  const ignoreList = [
    "orderDate",
    "orderTime",
    "guestCount",
    "pro",
    "boys",
    "servingStaff",
    "decoration",
    "waterBottle",
    "FarewellTea",
    "spaceAndLight",
    "dustbin",
    "water",
    "washBasin",
    "counterTable",
    "farmDeposite",
    "addtionalRespoParty",
    "crockery",
    "gas",
    "labour",
    "serving",
    "waterJug",
    "addtionalRespoCaterer",
    "hasExtra"
  ];

  const displayTagList = [
    "salad",
    "sauce",
    "wlcJuice",
    "starters",
    "soup",
    "liveCounter",
  ];

  const titleTagList = ["wlcJuice", "starters", "soup", "liveCounter"];

  const replaceTag = {
    wlcJuice: "વેલકમ જ્યુસ",
    starters: "સ્ટાર્ટર",
    soup: "સૂપ",
    liveCounter: "લાઈવ કાઉન્ટર",
  };

  let groupedTags = {};

  for (let key in order) {
    // console.log(key);
    // check tag and ignore certain values
    if (!ignoreList.includes(key)) {
      if (Array.isArray(order[key])) {
        order[key].forEach((val) => {
          if (val.length > 0) {
            // check tag and include tag in values
            if (displayTagList.includes(key)) {
              if (!groupedTags[key]) {
                groupedTags[key] = [];
              }
              groupedTags[key].push(val);
            } else {
              khanaKazanaList.push(<li key={`${key}-${val}`}>{val}</li>);
            }
          }
        });
      } else {
        if (order[key].length > 0) {
          if (displayTagList.includes(key)) {
            if (!groupedTags[key]) {
              groupedTags[key] = [];
            }
            groupedTags[key].push(order[key]);
          } else {
            khanaKazanaList.push(<li key={key}>{order[key]}</li>);
          }
        }
      }
    }
  }

  // Add the grouped tag items to the khanaKazanaList
  for (let tag in groupedTags) {
    if (titleTagList.includes(tag)) {
      mainTags.push(
        <div key={tag} className="flex gap-2 flex-wrap">
          <p className="text-red-900 font-bold uppercase min-w-24">
            {replaceTag[tag]}:{" "}
          </p>
          {
            <div className="flex gap-2 flex-wrap flex-col md:flex-row print:flex-row">
              {groupedTags[tag].map((item, index) => (
                <p key={`${item} + ${index}`} className="min-w-[200px]">{`${index + 1}. ${item}`}</p>
              ))}
            </div>
          }
        </div>
      );
    } else {
      khanaKazanaList.push(
        <li key={tag}>
          <p className="inline">
            <span className="font-bold mr-2 uppercase">{tag}:</span>
            {groupedTags[tag].join(", ")}
          </p>
        </li>
      );
    }
  }

  return (
    <div className="pt-5 flex flex-col gap-4 print:text-xl">
      <div className="flex gap-2 flex-wrap md:flex-nowrap md:flex-col print:flex-col">
        {mainTags}
      </div>
      <div className="text-2xl print:text-3xl mt-5 text-red-900 font-bold underline">
        ખાના ખજાના
      </div>
      <div>
        <ul className="list-decimal list-inside">{khanaKazanaList}</ul>
      </div>
    </div>
  );
}
