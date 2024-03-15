import Image from "next/image";
import pikachu from "@/public/images/pikachu.png";

export default async function Home() {
  return (
    <main>
      <Image src={pikachu} alt="pikachu" />
    </main>
  );
}
