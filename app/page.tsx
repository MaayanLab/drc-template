import Image from "next/image";
import { Grid, Typography, Button, Stack, Card, CardContent, Avatar } from "@mui/material";
import { ElevatedIconButton } from "@/components/Header/Buttons";
export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant="cfde">cfde typography</Typography>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2">h2</Typography>
          <Typography variant="h3">h3</Typography>
          <Typography variant="h4">h4</Typography>
          <Typography variant="h5">h5</Typography>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="subtitle2">subtitle2</Typography>
          <Typography variant="caption">caption</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <Typography variant="h5">Button Examples</Typography>
            <Button color="secondary">Simple Button Secondary Color</Button>
            <Button variant="contained">Contained Button Primary Color</Button>
            <Button color="secondary" variant="contained">Contained Button Secondary Color</Button>
            <Button color="secondary" variant="outlined">Outlined Button Secondary Color</Button>
            <Typography variant="h5">Icon Button</Typography>
            <ElevatedIconButton
                aria-label="menu"
                sx={{width: 56, height: 56}}
            >
                <Image style={{marginLeft: -2, padding: 2,  objectFit: "contain"}} fill={true} alt="cfde-logo" src="/img/favicon.png" />
            </ElevatedIconButton>
          </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant="h5">Colors</Typography>
          <div className="flex space-x-2 items-center">
            <Avatar sx={{backgroundColor: 'primary.main'}}/>
            <Typography variant="body1">Primary Main</Typography>
          </div>
          <div className="flex space-x-2 items-center">
            <Avatar sx={{backgroundColor: 'primary.light'}}/>
            <Typography variant="body1">Primary Light</Typography>
          </div>
          <div className="flex space-x-2 items-center">
            <Avatar sx={{backgroundColor: 'primary.dark'}}/>
            <Typography variant="body1">Primary Dark</Typography>
          </div>
          <div className="flex space-x-2 items-center">
            <Avatar sx={{backgroundColor: 'secondary.main'}}/>
            <Typography variant="body1">Secondary Main</Typography>
          </div>
          <div className="flex space-x-2 items-center">
            <Avatar sx={{backgroundColor: 'secondary.light'}}/>
            <Typography variant="body1">Secondary Light</Typography>
          </div>
          <div className="flex space-x-2 items-center">
            <Avatar sx={{backgroundColor: 'secondary.dark'}}/>
            <Typography variant="body1">Secondary Dark</Typography>
          </div>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Importing Images:</Typography>
        <Card>
          <CardContent className="flex justify-center">
            <Image  width={500} height={500} alt="cfde-logo" src="/img/C2M2.png" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
