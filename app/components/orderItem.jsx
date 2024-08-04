export default function OrderItem({ order }) {
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