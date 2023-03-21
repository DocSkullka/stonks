import styles from '../../Main.module.css'
import { useDispatch } from 'react-redux'
import { setCount, setPopupFlag } from '../../../../store/Slice/stockSlice'
import { useSelector } from 'react-redux'

export const PrevNextButtons = () => {
    const count = useSelector((state) => { return state.user.count })
    const data = useSelector((state) => { return state.user.data })
    const popupFlag = useSelector((state) => { return state.user.popupFlag})
    const dispatch = useDispatch()

    const minusCount = () => {
        count <= 0 ? dispatch(setCount(0)) : dispatch(setCount(count - 1))
    }

    const plusCount = () => {
        Math.floor(count * 10) >= [...data].length ? dispatch(setCount(0)) : dispatch(setCount(count + 1))
    }

    const openModal = () =>{
        popupFlag ? dispatch(setPopupFlag(false)) : dispatch(setPopupFlag(true))
    }

    return (
        <div className={styles.btns}>
            <button onClick={minusCount}>&#8592;</button>
            <button onClick={openModal}>Поиск Акций</button>
            <button onClick={plusCount}>&#8594;</button>
        </div>
    )
}