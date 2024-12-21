"use client";

import { useFormState } from "react-dom";
import { useState, useEffect } from "react";

import FoodInput from "@/app/ui/foodInput";
import SubmitBtn from "@/app/ui/submitBtn";
import Checkbox from "@/app/ui/checkbox";

import { saveOrderDetails } from "@/app/serverActions/actions";

export default function DetailForm({ orderId, nosOfSubOrder }) {
  const [state, formAction] = useFormState(
    saveOrderDetails.bind(null, orderId),
    null
  );

  const [notification, setNotification] = useState(state);

  const [isFormHidden, setIsFormHidden] = useState(true);

  function changeFormStatus() {
    setIsFormHidden((prev) => !prev);
  }

  useEffect(() => {
    // console.log('visible?')
    setNotification(state);
  }, [state]); // Whenever `state` changes, update `notification`

  // UseEffect to celar notification
  useEffect(() => {
    setTimeout(() => {
      setNotification(null); // Nullify notification after 3 seconds
    }, 3000);
  }, [state]);

  return (
    <div className="mt-5 w-full">
      <div className="border-b border-red-900 mb-4 pb-4">
        <p className="text-right">
          Order ID: {orderId} / {nosOfSubOrder + 1} {}
        </p>
      </div>
      <div>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex justify-end">
            <FoodInput
              lable="ડીશ નો ભાવ :"
              bulletType={"star"}
              maxWidth={"100px"}
              nosOfField={1}
              dbLabel="pricePerPlate"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-5 justify-between">
            <FoodInput
              lable="ઓર્ડર તારીખ:"
              bulletType={"star"}
              maxWidth={"200px"}
              nosOfField={1}
              dbLabel="orderDate"
            />
            <FoodInput
              lable="સમય:"
              bulletType={"star"}
              maxWidth={"100px"}
              nosOfField={1}
              dbLabel="orderTime"
            />
            <FoodInput
              lable="માણસ:"
              bulletType={"star"}
              maxWidth={"100px"}
              nosOfField={1}
              dbLabel="guestCount"
            />
          </div>
          <div>
            <FoodInput
              lable="વેલકમ જ્યુસ:"
              bulletType={"star"}
              nosOfField={2}
              dbLabel="wlcJuice"
            />
          </div>
          <div>
            <FoodInput
              lable="સ્ટાર્ટર:"
              bulletType={"star"}
              nosOfField={2}
              dbLabel="starters"
            />
          </div>
          <div>
            <FoodInput
              lable="સૂપ:"
              bulletType={"star"}
              nosOfField={2}
              dbLabel="soup"
            />
          </div>
          <div>
            <FoodInput
              lable="લાઈવ કાઉન્ટર:"
              bulletType={"star"}
              nosOfField={4}
              dbLabel="liveCounter"
            />
          </div>
          <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
            ખાના ખજાના
          </div>

          <div className="border-b-b flex flex-col gap-4">
            <FoodInput lable="સ્વીટ:-" bulletType={"star"} nosOfField={0} />
            <div className="pl-10 flex flex-col gap-4">
              <FoodInput
                lable="લીકવિડ સ્વીટ:"
                bulletType={"arrow"}
                nosOfField={1}
                dbLabel="liquidSweet"
              />
              <FoodInput
                lable="સોલીડ સ્વીટ:"
                bulletType={"arrow"}
                nosOfField={2}
                dbLabel="solidSweet"
              />
              <FoodInput
                lable="લાઈવ સ્વીટ:"
                bulletType={"arrow"}
                nosOfField={2}
                dbLabel="liveSweet"
              />
            </div>
          </div>
          <div className="border-b flex flex-col gap-4">
            <FoodInput
              lable="પૂરી/પરાઠા:"
              bulletType={"star"}
              nosOfField={2}
              dbLabel="puriParatha"
            />
            <FoodInput
              lable="રોટલી/નાન/કુલચા:"
              bulletType={"star"}
              nosOfField={2}
              dbLabel="rotiNanKulcha"
            />
          </div>
          <div className="border-b flex flex-col gap-4">
            <FoodInput lable="ફરસાણ:-" bulletType={"star"} nosOfField={0} />
            <div className="pl-10 flex flex-col gap-4">
              <FoodInput
                lable="ગુજરાતી:"
                bulletType={"arrow"}
                nosOfField={4}
                dbLabel="farsanGuj"
              />
              <FoodInput
                lable="ચાઇનીઝ:"
                bulletType={"arrow"}
                nosOfField={2}
                dbLabel="FaarnsanChi"
              />
            </div>
          </div>
          <div className="border-b flex flex-col gap-4">
            <FoodInput lable="સબ્જી:-" bulletType={"star"} nosOfField={0} />
            <div className="pl-10 flex flex-col gap-4">
              <FoodInput
                lable="ગુજરાતી શાક:"
                bulletType={"arrow"}
                nosOfField={4}
                dbLabel="sabjiGuj"
              />
              <FoodInput
                lable="પંજાબી શાક:"
                bulletType={"arrow"}
                nosOfField={2}
                dbLabel="sabjiPan"
              />
            </div>
          </div>

          <div className="border-b flex flex-col gap-4">
            <FoodInput
              lable="દાળ/કઢી:"
              bulletType={"star"}
              nosOfField={1}
              dbLabel="curry"
            />
            <FoodInput
              lable="રાઈસ:"
              bulletType={"star"}
              nosOfField={1}
              dbLabel="rice"
            />
            <FoodInput
              lable="પાપડ/પાપડી:"
              bulletType={"star"}
              nosOfField={1}
              dbLabel="papad"
            />
            <FoodInput
              lable="છાસ:"
              bulletType={"star"}
              nosOfField={1}
              dbLabel="chaas"
            />
            <FoodInput
              lable="સલાડ/સંભારો:"
              bulletType={"star"}
              nosOfField={4}
              dbLabel="salad"
            />
            <FoodInput
              lable="ચટણી/સોસ:"
              bulletType={"star"}
              nosOfField={2}
              dbLabel="sauce"
            />
          </div>
          {!isFormHidden && (
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
                      hide={isFormHidden}
                    />
                  </li>
                  <li>
                    <FoodInput
                      lable="બોઇઝ ="
                      bulletType={"star"}
                      nosOfField={1}
                      dbLabel="boys"
                      hide={isFormHidden}
                    />
                  </li>
                  <li>
                    <FoodInput
                      lable="સર્વિસ માટે બહનો="
                      bulletType={"star"}
                      nosOfField={1}
                      dbLabel="servingStaff"
                      hide={isFormHidden}
                    />
                  </li>
                  <li>
                    <FoodInput
                      lable="ડેકોરેશન ="
                      bulletType={"star"}
                      nosOfField={1}
                      dbLabel="decoration"
                      hide={isFormHidden}
                    />
                  </li>
                  <li>
                    <FoodInput
                      lable="પાણી બોટલ 200ml ="
                      bulletType={"star"}
                      nosOfField={1}
                      dbLabel="waterBottle"
                      hide={isFormHidden}
                    />
                  </li>
                  <li>
                    <FoodInput
                      lable="વિદાઈ ચા ="
                      bulletType={"star"}
                      nosOfField={1}
                      dbLabel="FarewellTea"
                      hide={isFormHidden}
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
                  />
                  <Checkbox tag={"કચરાપેટી:"} name="dustbin" />
                  <Checkbox tag={"વાપરવાનુું પાણી"} name="water" />
                  <Checkbox tag={"વૉશ બેસિન:"} name="washBasin" />
                  <Checkbox tag={"કાઉન્ટર ટેબલ:"} name="counterTable" />
                  <Checkbox tag={"ફાર્મ ની ડિપોઝિટ:"} name="farmDeposite" />
                  <FoodInput
                    lable="વધારાનુ ="
                    bulletType={"star"}
                    nosOfField={1}
                    dbLabel="addtionalRespoParty"
                  />
                </div>
              </div>

              <div>
                <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
                  રસોયાની જવાબદારી
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <Checkbox tag={"વાસણ:"} name="crockery" />
                  <Checkbox tag={"ગેસ:"} name="gas" />
                  <Checkbox tag={"મજૂર:"} name="labour" />
                  <Checkbox tag={"પીરસવાનુ:"} name="serving" />
                  <Checkbox tag={"પીવાનુું પાણી ૨૦ લી.જગ:"} name="waterJug" />
                  <FoodInput
                    lable="વધારાનુ ="
                    bulletType={"star"}
                    nosOfField={1}
                    dbLabel="addtionalRespoCaterer"
                  />
                </div>
                <input type="checkbox" name="hasExtra" defaultChecked hidden />
              </div>
            </div>
          )}

          <button
            className="px-2 py-1 border bg-black text-white"
            onClick={changeFormStatus}
            type="button"
          >
            {isFormHidden ? "Show More" : "Hide"}
          </button>

          <div className="flex flex-col gap-2 justify-center items-center md:mt-10 md:mb-4 my-4">
            <SubmitBtn name={"Save"} />
          </div>
        </form>
      </div>
      {notification && (
        <div className="flex justify-self-center mb-4 fixed top-14 left-[50%] -translate-x-1/2 z-50">
          <p
            className={`${
              notification.success ? "bg-green-300" : "bg-red-300"
            } rounded-md px-2 py-1 w-fit`}
          >
            {notification.message}
          </p>
        </div>
      )}
    </div>
  );
}
