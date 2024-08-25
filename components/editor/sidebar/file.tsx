"use client"

import { TFile } from "./types";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";

export default function SidebarFile({data}:{data:TFile}){
    return (
        <div className="w-full flex items-center h-6 transition-colors hover:text-muted-foreground cursor-pointer">

          <Image
            src={`/icons/${getIconForFile("index.html")}`}
            alt="file Icon"
            width={16}
            height={16}
            className="mr-2"
          />
      {data.name}
      </div>
    )
}