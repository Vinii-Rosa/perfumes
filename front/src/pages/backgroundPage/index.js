import React from "react";
import image from "../../assets/images/backGround.png";
import { StylesButton } from "../../assets/comonents/button.js"

export const BackgroundPage = () => {
  return (
    <div className="h-full grid grid-cols-[1fr_400px_4fr]" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="flex justify-center items-start col-start-2 col-end-3 flex-col gap-20">     
            <h4 className="font-[Inter,sans-serif] text-[#d9bd8c]">NOVA COLEÇÃO 2026</h4>
            
            <h1 className="text-white font-[Inter,sans-serif] font-normal text-5xl">Arte da Essência</h1>
             
            <text className=" text-gray-300 font-[Inter,sans-serif] font-normal text-lg">Descubra fragrâncias exclusivas que traduzem personalidade e sofisticação em cada nota.</text>
            
            <StylesButton text="COMPRAR AGORA" width="w-[200px]" height="h-[50px]"/>
        </div>
    </div>
  )

}