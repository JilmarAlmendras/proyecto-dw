"use client";

import BuscarProducto from "@/components/buscar-producto";
import RealizarVenta from "@/components/realizar-venta";

function VentasPage() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Realizar venta</h1>
      </div>
      <div className="flex gap-3">
        <RealizarVenta />
        <BuscarProducto />
      </div>
    </div>
  );
}

export default VentasPage;
