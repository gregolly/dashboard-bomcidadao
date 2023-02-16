import axios from "axios";
import { ChangeEvent, createContext, useEffect, useMemo, useState } from "react";

interface PropsOcurrence {
    category: string
    category_id: string
    createdAt: Date
    description: string
    id: number
    occurenceAddress: string | []
    occurrencePhoto: string | []
    occurenceUser: string | []
    status: string
    statud_id: string
    subcategory: string
    subcategory_id: string
    updateAt: Date
}

interface PropsOcurrenceContext {
    occurrences: PropsOcurrence[]
    handleCategoryChange: (event: ChangeEvent) => void
    handleStatusChange: (event: ChangeEvent) => void
    selectedCategory?: string
    selectedStatus?: string
    filteredList: PropsOcurrence[]
}

export const OccurrenceContext = createContext({} as PropsOcurrenceContext)

export function OccurrenceContextProvider({ children }: any) {
    const [occurrences, setOcurrences] = useState<PropsOcurrence[]>([])
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedStatus, setSelectedstatus] = useState();
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        getOccurrences()
    }, [])

    async function getOccurrences() {
        const response = await axios.get('http://localhost:3000/occurrences')

        setOcurrences(response.data)
    }

    function handleCategoryChange(event: ChangeEvent) {
        let value = (event.target as HTMLInputElement)?.value as any
        setSelectedCategory(value)
        const filteredByCategory = occurrences.filter((item) => item.category === event.target.value)
        setFilteredData(filteredByCategory as any)
    }

    function handleStatusChange(event: ChangeEvent) {
        let value = (event.target as HTMLInputElement)?.value as any
        setSelectedstatus(value)
        const filteredByStatus = occurrences.filter((item) => item.status === event.target.value)
        setFilteredData(filteredByStatus as any)
    }

    function getFilteredList() {
        if (!selectedCategory && !selectedStatus) {
            return occurrences
        }

        return filteredData
    }

    var filteredList = useMemo(getFilteredList, [filteredData, occurrences])

    return (
        <OccurrenceContext.Provider value={{ 
            occurrences, 
            handleCategoryChange,
            selectedCategory,
            handleStatusChange,
            selectedStatus,
            filteredList
        }}>
            { children }
        </OccurrenceContext.Provider>
    )
}