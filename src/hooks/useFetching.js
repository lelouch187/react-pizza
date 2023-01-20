import React from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState('')
    async function fetching (sort,categ,currentPage) {
        try {
            setIsLoading(true)
           await callback(sort,categ,currentPage)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}