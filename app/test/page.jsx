import ViewOrderInput from "@/app/ui/viewOrderInput";

export default function TestPage() {
  const orders = [
    {
      orderDate: "01/09/2024",
      orderTime: "10:00 hrs",
      guestCount: "101",
      wlcJuice: ["Jinger", "Water"],
      starters: ["katlet", "egg"],
      soup: ["manchaw", ""],
      chaat: ["indori", "papdi-chhat", "", ""],
      liquidSweet: "rabdi ",
      solidSweet: ["barfi", "kasata"],
      liveSweet: ["halvo", ""],
      puriParatha: ["puri", ""],
      rotiNanKulcha: ["roti", ""],
      farsanGuj: ["bhajiya", "gota", "", ""],
      FaarnsanChi: ["manchurian", ""],
      sabjiGuj: ["undhiyu", "", "", ""],
      sabjiPan: ["paneer tikka", ""],
      curry: "kadhi",
      rice: "rice",
      papad: "papad",
      chaas: "chhas",
      salad: ["kachumar", "tameta", "", ""],
      sauce: ["green", "red"],
      pro: "12",
      boys: "8",
      servingStaff: "10",
      decoration: "to much",
      waterBottle: "500",
      FarewellTea: "300",
    },
  ];
  return (
    <div>
      {orders.map((order, index) => (
        <div key={`${order}-${index}`}>
          <div>
            <Header order={order} />
          </div>
          <div>
            <CreateItemList order={order} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CreateItemList({ order }) {
  let list = [];

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
  ];

  const displayTagList = ["salad", "sauce"];

  let groupedTags = {};

  for (let key in order) {
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
              list.push(<li key={`${key}-${val}`}>{val}</li>);
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
            list.push(<li key={key}>{order[key]}</li>);
          }
        }
      }
    }
  }

  // Add the grouped tag items to the list
  for (let tag in groupedTags) {
    list.push(
      <li key={tag}>
        {tag}: {groupedTags[tag].join(", ")}
      </li>
    );
  }

  return list;
}

function Header({ order }) {
  // console.log(order);
  return (
    <div>
      <div className="flex border-b-2 border-black border-dotted pb-2">
        <ViewOrderInput tag="ઓર્ડર તારીખ:" value={order.orderDate} />
        <ViewOrderInput tag="સમય:" value={order.orderTime} />
        <ViewOrderInput tag="માણસ:" value={order.guestCount} />
      </div>
      <div>
        <div className="text-2xl text-center mt-5 text-red-900 font-bold">
          ખાના ખજાના
        </div>
        {/* <div className="text-xl text-right">
          Order ID: {String(estimate._id)}
        </div> */}
      </div>
    </div>
  );
}
