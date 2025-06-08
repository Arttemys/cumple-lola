import { Grid2 as Grid } from "@mui/material"
import Image from "next/image"
import { CustomTypography } from "../CustomTypography/CustomTypography"
import { isMobile } from "react-device-detect";



export const ConfirmSection = () => {
  return (
    <Grid container size={12} py={3} spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'primary.dark' }}>
      <Image
        alt="check-gif"
        src='/list.png'
        width={isMobile ? 75 : 75}
        height={isMobile ? 75 : 75}
      />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} align="center" label="CONFIRMACION DE ASISTENCIA" />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} fontFamily={'kalam'} align="center" fontStyle={"italic"} label="Esperamos que puedas asistir a este momento tan especial!" />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} align="center"

        label="Te pedimos que confirmes tu asistencia a traves de Whatsapp, enviando un mensaje con tu respuesta." />

    </Grid>
  )
}