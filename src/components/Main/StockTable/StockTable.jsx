import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styles from '../Main.module.css'
import { PrevNextButtons } from './PrevNextButtons/PrevNextButtons'
import { StockElements } from './StockElements/StockElements'
import { useSelector, useDispatch } from 'react-redux'
import { setRows } from '../../../store/Slice/stockSlice'



export const StockTable = () => {
    const dispatch = useDispatch()
    const rows = useSelector((state) => { return state.user.rows })

    const onDragEnd = (result) => {
        const newRows = [...rows];
        const [removed] = newRows.splice(result.source.index, 1);
        newRows.splice(result.destination.index, 0, removed);
        dispatch(setRows(newRows))
    }

    return (
        <div className={styles.tableContainer}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <table  ref={provided.innerRef} className={styles.table} border={1}>
                            <thead>
                                <tr>
                                    <th>Название акции</th>
                                    <th>Цена спроса</th>
                                    <th>Величина спроса</th>
                                    <th>Цена продажи</th>
                                    <th>Величина предложения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <StockElements />
                                {provided.placeholder}
                            </tbody>
                    </table>
                    )}
                </Droppable>
                <PrevNextButtons />
            </DragDropContext>
        </div>
    )
}