// import useSWR from 'swr'
// import { api } from '../api/client'
// import { useState } from 'react'

// const fetcher = url => api.get(url).then(res => res.data)

// export default function Stock() {
//   const { data, error } = useSWR('/stock/today?symbol=KOSPI', fetcher, {
//     refreshInterval: 60000
//   })

//   if (error) return <div>에러 발생</div>
//   if (!data) return <div>로딩중...</div>
//   return <div>{data.price}원</div>
// }

// export { useSWR };