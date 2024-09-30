import React from 'react'
import styles from './nativeUi.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const NativeUi = () => {
  const t = useTranslations()
  return (
    <>
      <div className={`${styles['tab-selector1-container']}`}>
        <div>
          <div className={styles['phone-images-container']}>
            <div className="image-container">
              <Image
                style={{ width: '100%' }}
                alt={'phone'}
                src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/phone1.svg'}
                width={300}
                height={400}
              />
            </div>
            <div className="image-container">
              <Image
                style={{ width: '100%' }}
                alt={'phone'}
                src={'https://storage.googleapis.com/claimit-app-landing-assets/assets/phone2.svg'}
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className={styles['tab-selector1-tabs-menu']}>
          <div className={styles['tab-selector1-tab-horizontal3']}>
            <div className={styles['tab-selector1-content3']}>
              <div className={styles['header-title']} style={{ width: '78%' }}>
                <p className={styles['tab-selector1-text5']}>{t('native.header')}</p>
              </div>
              <div className={styles['content-container']}>
                <p className={styles['tab-selector1-text6']}>{t('native.text')}</p>
              </div>
              <div className={styles['download-store']}>
                <div>
                  <img
                    src={
                      'https://storage.googleapis.com/claimit-app-landing-assets/assets/appStore.svg'
                    }
                  />
                </div>
                <div>
                  <img
                    src={
                      'https://storage.googleapis.com/claimit-app-landing-assets/assets/googlePlay.svg'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NativeUi
