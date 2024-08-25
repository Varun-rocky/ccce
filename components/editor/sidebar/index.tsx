import { File, FilePlus, Folder, FolderPlus, Search } from "lucide-react";
import { TFile ,TFolder} from "./types";
import SidebarFile from "./file";
import SidebarFolder from "./folder";
const  data:(TFile| TFolder)[] =[
    {
        id:"index.tsx",
        type:"file",
        name:"index.tsx"
    },
    {
        id:"components",
        type:"folder",
        name:"components",
        children:[
            {
                id:"navbar.tsx",
                type:"file",
                name:"navbar.tsx"
            },
            {
                id:"ui",
                type:"folder",
                name:"ui",
                children:[
                    {
                        id:"button.tsx",
                        type:"file",
                        name:"button.tsx" 
                    },
                    {
                        id:"input.tsx",
                        type:"file",
                        name:"input.tsx" 
                    }
                ]
            }
        ]
    },
]
export default function Sidebar(){
    return (
        <div className="h-full w-56 flex flex-col items-start p-2">
        <div className="flex w-full items-center justify-between h-8 mb-1">
          <div className="text-muted-foreground">Explorer</div>
          <div className="flex space-x-1">
            <div className="disabled:opacity-50 disabled:hover:bg-background h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <FilePlus className="h-4 w-4" />
            </div>
            <div className="disabled:opacity-50 disabled:hover:bg-background h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <FolderPlus className="h-4 w-4" />
            </div>
            <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <Search className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="w-full mt-1 flex flex-col">
             {data.map((child)=> child.type === "file"?<SidebarFile key={child.id} data={child}/>:<SidebarFolder key={child.id} data={child}/>)}
        </div>
      </div>
    )
}