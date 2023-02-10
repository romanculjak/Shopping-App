import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, {useEffect, useState} from 'react'
import { getAllCategories, getAllProducts, getAllProductsOrByCategory, getAllProductsWithLimit } from '../api/getProducts'
import CategoriesTab from '../components/CategoriesTab'
import ProductCard from '../components/ProductCard'
import { Product } from '../features/cart/cartSlice'

type Props = {}

function HomePage({}: Props) {

    const queryClient = useQueryClient()

    const [category, setCategory] = useState<string | undefined>(undefined)

    const {isLoading, isFetching, isError, error, data} = useQuery<Product[]>(['products',category], ()=>getAllProductsOrByCategory(category),{staleTime:Infinity, cacheTime:Infinity,refetchOnMount:false, refetchOnWindowFocus:false})


  return (
    <div>
        <div className='container'>
            <div>
                <CategoriesTab setCategory={setCategory} category={category}/>
            </div>

            <div className='grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4'>
                {
                    isLoading && <div>Is Loading...</div>
                }
                {

                    data ?
                    data.map((product) => (
                        <ProductCard product={product}/>
                      ))
                    
                    :
                    <></>
                }
            </div>
        </div>
    </div>
  )
}

export default HomePage