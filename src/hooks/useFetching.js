import React from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState('')
    async function fetching () {
        try {
           await callback()
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