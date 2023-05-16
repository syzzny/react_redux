import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMemoToolkit, deleteMemoSplice ,toggleLike} from '../slices/memoSlice';

import style from './style.css'

export default function MemoComp() {
    const memo = useSelector((state) => (state.memo));
    const [input, setInput] = useState("");
    

    const like = (id) => {
        dispatch(toggleLike(id));
    };

    const dispatch = useDispatch()
    return (
        <div className='wrap'>
            <div className='memo_wrap'>
                {
                    memo.map((m, index) => (
                        <div key={m.id} className='memowrap'>
                            <p className='text'>{m.text}</p>
                            <p>{m.date}</p>
                            <button className='heartbtn' onClick={()=>like(m.id)}>
                                {m.liked ? '💛' : '🤍'}
                            </button>
                            <button className='deletentn' onClick={() => { dispatch(deleteMemoSplice(index)) }}>
                                💥
                            </button>
                        </div>
                    ))
                }

                <h2>MEMO</h2>
                <input className='input' type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
                <button className='addbtn' onClick={() => { dispatch(addMemoToolkit({ text: input, date: "2023-05-15" })) }}>
                    ✔
                </button>
            </div>
        </div>
    )
}
