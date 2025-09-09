import { useState } from 'react'
import { format, addDays, startOfMonth } from 'date-fns'

const today = new Date()
const firstDay = startOfMonth(today)

console.log(format(today, 'yyyy-MM-dd'))  // "2025-09-01"
