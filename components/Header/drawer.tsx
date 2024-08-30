'use client'
import { useState } from "react"
import Link from "@/utils/link";
import { Button, Stack, Divider, Typography } from "@mui/material"
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Logo } from './logo'
import MenuIcon from '@mui/icons-material/Menu';
import UserComponent from "../LoginComponents/UserComponent";
import { TextNav } from "./client";
import { Session } from "next-auth"

export const DRCDrawer = ({nav, session}: {nav: Array<{href: string, title: string}>, session: Session | null}) => {
	const [open, setOpen] = useState(false)
	const theme = useTheme();
  	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	return (
		<>
			<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
				<Logo title="CFDE Workbench" href={"/"} size={matches ? 'large': 'small'} color="secondary"/>
				<div className="flex">
					<Button color="secondary" onClick={()=>setOpen(!open)}><MenuIcon/></Button>
					{session !== null &&  <UserComponent session={session}/>}
				</div>
			</Stack>
			<Drawer open={open} onClose={()=>setOpen(false)}>
				<Stack spacing={2} sx={{padding: 2}} justifyContent={"flex-start"}>
					<div className="flex flex-col">
						<Link href="/info"  onClick={()=>setOpen(false)}>
							<Typography variant="nav"><b>Information Portal</b></Typography>
						</Link>
						<Link href={"/data"}  onClick={()=>setOpen(false)}>
							<Typography variant="nav"><b>Data Portal</b></Typography>
						</Link>
					</div>
					<Divider/>
					<div className="flex flex-col">
					{
						nav.map(({title, href})=>(
							<Link href={`${href}`} key={title} onClick={()=>setOpen(false)}>
								<TextNav title={title} path={href}/>
							</Link>
						))
					}
					</div>
					<Divider/>
					<Logo title="CFDE Workbench" href={"/"} size={'small'} color="secondary"/>
					{session === null &&  <UserComponent session={session}/>}
				</Stack>
			</Drawer>
		</>
	)
}