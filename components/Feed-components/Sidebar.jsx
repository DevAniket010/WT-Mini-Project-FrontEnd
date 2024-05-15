"use client"
import React, { useMemo,useState } from "react";
import Image from "next/image";
import { Home, Dumbbell, Settings, LogOut,Cpu, BookOpenText, Store, BadgeDollarSign, User} from "lucide-react";
import { Button } from "@mui/material";
import { tabsStore } from "@/store/tabState";
import AddPost from "./AddPost";

const Sidebar = () => {
    const [popup,setPopup] = useState(false)
    const setTab = tabsStore((state) => state.setTab);
    const tab = tabsStore((state) => state.tab);
    const tabs = useMemo(
      () => [
        {
          name: "Home",
          icon: Home,
        },
        {
          name: "Sports",
          icon: Dumbbell,
        },
        {
          name: "Technology",
          icon: Cpu,
        },
        {
          name: "Education",
          icon: BookOpenText,
        },
        {
          name: "Buisness",
          icon: Store,
        },
        {
          name: "Finance",
          icon: BadgeDollarSign,
        },
        {
          name: "Profile",
          icon: User,
        }
      ],
      []
    );
    return (
      <div className="h-screen sticky top-0 flex bg-black flex-col">
       <p className="text-2xl text-white my-10 ml-10 font-bold">Flowspace</p>
        <div className="p-6 flex flex-col gap-2">
          {tabs.map((tabObj, i) => (
            <div
              key={i}
              className={`flex gap-3 p-4 items-center transition-all hover:bg-gray-800 cursor-pointer rounded-md text-white ${
                tab === tabObj.name ? 'bg-gray-800' : 'bg-black'
              }`}
              onClick={() => setTab(tabObj.name)}
            >
              <tabObj.icon size={25} />
              <p className="text-lg">{tabObj.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 flex-1 p-6 justify-end">
          <Button
            className="btn-grad text-2xl"
            onClick={()=>setPopup(true)}
          >
            Post
          </Button>
          <div className="flex w-full gap-3 p-4 items-center transition-all hover:bg-gray-800 text-white cursor-pointer rounded-md">
            <LogOut size={25} />
            <p className="text-lg">Log out</p>
          </div>
        </div>
        {popup && <AddPost setPopup={setPopup}/>}
      </div>
    );}

export default Sidebar