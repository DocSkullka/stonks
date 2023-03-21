import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../Main.module.css'

export const InputStockElement = () => {
    const symbol = useSelector((state) => { return state.user.symbol})
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_f0d2355379fb4e20824088c2b774fd80`)
            .then(data => setData(data.data))
            .catch(error => {
                console.log(error.message)
                setData([])
            })
    }, [symbol])


    return (
        data.length === 0 ? 
        <div className={styles.errorContainer}>
            <h1>Данной акции не существует</h1>
        </div> :
        <table className={styles.tableInput} border={1}>
                <thead>
                    <tr>
                        <th>Название компании</th>
                        <th>Цена открытия</th>
                        <th>Цена закрытия</th>
                        <th>Объём акций</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{data.companyName}</th>
                        <td align='center'>{data.iexOpen == null ? <p>Данные отсутствуют</p> : data.iexOpen + ' $'}</td>
                        <td align='center'>{data.iexClose == null ? <p>Данные отсутствуют</p> : data.iexClose + ' $'}</td>
                        <td align='center'>{data.avgTotalVolume == null ? <p>Данные отсутствуют</p> : data.avgTotalVolume}</td>
                    </tr>
                </tbody>
            </table>
    )
}