import Dashboard from "@/components/dashboard";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { User } from "@/lib/types";
import Navbar from "@/components/dashboard/navbar";

export default  async function Dashboardpage(){
    const user = await currentUser()

if (!user) {
    // Redirect to login page if the user is not authenticated
 redirect("/")
 
  }
  
  const userRes = await fetch(
    `https://database.varun-ramesh1018.workers.dev/api/user?id=${user.id}`
  );
  const userData = (await userRes.json()) as User;
  console.log(userData);

  const sharedRes = await fetch(
    `https://database.varun-ramesh1018.workers.dev/api/virtualbox/share?id=${user.id}`
  );
    return(
        <div>
            <Navbar />
          <Dashboard/>
        </div>
    )
}