import { useDispatch, useSelector } from 'react-redux'
import { setSymbol, setInputRefState, setPromptFlag, setPopupFlag } from '../../../store/Slice/stockSlice'
import { InputStockElement } from './InputStockElement/InputStockElement'
import styles from '../Main.module.css'
import { useRef} from 'react'
import { PromptData } from './PromptData/PromptData'



export const InputStock = () => {
    const inputRef = useRef(null)
    const inputRefState = useSelector((state) => { return state.user.inputRefState})
    const promptFlag = useSelector((state) => { return state.user.promptFlag})
    const dispatch = useDispatch()


    const handleOnChange = (e) => {
        dispatch(setInputRefState(inputRef.current.value))
        dispatch(setSymbol(e.target.value))
        dispatch(setPromptFlag(true))
    }

    const closeModal = () => {
        dispatch(setPopupFlag(false))
    }

    return(
        <>
            <div className={styles.inputBackground} onClick={closeModal}></div>
            <div className={styles.inputContainer}>
                <div className={styles.inputText}>
                    <h1>Поиск акций</h1>
                </div>
                <input
                className={styles.input}
                type="text"
                placeholder="Введите  название акции..."
                onChange={handleOnChange}
                ref={inputRef}
                value = {inputRefState} />
                {promptFlag && <PromptData/>}
                {inputRefState.length > 0 && <InputStockElement/>}
            </div>
        </>
    )
}

