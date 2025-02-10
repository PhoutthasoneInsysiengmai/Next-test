import Image from "next/image";
import AJSong from "../Image/AJSong.png"
import AJTeow from "../Image/AJtaow.png"
import AJTon from "../Image/AJTon.png"

export default function teacher() {
  return (<>
  <Image src={AJSong} width={200} height={500} className="hover:bg-yellow-500" alt=""></Image>
  <Image src={AJTeow} width={200} height={500} className="hover:bg-yellow-500" alt=""></Image>
  <Image src={AJTon} width={200} height={500} className="hover:bg-yellow-500" alt=""></Image>
  </>
    
  );
}