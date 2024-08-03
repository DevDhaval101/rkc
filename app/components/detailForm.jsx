import FoodInput from "@/app/ui/FoodInput";

import { saveOrderDetails } from "@/app/serverActions/actions";

export default function DetailForm({orderId}) {

  return (
    <div className="mt-5">
      <div>
        <p className="text-right">Order ID: {orderId}</p>
      </div>
      <div>
        <form action={saveOrderDetails.bind(null, orderId)} className="flex flex-col gap-4">
          <div className="flex gap-5 justify-between">
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
              lable="ચાટ:"
              bullet={"star"}
              fieldCount={4}
              dbLabel="chaat"
            />
          </div>
          <div className="text-5xl text-center py-1 bg-red-900 text-white">
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
            <div className="text-5xl text-center py-1 bg-red-900 text-white">
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

          <div className="flex justify-center mt-10 mb-4">
            <button className="bg-green-400 rounded-md px-2 py-1 text-5xl">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
