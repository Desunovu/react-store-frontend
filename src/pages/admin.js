import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import AdminDrawer from "../components/admin_panel/AdminDrawer";
import UsersMenu from "../components/admin_panel/users/UsersMenu";
import ProductMenu from "../components/admin_panel/products/ProductMenu";
import CategoriesMenu from "../components/admin_panel/categories/CategoriesMenu";
import CharacteristicMenu from "../components/admin_panel/characteristics/CharacteristicMenu";
import OrdersMenu from "../components/admin_panel/OrdersMenu";

function Admin() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const actions = [
    { index: 0, text: "Пользователи" },
    { index: 1, text: "Товары" },
    { index: 2, text: "Категории" },
    { index: 3, text: "Характеристики" },
    { index: 4, text: "Заказы" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AdminDrawer
        actions={actions}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {(() => {
          switch (selectedIndex) {
            case 0: {
              return <UsersMenu />;
            }
            case 1:
              return <ProductMenu />;
            case 2:
              return <CategoriesMenu />;
            case 3:
              return <CharacteristicMenu />;
            case 4:
              return <OrdersMenu />;
            default:
              return null;
          }
        })()}
      </Box>
    </Box>
  );
}

export default Admin;
