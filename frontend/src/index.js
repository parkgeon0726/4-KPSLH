import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()
const app = express()
app.use(cors())

app.get('/api/weather', async (req, res) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.WEATHER_API_KEY}`
  )
  res.json(data)
})
// 주식, 뉴스 엔드포인트 유사 방식