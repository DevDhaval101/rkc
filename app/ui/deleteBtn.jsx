"use client";

import { deleteOrder } from "@/app/serverActions/actions";

export default function DeleteBtn({ orderId }) {
  // console.log(orderId);
  return (
    <button
      className="bg-red-600 rounded-md px-2 py-1"
      onClick={() => confirmDelete(orderId)}
    >
      Delete
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
