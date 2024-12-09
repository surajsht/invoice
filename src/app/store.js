import { configureStore } from "@reduxjs/toolkit";
import addInvoiceReducer from "../features/addInvoicePopup/AddPopupSlice";

export const store = configureStore({
  reducer: {
    addInvoicePopup: addInvoiceReducer,
  },
});
