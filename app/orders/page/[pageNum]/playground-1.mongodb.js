use("rkc");

const data = db
  .getCollection("test_orders")
  .findOneAndUpdate(
    { _id: ObjectId("674ddb369f8080120c9b2a11") },
    { $set: { orders: [] } },
    { returnNewDocument: true }
  );

console.log(data);
