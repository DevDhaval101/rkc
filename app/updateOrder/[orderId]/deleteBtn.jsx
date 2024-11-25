"use client";

import { deleteSubOrder } from "@/app/serverActions/actions";

export default function DeleteBtn({ orderId, subOrderId }) {
  // console.log(orderId);
  return (
    <button
      className="bg-red-600 rounded-md px-2 py-1 md:text-base text-xs"
      onClick={() => confirmDelete(orderId, subOrderId)}
    >
      Delete
    </button>
  );
}

function confirmDelete(orderId, subOrderId) {
  const ipt = confirm(
    "Are you sure of deleting this order? Once deleted it can never be retrieved."
  );

  if (ipt) {
    deleteSubOrder(orderId, subOrderId);
  }
}
