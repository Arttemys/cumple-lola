import { Grid2 as Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from './PlaceSection.module.css'
import { isMobile } from "react-device-detect";


export const PlaceSection = () => {
  return <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 5, backgroundColor: 'white' }}>
    <Grid size={12}>
      <div className={styles.hDivider}>
        <div className={styles.shadow}></div>
      </div>
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Image
        alt="sombrero-de-fiesta"
        src='/sombrero-de-fiesta.png'
        width={60}
        height={60}
      />
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant={isMobile ? 'h4' : 'h2'}>Fiesta</Typography>
    </Grid>
    <Grid size={isMobile ? 8 : 6} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant={isMobile ? 'body1' : 'h5'} letterSpacing={2} align="center">
        Con mucha ilusión, los invito a compartir conmigo este dia tan especial.
        La celebracion se llevara a cabo en <span style={{ fontWeight: 'bold' }}>Salon La Bauta</span>, ubicado en <span style={{ fontWeight: 'bold' }}>Renato Cesarini 296, Roldan</span>.
        Les pedimos, por favor, que sean puntuales.
      </Typography>
    </Grid>
  </Grid>
}