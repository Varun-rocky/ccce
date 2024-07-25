import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default  async function Dashboardpage(){
    const user = await currentUser()

if (!user) {
    // Redirect to login page if the user is not authenticated
 redirect("/")
 
  }
    return(
        <div>
            <Navbar/>
          <Dashboard/>
        </div>
    )
}