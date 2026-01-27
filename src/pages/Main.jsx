import { Button } from "@heroui/react";
import ColorBends from "../components/ColorBends";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";

export default function Main() {

  return (
    <div className="relative">
      <ColorBends className="absolute inset-0 z-0 h-screen" />
      <ProfileCard/>
    </div>

    
  );
}
