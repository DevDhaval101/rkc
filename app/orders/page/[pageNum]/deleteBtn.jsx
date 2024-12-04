"use client";

import { deleteOrder } from "@/app/serverActions/actions";
import { AiFillDelete } from "react-icons/ai";

export default function DeleteBtn({ orderId }) {
  // console.log(orderId);
  return (
    <button
      onClick={() => confirmDelete(orderId)}
    >
      <AiFillDelete size="1.5rem" color="red" />
    </button>
  );
}

function confirmDelete(orderId) {
  const ipt = confirm(
    "Are you sure of deleting this order? Once deleted it can never be retrieved."
  );

  if (ipt) {
    deleteOrder(orderId);
  }
}
