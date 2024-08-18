import Navbar from "@/components/dashboard/navbar";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@/lib/types";
import dynamic from "next/dynamic"; // because I want to pull at the rendering lazy loading
import { redirect } from "next/navigation";
const CodeEditor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});
export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/");

  const userRes = await fetch(
    `https://database.varun-ramesh1018.workers.dev/api/user?id=${user.id}`
  );
  const userData = (await userRes.json()) as User;
  console.log(userData);

  return (
    <div className="flex w-screen flex-col h-screen bg-background ">
      <Navbar userData={userData} />
      <div className="w-screen flex grow">
        <CodeEditor />
      </div>
    </div>
  );
}
