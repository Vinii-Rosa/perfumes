import React from "react";
import image from "../../assets/images/backGround.png";
import { StylesButton } from "../../assets/comonents/button.js"

export const BackgroundPage = () => {
  return (
    <div className="h-100" style={{ display: "grid", gridTemplateColumns: "1fr 450px 4fr", backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="fb-align-start" style={{ gridColumn: "2 / 3", flexDirection: "column", gap: "20px"}}>     
            <h4 className="font-family-Inter-sans-serif" style={{color: "#d9bd8c"}}>NOVA COLEÇÃO 2026</h4>
            
            <h1 className="color-white font-family-Inter-sans-serif ftw" style={{fontSize: "3.25rem"}}>Arte da Essência</h1>
            
            <text className="text-color font-family-Inter-sans-serif ftw" style={{fontSize: "1.125rem", color: "#d1d0cf"}}>Descubra fragrâncias exclusivas que traduzem personalidade e sofisticação em cada nota.</text>
            
            <StylesButton borderRadius="0px" text="COMPRAR AGORA" backGround="#ba985e" className="color-white font-size-0875 ftw-600"/>
        </div>
    </div>
  )

}