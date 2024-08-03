import DetailForm from "@/app/components/detailForm";
import HeaderGuj from "@/app/components/headerGuj";

export default function Test({ params }) {
  // console.log(params);
  return (
    <div>
      <HeaderGuj />
      <DetailForm orderId={params.orderId} />
    </div>
  );
}
