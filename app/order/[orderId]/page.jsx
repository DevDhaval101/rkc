import DetailForm from "@/app/components/detailForm";
import HeaderGuj from "@/app/components/headerGuj";

export default function Test({ params }) {
  // console.log(params);
  return (
    <div>
      <div>
        <HeaderGuj />
      </div>
      <div className="w=[95%]">
        <DetailForm orderId={params.orderId} />
      </div>
    </div>
  );
}
