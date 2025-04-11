"use client";

import React, { useState } from "react";
import LoadingRomantico from "@/components/LoadingRoman/App";
import CartaAmada from "@/app/PageQRCode/page"; // Certifique-se de que o caminho está correto

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
