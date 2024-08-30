import type { Metadata } from 'next'
import ThemeRegistry from './ThemeRegistry'
import './globals.css'
import { Grid } from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Background from '@/components/background'
import NavBreadcrumbs from '@/components/Header/breadcrumbs'
import NextAuthProvider from '@/components/LoginComponents/client'
export const metadata: Metadata = {
  title: 'CFDE Data Portal',
  description: '',
  icons: {
    icon: '/img/favicon.png', // /public path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <NextAuthProvider>
            <Grid container justifyContent={'space-between'} direction={"column"} sx={{minHeight: "100vh", marginTop: 2}}>
              <Grid item><Header/></Grid>
                <Grid item className="flex grow">
                  <Background background='#EDF0F8'>
                    <NavBreadcrumbs/>
                    {children}
                  </Background>
                </Grid>
                <Grid item><Footer/></Grid>
            </Grid>
          </NextAuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
