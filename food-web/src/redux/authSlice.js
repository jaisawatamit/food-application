import { createSlice } from '@reduxjs/toolkit';
// const tokenFromStorage = localStorage.getItem('token');
// const userFromStorage = JSON.parse(localStorage.getItem('user'));

// const initialState = {
//   token: tokenFromStorage || null,
//   user: userFromStorage || null,
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null, // Store the token here
    user: null,  // Optionally store user details
  },
  reducers: {
    loginUser: (state, action) => {
      state.token = action.payload.token; // Set the token
      state.user = action.payload.user;   // Optionally set user details
      // localStorage.setItem('token', action.payload.token);
      // localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logoutUser: (state) => {
      state.token = null; // Clear the token
      state.user = null;  // Clear user details
    },
    registerUser: (state, action) => {
      // Registration logic (if needed)
      const { email, password } = action.payload;
      state.user = { email, password }; // Optionally store user details
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;