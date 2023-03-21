import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setData, setRows } from '../../../../store/Slice/stockSlice'
import { useDispatch } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'


export const StockElements = () => {
    const count = useSelector((state) => { return state.user.count })
    const data = useSelector((state) => { return state.user.data })
    const rows = useSelector((state) => { return state.user.rows })
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://cloud.iexapis.com/stable/tops?token=pk_1bb84d63873e4421808a3726872dc902')
            .then(data => dispatch(setData(data.data)))
    }, [])

    useEffect(() => {
        dispatch(setRows([...data].slice(count*10, (count*10) + 10)))
    },[data ,count])


    return (
        <>
            {[...data].length === 0 ? <tr><td align='center'>Загрузка...</td></tr> : rows.map((el, index) => {
                return(
                    <Draggable key={index} draggableId={`${index}`} index={index}>
                        {(provided) =>(
                            <tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            >
                                <th>{el.symbol}</th>
                                <td align='center'>{el.bidPrice} $</td>
                                <td align='center'>{el.bidSize}</td>
                                <td align='center'>{el.askPrice} $</td>
                                <td align='center'>{el.askSize}</td>
                            </tr>
                        )}  
                    </Draggable>
                    
                )
            })}
        </>
    )
}