'use client'
import { Typography } from "@mui/material"
import { usePathname } from "next/navigation"

export  function TextNav({title, path}: {title: string, path: string}) {
	const pathname = usePathname()
	let sx
	console.log(path, pathname)
	if ((pathname === path)) {
		sx = {textDecoration: "underline", textDecorationThickness: 2}
	}
	return(
		<Typography variant="nav" sx={sx}><b>{title}</b></Typography>
	)
}