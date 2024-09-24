import { useCallback, useEffect, useState } from 'react'
import ItemCard from '../Card/ItemCard'
import './products.css'
import axios from 'axios'

const Products = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    let getData = useCallback(() => {
        axios({
            method: 'GET',
            url: import.meta.env.VITE_API_URL
        }).then((res) => {
            console.log(res)
            setData(res.data)
        }).catch((error) => {
            console.log(error)

        })
    }, [])


    return (
        <div className="products">
            <div className="box">
                {
                    data.map((data) => {

                        return (
                            <ItemCard
                                key={data.id}
                                id={data.id}
                                image={data.image}
                                title={data.title}
                                price={data.price}
                                description={data.description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
