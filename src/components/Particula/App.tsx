"use client";

import React, { useState } from "react";
import LoadingRomantico from "@/PageQRCode/";
import CartaAmada from "@/PageQRCode"; // ou onde estiver sua carta

// componente das particulas

export default function PageQRCode() {
  const [mostrarCarta, setMostrarCarta] = useState(false);

  return (
    <>
      {!mostrarCarta ? (
        <LoadingRomantico onFinish={() => setMostrarCarta(true)} />
      ) : (
        <CartaAmada />
      )}
    </>
  );
}
