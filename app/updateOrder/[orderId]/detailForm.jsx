"use client";

import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import Link from "next/link";

import FoodInput from "@/app/updateOrder/[orderId]/foodInput";
import SubmitBtn from "@/app/ui/submitBtn";
import Checkbox from "@/app/updateOrder/[orderId]/checkbox";
import DeleteBtn from "@/app/updateOrder/[orderId]/deleteBtn";

import { updateOrderDetails } from "@/app/serverActions/actions";

export default function DetailForm({ orderId }) {
  const [subOrderId, setSubOrderId] = useState(0);
  const [subOrder, setSubOrder] = useState({});

  const [state, formAction] = useFormState(
    updateOrderDetails.bind(null, { orderId, subOrderId }),
    null
  );

  function changeFormStatus() {
    setIsFormHidden((prev) => !prev);
  }

  useEffect(() => {
    async function getSubOrder() {
      setSubOrder({});
      setIsLoading(true);

      try {
        const res = await fetch(
          `/api/subOrder?orderId=${orderId}&&subOrderId=${subOrderId}`
        );

        const data = await res.json();
        // console.log("DATA", data);
        setSubOrder(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getSubOrder();
  }, [subOrderId]);

  function subOrderNoHandler(e) {
    // console.log(e.target.value);
    setSubOrderId(e.target.value);
  }

  // Function to update the state of specific items
  function updateHandler(field, e) {
    // console.log("New Value", e.target.checked);

    const [name, id] = field.split("-"); // Extract name and id

    // Ensure the order state is updated correctly based on field name
    setSubOrder((prevOrder) => {
      if (Array.isArray(prevOrder[name])) {
        const updatedField = [...prevOrder[name]]; // Clone the array
        updatedField[parseInt(id) - 1] = e.target.value; // Update the specific item

        // console.log(updatedField, id);
        return {
          ...prevOrder,
          [name]: updatedField, // Set the updated array back into the order
        };
      } else {
        return {
          ...prevOrder,
          [name]: e.target.value, // Set the updated array back into the order
        };
      }
    });
  }

  function checkboxHandler(field, e) {
    // console.log("Field", e.target.name);

    // console.log("New Value", e.target.checked);

    // Ensure the order state is updated correctly based on field name
    setSubOrder((prevOrder) => {
      return {
        ...prevOrder,
        [field]: e.target.checked, // Set the updated array back into the order
      };
    });
  }

  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {/* From server when subOrderId is out of range it still returns 
      totalSubOrder so instead subOrder, subOrder.orderDate is being use to render order */}
      <div className="mt-5 w-full">
        <div className="flex mr-0 items-center gap-2 justify-end border-b border-red-900 mb-4 pb-4">
          <p className="w-fit">Order ID: {orderId}</p>
          <span>
            {`${subOrder?.totalSubOrder || 0} / `}
            <input
              type="number"
              value={Number(subOrderId)}
              max={Number(subOrder?.totalSubOrder - 1) || 0}
              min="0"
              onChange={(e) => subOrderNoHandler(e)}
              className="border border-black rounded-md px-2 py-1"
            />
          </span>
        </div>
        {Object.keys(subOrder).length > 0 &&
          !subOrder.error &&
          subOrder.totalSubOrder > 0 && (
            <div>
              <form action={formAction} className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col gap-5 justify-between">
                  <FoodInput
                    lable="ઓર્ડર તારીખ:"
                    bulletType={"star"}
                    maxWidth={"200px"}
                    nosOfField={1}
                    dbLabel="orderDate"
                    value={subOrder.orderDate}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="સમય:"
                    bulletType={"star"}
                    maxWidth={"200px"}
                    nosOfField={1}
                    dbLabel="orderTime"
                    value={subOrder.orderTime}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="માણસ:"
                    bulletType={"star"}
                    maxWidth={"200px"}
                    nosOfField={1}
                    dbLabel="guestCount"
                    value={subOrder.guestCount}
                    updateHandler={updateHandler}
                  />
                </div>
                <div>
                  <FoodInput
                    lable="વેલકમ જ્યુસ:"
                    bulletType={"star"}
                    nosOfField={2}
                    dbLabel="wlcJuice"
                    value={subOrder.wlcJuice}
                    updateHandler={updateHandler}
                  />
                </div>
                <div>
                  <FoodInput
                    lable="સ્ટાર્ટર:"
                    bulletType={"star"}
                    nosOfField={2}
                    dbLabel="starters"
                    value={subOrder.starters}
                    updateHandler={updateHandler}
                  />
                </div>
                <div>
                  <FoodInput
                    lable="સૂપ:"
                    bulletType={"star"}
                    nosOfField={2}
                    dbLabel="soup"
                    value={subOrder.soup}
                    updateHandler={updateHandler}
                  />
                </div>
                <div>
                  <FoodInput
                    lable="લાઈવ કાઉન્ટર:"
                    bulletType={"star"}
                    nosOfField={4}
                    dbLabel="liveCounter"
                    value={subOrder.liveCounter}
                    updateHandler={updateHandler}
                  />
                </div>
                <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
                  ખાના ખજાના
                </div>

                <div className="border-b-b flex flex-col gap-4">
                  <FoodInput
                    lable="સ્વીટ:-"
                    bulletType={"star"}
                    nosOfField={0}
                  />
                  <div className="pl-10 flex flex-col gap-4">
                    <FoodInput
                      lable="લીકવિડ સ્વીટ:"
                      bulletType={"arrow"}
                      nosOfField={1}
                      dbLabel="liquidSweet"
                      value={subOrder.liquidSweet}
                      updateHandler={updateHandler}
                    />
                    <FoodInput
                      lable="સોલીડ સ્વીટ:"
                      bulletType={"arrow"}
                      nosOfField={2}
                      dbLabel="solidSweet"
                      value={subOrder.solidSweet}
                      updateHandler={updateHandler}
                    />
                    <FoodInput
                      lable="લાઈવ સ્વીટ:"
                      bulletType={"arrow"}
                      nosOfField={2}
                      dbLabel="liveSweet"
                      value={subOrder.liveSweet}
                      updateHandler={updateHandler}
                    />
                  </div>
                </div>
                <div className="border-b flex flex-col gap-4">
                  <FoodInput
                    lable="પૂરી/પરાઠા:"
                    bulletType={"star"}
                    nosOfField={2}
                    dbLabel="puriParatha"
                    value={subOrder.puriParatha}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="રોટલી/નાન/કુલચા:"
                    bulletType={"star"}
                    nosOfField={2}
                    dbLabel="rotiNanKulcha"
                    value={subOrder.rotiNanKulcha}
                    updateHandler={updateHandler}
                  />
                </div>
                <div className="border-b flex flex-col gap-4">
                  <FoodInput
                    lable="ફરસાણ:-"
                    bulletType={"star"}
                    nosOfField={0}
                  />
                  <div className="pl-10 flex flex-col gap-4">
                    <FoodInput
                      lable="ગુજરાતી:"
                      bulletType={"arrow"}
                      nosOfField={4}
                      dbLabel="farsanGuj"
                      value={subOrder.farsanGuj}
                      updateHandler={updateHandler}
                    />
                    <FoodInput
                      lable="ચાઇનીઝ:"
                      bulletType={"arrow"}
                      nosOfField={2}
                      dbLabel="FaarnsanChi"
                      value={subOrder.FaarnsanChi}
                      updateHandler={updateHandler}
                    />
                  </div>
                </div>
                <div className="border-b flex flex-col gap-4">
                  <FoodInput
                    lable="સબ્જી:-"
                    bulletType={"star"}
                    nosOfField={0}
                  />
                  <div className="pl-10 flex flex-col gap-4">
                    <FoodInput
                      lable="ગુજરાતી શાક:"
                      bulletType={"arrow"}
                      nosOfField={4}
                      dbLabel="sabjiGuj"
                      value={subOrder.sabjiGuj}
                      updateHandler={updateHandler}
                    />
                    <FoodInput
                      lable="પંજાબી શાક:"
                      bulletType={"arrow"}
                      nosOfField={2}
                      dbLabel="sabjiPan"
                      value={subOrder.sabjiPan}
                      updateHandler={updateHandler}
                    />
                  </div>
                </div>

                <div className="border-b flex flex-col gap-4">
                  <FoodInput
                    lable="દાળ/કઢી:"
                    bulletType={"star"}
                    nosOfField={1}
                    dbLabel="curry"
                    value={subOrder.curry}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="રાઈસ:"
                    bulletType={"star"}
                    nosOfField={1}
                    dbLabel="rice"
                    value={subOrder.rice}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="પાપડ/પાપડી:"
                    bulletType={"star"}
                    nosOfField={1}
                    dbLabel="papad"
                    value={subOrder.papad}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="છાસ:"
                    bulletType={"star"}
                    nosOfField={1}
                    dbLabel="chaas"
                    value={subOrder.chaas}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="સલાડ/સંભારો:"
                    bulletType={"star"}
                    nosOfField={4}
                    dbLabel="salad"
                    value={subOrder.salad}
                    updateHandler={updateHandler}
                  />
                  <FoodInput
                    lable="ચટણી/સોસ:"
                    bulletType={"star"}
                    nosOfField={2}
                    dbLabel="sauce"
                    value={subOrder.sauce}
                    updateHandler={updateHandler}
                  />
                </div>

                <div>
                  <div>
                    <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
                      Extra
                    </div>
                    <ul className="flex flex-col gap-4 mt-4">
                      <li>
                        <FoodInput
                          lable="P.R.O ="
                          bulletType={"star"}
                          nosOfField={1}
                          dbLabel="pro"
                          value={subOrder.pro}
                          updateHandler={updateHandler}
                        />
                      </li>
                      <li>
                        <FoodInput
                          lable="બોઇઝ ="
                          bulletType={"star"}
                          nosOfField={1}
                          dbLabel="boys"
                          value={subOrder.boys}
                          updateHandler={updateHandler}
                        />
                      </li>
                      <li>
                        <FoodInput
                          lable="સર્વિસ માટે બહનો="
                          bulletType={"star"}
                          nosOfField={1}
                          dbLabel="servingStaff"
                          value={subOrder.servingStaff}
                          updateHandler={updateHandler}
                        />
                      </li>
                      <li>
                        <FoodInput
                          lable="ડેકોરેશન ="
                          bulletType={"star"}
                          nosOfField={1}
                          dbLabel="decoration"
                          value={subOrder.decoration}
                          updateHandler={updateHandler}
                        />
                      </li>
                      <li>
                        <FoodInput
                          lable="પાણી બોટલ 200ml ="
                          bulletType={"star"}
                          nosOfField={1}
                          dbLabel="waterBottle"
                          value={subOrder.waterBottle}
                          updateHandler={updateHandler}
                        />
                      </li>
                      <li>
                        <FoodInput
                          lable="વિદાઈ ચા ="
                          bulletType={"star"}
                          nosOfField={1}
                          dbLabel="FarewellTea"
                          value={subOrder.FarewellTea}
                          updateHandler={updateHandler}
                        />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
                      પાર્ટી ની જવાબદારી
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                      <Checkbox
                        tag={"જગ્યા + લાઇટીંગ સામાન:"}
                        name="spaceAndLight"
                        value={subOrder.spaceAndLight}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"કચરાપેટી:"}
                        name="dustbin"
                        value={subOrder.dustbin}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"વાપરવાનુું પાણી"}
                        name="water"
                        value={subOrder.water}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"વૉશ બેસિન:"}
                        name="washBasin"
                        value={subOrder.washBasin}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"કાઉન્ટર ટેબલ:"}
                        name="counterTable"
                        value={subOrder.counterTable}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"ફાર્મ ની ડિપોઝિટ:"}
                        name="farmDeposite"
                        value={subOrder.farmDeposite}
                        checkboxHandler={checkboxHandler}
                      />
                      <FoodInput
                        lable="વધારાનુ ="
                        bulletType={"star"}
                        nosOfField={1}
                        dbLabel="addtionalRespoParty"
                        value={subOrder.addtionalRespoParty}
                        updateHandler={updateHandler}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
                      રસોયાની જવાબદારી
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                      <Checkbox
                        tag={"વાસણ:"}
                        name="crockery"
                        value={subOrder.crockery}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"ગેસ:"}
                        name="gas"
                        value={subOrder.gas}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"મજૂર:"}
                        name="labour"
                        value={subOrder.labour}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"પીરસવાનુ:"}
                        name="serving"
                        value={subOrder.serving}
                        checkboxHandler={checkboxHandler}
                      />
                      <Checkbox
                        tag={"પીવાનુું પાણી ૨૦ લી.જગ:"}
                        name="waterJug"
                        value={subOrder.waterJug}
                        checkboxHandler={checkboxHandler}
                      />
                      <FoodInput
                        lable="વધારાનુ ="
                        bulletType={"star"}
                        nosOfField={1}
                        dbLabel="addtionalRespoCaterer"
                        value={subOrder.addtionalRespoCaterer}
                        updateHandler={updateHandler}
                      />
                      <input
                        type="checkbox"
                        name="hasExtra"
                        defaultChecked
                        hidden
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center md:mt-10 md:mb-4 my-4">
                  {state && (
                    <p
                      className={`${
                        state.success ? "bg-green-300" : "bg-red-300"
                      } rounded-md px-2 py-1 w-fit`}
                    >
                      {state.message}
                    </p>
                  )}
                  <SubmitBtn name={"Update"} />
                </div>
              </form>
              <DeleteBtn orderId={orderId} subOrderId={subOrderId} />
            </div>
          )}
      </div>
      {isLoading && <div className="text-center">Loading....</div>}
      {!isLoading && !Object.keys(subOrder).length > 1 && (
        <div className="text-center">No Data Found</div>
      )}
      {subOrder.error && (
        <div className="flex justify-self-center w-fit px-2 py-1 bg-red-500 rounded-md">
          <p className="w-fix">Error occured fetching orders</p>
        </div>
      )}
      {subOrder.totalSubOrder < 1 && (
        <div className="flex flex-col gap-4 justify-self-center items-center justify-center  w-fit">
          <p className="px-2 py-1 bg-[#F2B705] rounded-md">No order found</p>
          <Link
            href={`/createOrder/${orderId}`}
            className="text-[#262626] w-fit border-b-4 border-b-[#F2B705] border-dotted"
          >
            Add order &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
