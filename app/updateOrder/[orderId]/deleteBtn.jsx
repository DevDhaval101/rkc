"use client";

import { deleteSubOrder } from "@/app/serverActions/actions";
import { useState } from "react";

export default function DeleteBtn({ orderId, subOrderId }) {
  const [state, setState] = useState(null);

  // Function to confirm and delete the sub-order
  async function confirmDelete(orderId, subOrderId) {
    // Confirm deletion with a prompt
    const isConfirmed = confirm(
      "Are you sure you want to delete this order? Once deleted, it cannot be retrieved."
    );

    if (isConfirmed) {
      try {
        // Call the server action to delete the sub-order
        const result = await deleteSubOrder(orderId, subOrderId);
        console.log(result);

        // Update the state with the result
        setState(result);

        // Clear the state message after 3 seconds
        setTimeout(() => {
          setState(null);
        }, 3000);
      } catch (error) {
        console.error("Error deleting the sub-order:", error);
        setState({
          success: false,
          message: "An error occurred while deleting the order.",
        });
        setTimeout(() => {
          setState(null);
        }, 3000);
      }
    }
  }

  return (
    <>
      {/* Displaying the success/error message */}
      {state && (
        <div className="flex justify-self-center mb-4 fixed top-14 left-[50%] -translate-x-1/2 z-50">
          <p
            className={`w-fit px-2 py-1 ${
              state.success ? "bg-green-500" : "bg-red-500"
            } rounded-md`}
          >
            {state.message}
          </p>
        </div>
      )}

      {/* Delete button */}
      <div className="flex justify-self-center">
        <button
          className="bg-red-600 rounded-md px-2 py-1 md:text-base text-xs"
          onClick={() => confirmDelete(orderId, subOrderId)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
