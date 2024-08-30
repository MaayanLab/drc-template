'use client'
import React from 'react'
import Link from '@/utils/link'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { usePathname } from 'next/navigation'

export default function NavBreadcrumbs() {
    const path = usePathname()
    const { path_split, format_path_split } = React.useMemo(() => {
        let path_split = path.replace("/", "").split("/")
        const format_path_split = path_split.map(p => decodeURIComponent(p).replace('_', ' '))
        return {path_split, format_path_split}
    }, [path])
    if (path_split.length < 2) return null
    return (
        <Breadcrumbs aria-label="breadcrumb" separator="›">
            {format_path_split.map((p, i) => (
                i === path_split.length - 1 ? (
                    <Typography key={i} variant='caption' sx={{ textTransform: 'uppercase', cursor: 'pointer' }} color='secondary'>{p}</Typography> // leaf node breadcrumb not clickable
                ) : (
                    <Link
                        key={i}
                        href={`/${path_split.slice(0, i + 1).join("/")}`}
                    >
                        <Typography variant='caption' sx={{ textTransform: 'uppercase' }} color='inherit'>{p}</Typography>
                    </Link>
                )
            ))}
        </Breadcrumbs>
    )
}