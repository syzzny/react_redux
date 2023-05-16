import { createSlice } from "@reduxjs/toolkit";

export const memoSlice = createSlice({
    name : "memo",
    initialState : [
        {
            id: 1,
            text: "메모입니다",
            date: "2023-05-15"
        }
    ],
    reducers : {
        addMemoToolkit: (state, action) => {
            const newMemo = {
                ...action.payload,
                id : id
            }
            state.push(newMemo)
        },
        deleteMemoSplice: (state, action) => {
            state.splice(action.payload, 1);
        },
        toggleLike: (state, action) =>{
            const id = action.payload;
            const memoItem = state.find((memo)=>memo.id===id);

            if(memoItem) {
                memoItem.liked = !memoItem.liked;
            }
        }
    }
})

let id =2;
export const {addMemoToolkit, deleteMemoSplice, toggleLike} = memoSlice.actions
export default memoSlice.reducer