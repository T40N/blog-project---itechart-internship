import { createSlice } from "@reduxjs/toolkit";
import { postDelete, postEdit, postsGet, newPost } from "../actions/postsActions";
import {
  getUser,
  logIn,
  logOut,
  register,
  userEdit,
} from "../actions/userActions";

const initialState = {
  isLoading: true,
  isError: false,
};

const handlerSlice = createSlice({
  name: "handlers",
  initialState,
  reducers: {
    rejected(state, action) {
      return {
        isLoading: false,
        isError: true,
      };
    },
    pending(state, action) {
      return {
        isLoading: true,
        isError: false,
      };
    },
    reset(state, action) {
      return {
        isLoading: false,
        isError: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //  .addCase(newPost.pending, () => {
      //   return {
      //     isLoading: true,
      //     isError: false,
      //   };
      //  })
      //  .addCase(newPost.rejected, () => {
      //   return {
      //     isLoading: false,
      //     isError: true,
      //   };
      //  })
      //  .addCase(newPost.fulfilled, () => {
      //   return {
      //     isLoading: false,
      //     isError: false,
      //   };
      //  })
      .addCase(postsGet.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(postsGet.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(postsGet.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(postDelete.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(postDelete.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(postDelete.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(postEdit.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(postEdit.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(postEdit.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(getUser.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(getUser.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(getUser.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(userEdit.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(userEdit.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(userEdit.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(logIn.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(logIn.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(logIn.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(register.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(register.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(register.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      })
      .addCase(logOut.pending, () => {
        return {
          isLoading: true,
          isError: false,
        };
      })
      .addCase(logOut.rejected, () => {
        return {
          isLoading: false,
          isError: true,
        };
      })
      .addCase(logOut.fulfilled, () => {
        return {
          isLoading: false,
          isError: false,
        };
      });
  },
});

export const { reset, pending, rejected } = handlerSlice.actions;
export default handlerSlice;
