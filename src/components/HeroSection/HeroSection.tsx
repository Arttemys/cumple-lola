import { Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "../CustomTypography/CustomTypography";
import Background from '../../../public/background.jpeg'

export const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  return <>
    <Grid container sx={{ height: '100dvh', justifyContent: 'center', alignItems: 'center' }}>
      {isMobile ? <Image
        alt="hero-banner"
        src={Background}
        style={{
          width: '100dvw',
          height: '100dvh',
          maxHeight: '100dvh',
          position: 'absolute',
          zIndex: -1,
          objectFit: 'cover'
        }}
      /> : <Image
        alt="hero-banner"
        src={Background}
        fill={true}
        style={{
          position: 'absolute',
          top: 0,
          zIndex: -1
        }}
      />}

      <Grid size={6} spacing={2} container justifyContent={'center'}>
        <CustomTypography variant="h2" color="primary" fontWeight={700} align="center"
          label="Mis XV Lola" />
        <CustomTypography variant="h3" color="primary" fontWeight={700} align="center"
          label="Acompañame en esta noche especial" />
      </Grid>
    </Grid >
  </>
}