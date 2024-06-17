"use client";

import {
  Sheet, SheetContent, SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <IoMdMenu color="white" size="2em"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-blue-200 p-0 border-none text-black">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};