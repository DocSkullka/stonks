import styles from '../../Main.module.css'
import { useSelector, useDispatch } from "react-redux"
import { setSymbol, setInputRefState, setPromptFlag } from '../../../../store/Slice/stockSlice'
import {  useRef } from 'react'

export const PromptData = () => {
    const prompt = useRef(null)
    const dispatch = useDispatch()
    const data = useSelector((state) => { return state.user.data })
    const inputRefState = useSelector((state) => { return state.user.inputRefState})

    const handlerClick = (e) => {
        dispatch(setSymbol(e.target.textContent.toLowerCase()))
        dispatch(setInputRefState(e.target.textContent))
        dispatch(setPromptFlag(false))
    }

    return (
        <div className={styles.promptContainer}>
            {[...data].filter(({symbol}) =>
                symbol.toLowerCase().includes(inputRefState.toLowerCase())
            ).slice(0, 5).map((el, index) => {
                return(
                    <p key={index} onClick ={handlerClick} ref={prompt} >{el.symbol}</p>
                )
            })}
        </div>
    )
}