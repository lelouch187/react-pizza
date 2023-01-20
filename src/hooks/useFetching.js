import React from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState('')
    async function fetching (sort,categ) {
        try {
            setIsLoading(true)
           await callback(sort,categ)
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