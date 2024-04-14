import CartAlert from "@/components/Cart/CartAlert"
import SingInUser from "../components/SignInUser/SignInUser"
import React from 'react'
import Filter from "@/components/Filters/FilterAmbiente"
import FilterMaterial from "@/components/Filters/FilterMaterial"
import FilterPrecio from "@/components/Filters/FilterPrecio"
import SearchBar from "@/components/SearchBar/SearchBar"
import CardsDetail from "@/components/CardsDetail/CardsDetail"
import SellCart from "@/components/SellCart/SellCart"
import ResetPassword from "@/components/SignInUser/ResetPassword"

function ResetClave() {
  return (
    <div>
      <ResetPassword/>
    </div>
  )
}

export default ResetClave
