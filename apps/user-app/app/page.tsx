import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();
export default function Home() {
  return (
    <div className="bg-red-300 flex flex-col justify-center items-center min-h-screen text-2xl">
      <div className="bg-blue-300">
        Paytm
      </div>
    </div>
  );
}
