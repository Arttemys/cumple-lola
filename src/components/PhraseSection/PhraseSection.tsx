import { Box, Grid2 as Grid } from "@mui/material"
import { CustomTypography } from "../CustomTypography/CustomTypography"

import Image from "next/image";
import { isMobile } from "react-device-detect";
import styles from '@/components/PlaceSection/PlaceSection.module.css'
import Link from "next/link";


interface sections {
  title: string,
  value: string,
  src: string,
  url?: string,
  cbu?: string,
  alias?: string,
  text: string
  colores?: string
}

export const PhraseSection = () => {

  const sections: { [key: string]: sections } = {
    DRESS_CODE: {
      title: 'Dress Code',
      value: 'dress_code',
      src: '/wedding-dress.gif',
      text: `Para nosotros la vestimenta es importante, por eso recomendamos NO UTILIZAR los siguientes colores y vestir de manera elegante`,
      colores: 'Bordo, Azul y Plateado'
    },
    GIFT: {
      title: 'Regalo',
      value: 'gift',
      src: '/gift.gif',
      cbu: '0000003100099292978913',
      alias: 'lolaamoyaa',
      text: 'Opcion de regalo, si deseas hacerlo, puedes hacerlo a traves de transferencia.'
    }
  }

  return <Grid sx={{ height: 'auto', backgroundColor: 'white' }}>
    <Grid size={12}>
      <div className={styles.hDivider}>
        <div className={styles.shadow}></div>
      </div>
    </Grid>
    <Grid container spacing={5} size={12} py={5} px={isMobile ? 2 : 16} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={12}>
        <CustomTypography variant={isMobile ? 'h5' : 'h4'} color="primary" fontWeight={300} letterSpacing={2} align="center" label="¿Dudas?" />
        <CustomTypography variant={isMobile ? 'h5' : 'h4'} color="primary" fontWeight={400} letterSpacing={2} align="center" label="Te contamos todos los detalles" mt={1} fontFamily={'kalam'} />
      </Grid>

      {Object.values(sections).map((section) => {
        return (
          <Grid key={section.title} size={isMobile ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', mt: isMobile ? 2 : 0 }}>
              <Image
                alt="wedding-dress"
                src={section.src}
                width={80}
                height={80}
              />
              <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary" fontWeight={isMobile ? 400 : 300} align="center" label={section.text} />
              {section.cbu && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`CBU: ${section.cbu}`} mt={1} />}
              {section.alias && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`Alias: ${section.alias}`} />}
              {section.url && <Link href={section.url} target="_blank"><CustomTypography variant="h6" color="primary" sx={{ textDecoration: 'underline' }} fontWeight={700} label='Salon Williams' mt={1} /></Link>}
              {section.colores && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`Colores: ${section.colores}`} mt={1} />}
            </Box>
          </Grid>
        )
      })}
    </Grid>
  </Grid >
}