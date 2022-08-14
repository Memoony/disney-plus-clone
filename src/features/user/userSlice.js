import { createSlice } from "@reduxjs/toolkit";

//* Başlangıçta state bilgisi boş.
const initialState = {
    name: "",
    email: "",
    photo: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //* Kullanıcı login olduğunda state bilgisinin dolacağı fonksiyon.
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        //* Kullanıcı logout olduğunda state bilgisinin temizleneceği fonksiyon.
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

//* State içerisindeki değişkenlere diğer dosyalardan erişim sağlayabilmek için export ediliyor.
export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;