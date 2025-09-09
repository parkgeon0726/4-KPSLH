import { useState } from 'react'
import { format, addDays, startOfMonth } from 'date-fns'

const today = new Date()
const firstDay = startOfMonth(today)

function Calendar() {
    return(
    console.log(format(today, 'yyyy-MM-dd'))  // "2025-09-01"
    )
}
export default Calendar;
