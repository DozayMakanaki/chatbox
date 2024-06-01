import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-green-500 mb1">Flow Chat</h1>
      <p className="mb-10">A chat app developed by Dozay</p>
      <Button>Start Chatting</Button>
    </div>
  );
}
