import HeaderGuj from "@/app/components/headerGuj";
import OrderHeader from "@/app/components/orderHeader";
import PrintBtn from "@/app/ui/printBtn";

import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";

export default function TAndC({ order, estimate }) {
  return (
    <div className={`${styles2.print_container} flex flex-col`}>
      <OrderHeader order={order} estimate={estimate} />
      <p className="text-2xl md:text-4xl border-t-[12px] border-[#F2B705] bg-[#262626] text-white pl-5 py-4">
        નિયમો
      </p>
      <div
        className={`${styles.custom_bg} pl-5 md:pl-10 pt-4 pb-10 flex flex-col gap-10 flex-grow`}
      >
        <ul
          className={`list-outside list-disc marker:text-red-900 flex flex-col gap-2 text-base md:text-xl  font-bold `}
        >
          <li>
            10% રકમ ઓર્ડ૨ ફાઈનલ થાય ત્યારે આપવાની રહેશે, 60% રકમ પ્રોગ્રામના ૧૦
            દિવસ પહેલા આપવાની રહેશે. ત્યાર બાદ બાકી નિકળતા 30% રકમ પ્રોગામના ૨
            દિવસ પછી ચૂકવવાના રહેશે.
          </li>
          <li>કેટરીંગ બોયઝ એન્ડ ગર્લ્સ પી.આ૨.ઓ રાત્રે ૧૨ કલાક સુધીજ રહેશે.</li>
          <li>
            પાર્ટીએ કિચન, બ્રાઈટ,પાણી, કાઉન્ટર્સ,વોશબેઝીનની વ્યવસ્થા કરી આપવાની
            રહેશે.
          </li>
          <li>
            ⁠વાસણ ધોવા માટે ચોકડી તેમજ રસોડા માટે ઈટની વ્યવસ્થા પાર્ટીએ કરવાની
            રહેશે.
          </li>
          <li>
            રસોઈના પાણીની તેમજ વાસણ ધોવાના પાણીની વ્યવસ્થા પાર્ટીએ કરવાની રહેશે.
          </li>
          <li>
            પ્રોગ્રામના ૧૦ દિવસ પહેલા ડિશની કવોન્ટીટી તેમજ મેનુમાં ફારફેર થઈ
            શકશે. ત્યા૨બાદ ફેરફાર થઈ શકશે નહી.
          </li>
          <li>
            ઓર્ડર આપેલ ડીશના કરતા ઓછી ડીશ થશે તો પણ પૂરી ડીશના પૈસા ચુકવવાના
            રહેશે તેમજ વધારે ડીશ થશે તો પણ તેના પૈસા ડીશના ભાવ મુજબ ચુકવવાના
            રહેશે.
          </li>
          <li>
            સ્ટાર્ટર ચાલુ કર્યા પછુ એક કલાક જ ચાલશે જયુસ જેટલી ડીશનો ઓર્ડર હશે
            તેટલા જ ગ્લાસ લાવવામાં આવશે અથવા પાર્ટી સાથે કન્ફર્મ થયા મુજબ.
          </li>
          <li>કાઉન્ટર ડેકોરેશનનો ખર્ચ અલગથી રહેશે.</li>
          <li>
            મેનુ સાથે ૨૦ લીટર જાર ડ્રિંકીંગ વોટર આપવામાં આવશે, પેક ગ્લાસ અથવા
            મિનરલ વોટર બોટલનો ચાર્જ અલગથી ચુકવવાનો રહેશે.
          </li>
          <li>
            બધા જ પ્રકારના સ્ટાફ જેવા કે , બોમ્બે બોયસ, હોસ્ટ્સ, જગલર, વિ. વિ.
            નો થતો ચાર્જ તેમજ ખર્ચ અલગથી રહેશે.
          </li>
          <li>
            ⁠રસોઈ બનાવવા તથા જમણવાર માટેની જરૂરીયાત મુજબ ની પુરતી જગ્યાની
            વ્યવસ્થા પાર્ટીએ કરી આપવાની રહેશે, જે જગ્યાનો કામ કરવાના હેતુથી
            ફંકશન ના ઓછામાં ઓછા ૧૨ કલાક વહેલા થી કબજો મેળવી આપવાનો રહેશે.
          </li>
          <li>પાર્ટી પ્લોટમાં આપવાની થતી ડિપોઝીટ પાર્ટીએ ચુકવવાની રહેશે.</li>
        </ul>
      </div>
      <div
        className={`border-t-2 border-green-600 flex flex-col gap-4 font-bold pb-5`}
      >
        <div className="flex flex-col gap-4 items-center pt-5">
          <p className="border-4 border-orange-600 px-2 py-1 rounded-md text-xl md:text-2xl">
            ઓફિસ - 1
          </p>
          <p className="text-xl md:text-2xl">
            ઘર નંબર 46, હીરાનગર સોસાયટી, ત્રિકમનગર 2 ની સામે, રાધાકૃષ્ણ મંદિર
            પાસે, એલ.એચ. રોડ, વરાછા, સુરત.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="border-4 border-orange-600 px-2 py-1 rounded-md text-xl md:text-2xl">
            ઓફિસ - 2
          </p>
          <p className="text-xl md:text-2xl">
            6/223, મંછરપુરા, કોલસાવાડ, મરાઠી નિશાળની સામે, ગલેમંદિર સુરત. સુરત
          </p>
          <PrintBtn />
        </div>
      </div>
    </div>
  );
}
