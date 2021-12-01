import {range} from "lodash";
import {differenceInCalendarDays, format} from "date-fns";

export function generateMarkedData(year, month, baseDate, cycle) {
    const result = new Map();
    const lastDay = new Date(year, month, 0).getDate()

    range(lastDay)
        .map(value => new Date(year, month, value + 1))
        .filter(value => (Math.abs(differenceInCalendarDays(baseDate, value)) % cycle) === 0)
        .filter(value => differenceInCalendarDays(baseDate, value) <= 0)
        .forEach(value => {
                result[format(value, 'yyyy-MM-dd')] = {
                    selected: true,
                    selectedColor: '#87ceeb'
                }
            }
        )

    result[format(new Date(), 'yyyy-MM-dd')] = {
        selected: true,
        selectedColor: '#000000'
    }

    return result
}

export default generateMarkedData()