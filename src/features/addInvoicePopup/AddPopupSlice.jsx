import { createSlice } from "@reduxjs/toolkit";

export const AddPopupSlice = createSlice({
  name: "addInvoicePopup",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openInvoicePopup: (state, action) => {
      state.isOpen = true;
    },
    closeInvoicePopup: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openInvoicePopup, closeInvoicePopup } = AddPopupSlice.actions;
export default AddPopupSlice.reducer;
