"use client";

import { useFormState } from "react-dom";

import FoodInput from "@/app/ui/foodInput";
import SubmitBtn from "@/app/ui/submitBtn";
import Checkbox from "@/app/ui/checkbox";

import { saveOrderDetails } from "@/app/serverActions/actions";

export default function DetailForm({ orderId }) {
  const [state, formAction] = useFormState(
    saveOrderDetails.bind(null, orderId),
    null
  );

  return (
    <div className="mt-5 w-full">
      <div>
        <p className="text-right">Order ID: {orderId}</p>
      </div>
      <div>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex md:flex-row flex-col gap-5 justify-between">
            <FoodInput
              lable="ઓર્ડર તારીખ:"
              bullet={"star"}
              max_w_label={"200px"}
              fieldCount={1}
              dbLabel="orderDate"
            />
            <FoodInput
              lable="સમય:"
              bullet={"star"}
              max_w_label={"200px"}
              fieldCount={1}
              dbLabel="orderTime"
            />
            <FoodInput
              lable="માણસ:"
              bullet={"star"}
              max_w_label={"200px"}
              fieldCount={1}
              dbLabel="guestCount"
            />
          </div>
          <div>
            <FoodInput
              lable="વેલકમ જ્યુસ:"
              bullet={"star"}
              fieldCount={2}
              dbLabel="wlcJuice"
            />
          </div>
          <div>
            <FoodInput
              lable="સ્ટાર્ટર:"
              bullet={"star"}
              fieldCount={2}
              dbLabel="starters"
            />
          </div>
          <div>
            <FoodInput
              lable="સૂપ:"
              bullet={"star"}
              fieldCount={2}
              dbLabel="soup"
            />
          </div>
          <div>
            <FoodInput
              lable="લાઈવ કાઉન્ટર:"
              bullet={"star"}
              fieldCount={4}
              dbLabel="liveCounter"
            />
          </div>
          <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
            ખાના ખજાના
          </div>

          <div className="border-b-b flex flex-col gap-4">
            <FoodInput lable="સ્વીટ:-" bullet={"star"} fieldCount={0} />
            <div className="pl-10 flex flex-col gap-4">
              <FoodInput
                lable="લીકવિડ સ્વીટ:"
                bullet={"arrow"}
                fieldCount={1}
                dbLabel="liquidSweet"
              />
              <FoodInput
                lable="સોલીડ સ્વીટ:"
                bullet={"arrow"}
                fieldCount={2}
                dbLabel="solidSweet"
              />
              <FoodInput
                lable="લાઈવ સ્વીટ:"
                bullet={"arrow"}
                fieldCount={2}
                dbLabel="liveSweet"
              />
            </div>
          </div>
          <div className="border-b flex flex-col gap-4">
            <FoodInput
              lable="પૂરી/પરાઠા:"
              bullet={"star"}
              fieldCount={2}
              dbLabel="puriParatha"
            />
            <FoodInput
              lable="રોટલી/નાન/કુલચા:"
              bullet={"star"}
              fieldCount={2}
              dbLabel="rotiNanKulcha"
            />
          </div>
          <div className="border-b flex flex-col gap-4">
            <FoodInput lable="ફરસાન:-" bullet={"star"} fieldCount={0} />
            <div className="pl-10 flex flex-col gap-4">
              <FoodInput
                lable="ગુજરાતી:"
                bullet={"arrow"}
                fieldCount={4}
                dbLabel="farsanGuj"
              />
              <FoodInput
                lable="ચાઇનીઝ:"
                bullet={"arrow"}
                fieldCount={2}
                dbLabel="FaarnsanChi"
              />
            </div>
          </div>
          <div className="border-b flex flex-col gap-4">
            <FoodInput lable="સબ્જી:-" bullet={"star"} fieldCount={0} />
            <div className="pl-10 flex flex-col gap-4">
              <FoodInput
                lable="ગુજરાતી શાક:"
                bullet={"arrow"}
                fieldCount={4}
                dbLabel="sabjiGuj"
              />
              <FoodInput
                lable="પંજાબી શાક:"
                bullet={"arrow"}
                fieldCount={2}
                dbLabel="sabjiPan"
              />
            </div>
          </div>

          <div className="border-b flex flex-col gap-4">
            <FoodInput
              lable="દાળ/કઢી:"
              bullet={"star"}
              fieldCount={1}
              dbLabel="curry"
            />
            <FoodInput
              lable="રાઈસ:"
              bullet={"star"}
              fieldCount={1}
              dbLabel="rice"
            />
            <FoodInput
              lable="પાપડ/પાપડી:"
              bullet={"star"}
              fieldCount={1}
              dbLabel="papad"
            />
            <FoodInput
              lable="છાસ:"
              bullet={"star"}
              fieldCount={1}
              dbLabel="chaas"
            />
            <FoodInput
              lable="સલાડ/સંભારો:"
              bullet={"star"}
              fieldCount={4}
              dbLabel="salad"
            />
            <FoodInput
              lable="ચટણી/સોસ:"
              bullet={"star"}
              fieldCount={2}
              dbLabel="sauce"
            />
          </div>

          <div>
            <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
              Extra
            </div>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <FoodInput
                  lable="P.R.O ="
                  bullet={"star"}
                  fieldCount={1}
                  dbLabel="pro"
                />
              </li>
              <li>
                <FoodInput
                  lable="બોઇઝ ="
                  bullet={"star"}
                  fieldCount={1}
                  dbLabel="boys"
                />
              </li>
              <li>
                <FoodInput
                  lable="સર્વિસ માટે બહનો="
                  bullet={"star"}
                  fieldCount={1}
                  dbLabel="servingStaff"
                />
              </li>
              <li>
                <FoodInput
                  lable="ડેકોરેશન ="
                  bullet={"star"}
                  fieldCount={1}
                  dbLabel="decoration"
                />
              </li>
              <li>
                <FoodInput
                  lable="પાણી બોટલ 200ml ="
                  bullet={"star"}
                  fieldCount={1}
                  dbLabel="waterBottle"
                />
              </li>
              <li>
                <FoodInput
                  lable="વિદાઈ ચા ="
                  bullet={"star"}
                  fieldCount={1}
                  dbLabel="FarewellTea"
                />
              </li>
            </ul>
          </div>

          <div>
            <div className="md:text-5xl text-xl text-center py-1 bg-red-900 text-white">
              પાર્ટી ની જવાબદારી
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Checkbox tag={"જગ્યા + લાઇટીંગ સામાન:"} name="spaceAndLight" />
              <Checkbox tag={"કચરાપેટી:"} name="dustbin" />
              <Checkbox tag={"વાપરવાનુું પાણી"} name="water" />
              <Checkbox tag={"વૉશ બેસિન:"} name="washBasin" />
              <Checkbox tag={"કાઉન્ટર ટેબલ:"} name="counterTable" />
              <Checkbox tag={"ફાર્મ ની ડિપોઝિટ:"} name="farmDeposite" />
              <FoodInput
                lable="વધારાનુ ="
                bullet={"star"}
                fieldCount={1}
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
                bullet={"star"}
                fieldCount={1}
                dbLabel="addtionalRespoCaterer"
              />
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
            <SubmitBtn name={"Save"} />
          </div>
        </form>
      </div>
    </div>
  );
}
