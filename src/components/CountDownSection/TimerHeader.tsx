import styles from './CountDownSection.module.css'
import { CustomTypography } from "../CustomTypography/CustomTypography"
import { isMobile } from "react-device-detect";


export const TimerHeader = () => {
  return <div className={styles.timerHeader}>
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="11 de Octubre de 2025"
      letterSpacing={2}
    />
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="¡Te esperamos para celebrar!"
      fontStyle={"italic"}
      mb={3}
      fontFamily={'kalam'}
      align='center'
    />
    {/* <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="¡Los invitamos a celebrar nuestro matrimonio!"
      color="white"
      align='center'
    /> */}
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="Faltan..."
      letterSpacing={2}
    />
  </div>
}