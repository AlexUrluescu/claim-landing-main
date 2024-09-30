import React from 'react'
import Image from 'next/image'
import styles from './trustedCompany.module.css'
import { useTranslations } from 'next-intl'

const TrustedCompany = () => {
  const t = useTranslations('trusted')
  return (
    <div className={styles['main-container']}>
      <div className={styles['text-container']}>
        <span className={styles['text']}>{t('texts.text1')}</span>

        <span className={styles['text']}>{t('texts.text2')}</span>
      </div>
      <div className={styles['companies-container']}>
        <Image
          style={{ width: '100%' }}
          alt={'phone'}
          src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/webflow.svg'}
          width={50}
          height={50}
        />
        <Image
          style={{ width: '100%' }}
          alt={'phone'}
          src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/relume.svg'}
          width={50}
          height={50}
        />
        <Image
          style={{ width: '100%' }}
          alt={'phone'}
          src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/webflow.svg'}
          width={50}
          height={50}
        />
        <Image
          style={{ width: '100%' }}
          alt={'phone'}
          src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/relume.svg'}
          width={50}
          height={50}
        />
        <Image
          style={{ width: '100%' }}
          alt={'phone'}
          src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/webflow.svg'}
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default TrustedCompany
