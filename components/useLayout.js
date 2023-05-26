import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function useLayout() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return {}

    return {
        theme,
        setTheme,
    }
}
