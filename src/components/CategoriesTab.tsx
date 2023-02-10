import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getAllCategories } from '../api/getProducts'

type Props = {
    category: string | undefined,
    setCategory: (value: string | undefined) => void
}

function CategoriesTab({category, setCategory}: Props) {

    const queryClient = useQueryClient()

    const {isLoading, isFetching, isError, error, data} = useQuery<string[]>(['categories'], ()=>getAllCategories(),{staleTime:Infinity, cacheTime:Infinity,refetchOnMount:false, refetchOnWindowFocus:false})

    useEffect(() => {
      
        console.log(category)
    
      return () => {
        
      }
    }, [category])
    

  return (
    <div className='py-2 flex gap-2 w-full flex-wrap'>
        <button onClick={()=>setCategory(undefined)} className={`${category === undefined ? 'button-primary' : 'button-secundary'} text-sm`}>all</button>
        {
            data && data.map((cat,i)=><button key={i} onClick={()=>setCategory(cat)} className={`${category === cat ? 'button-primary' : 'button-secundary'} text-sm`}>{cat}</button>)
        }
    </div>
  )
}

export default CategoriesTab