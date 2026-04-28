import Banner from "@/components/Banner";
import TopGenaration from "@/components/TopGenaration";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Banner />
    <TopGenaration/>
   
   </>
  );
}
