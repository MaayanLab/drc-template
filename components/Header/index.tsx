

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'

import { 
	Grid,
	Toolbar,
	Stack,
	Typography,
	Box
} from '@mui/material';

import { Logo } from './logo'
import { DRCDrawer } from './drawer';

import Link from "@/utils/link"
import UserComponent from "../LoginComponents/UserComponent"
import { TextNav } from "./client"
import { Session, getServerSession } from "next-auth"

export const TopNav = async ({session}: {session: Session | null}) => {
	return (
	<>
	  <Link href="https://info.cfde.cloud">
		<Typography variant="nav"><b>Information Portal</b></Typography>
	  </Link>
	  <Link href={"https://data.cfde.cloud"}>
		<Typography variant="nav"><b>Data Portal</b></Typography>
	  </Link>
	  <UserComponent session={session}/>
	</>
  )}
  
  export const BottomNav = ({nav}: {nav: Array<{href: string, title: string}>}) => {
	return nav.map(({title, href})=>(
	  <Grid item key={title}>
		{ href.indexOf('http') > -1 ? 
		  <Link href={href} target="_blank" rel="noopener noreferrer">
			<Typography variant="nav">{title}</Typography>
		  </Link>:
		  <Link href={`${href}`}>
			<TextNav title={title} path={href}/>
		  </Link>
		}
	  </Grid>
	))
  }
  
const nav = [
  {title: "Home", href: "/"},
  {title: "Page", href: "/page"},
  {title: "Sub Page", href: "/page/subpage"},
]

export default async function Header() {
	const session = await getServerSession()
  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{color: "#000", display: {xs: "none", sm: "none", md: "block"}}}>
      <Toolbar>
			  <Grid container justifyContent={"space-between"} alignItems={"center"} spacing={2}>
          <Grid item>
            <Logo title="CFDE Workbench" href={"/"} size='large' color="secondary"/>
          </Grid>
          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <TopNav session={session}/>
            </Stack>
				  </Grid>
          <Grid item xs={12}> 
            <Grid container alignItems={"center"} spacing={2}>
              <BottomNav nav={nav}/>
            </Grid>
          </Grid>
          
          
        </Grid>
      </Toolbar>
      </AppBar>
	  <Box sx={{display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none"}}}>
		<Stack spacing={1}>
			<DRCDrawer nav={nav} session={session}/>
		</Stack>
	  </Box>
    </Container>
  )
}
