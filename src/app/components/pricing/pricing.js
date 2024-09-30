import React from 'react'
import styles from './pricing.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Pricing = () => {
  const t = useTranslations()

  const handleClick = () => {
    window.open('https://console.claimit.app', '_blank')
  }

  return (
    <>
      <div className={`${styles['tab-selector1-container']}`}>
        <div className={styles['w-100']}>
          <div>
            <p className={styles['tab-selector1-text1']}>{t('pricing.title')}</p>
            <p className={styles['tab-selector1-text2']}>{t('pricing.texts.text10')}</p>
          </div>

          <div className={styles['pricings-cards-container']}>
            <div className={styles['main-cards-container']}>
              <div className={styles['card']}>
                <div className={styles['wraper-container-texts']}>
                  <div className={styles['card-texts-container']}>
                    <span className={styles['card-text1']}>BASIC</span>
                    <span className={styles['card-text2']}>$5/{t('pricing.month')}</span>
                    <span className={styles['card-text3']}>PER USER</span>
                  </div>
                  <div className={styles['card-check-options']}>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text1')}</span>
                    </div>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text2')}</span>
                    </div>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text3')}</span>
                    </div>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text4')}</span>
                    </div>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text5')}</span>
                    </div>
                  </div>
                </div>
                <div className={styles['button-card-container']}>
                  <button onClick={handleClick} className={styles['button-card']}>
                    {t('pricing.getStarted')}{' '}
                  </button>
                </div>
              </div>
              <div className={styles['card']}>
                <div className={styles['wraper-container-texts']}>
                  <div className={styles['card-texts-container']}>
                    <span className={styles['card-text1']}>ENTERPRISE</span>
                    <span className={styles['card-text2']}>$7/{t('pricing.month')}</span>
                    <span className={styles['card-text3']}>PER USER</span>
                  </div>

                  <div className={styles['card-check-options']}>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text5')}</span>
                    </div>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['special-text-color']}>
                        {t('pricing.texts.text6')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles['button-card-container']}>
                  <button onClick={handleClick} className={styles['button-card']}>
                    {t('pricing.getStarted')}
                  </button>
                </div>
              </div>
              <div className={styles['card']}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className={styles['card-texts-container']} style={{ height: '47%' }}>
                    <span className={styles['card-text1']}>CUSTOM</span>
                    <span className={styles['card-text2-special']}>{t('pricing.contactUs')}</span>
                  </div>
                  <div
                    style={{ marginTop: 10, height: '53%' }}
                    className={styles['card-check-options']}
                  >
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['text-description']}>{t('pricing.texts.text7')}</span>
                    </div>
                    <div className={styles['check-option-container']}>
                      <Image
                        alt="icon"
                        src={
                          'https://storage.googleapis.com/claimit-app-landing-assets/assets/check.svg'
                        }
                        width={25}
                        height={25}
                      />
                      <span className={styles['special-text-color']}>
                        {t('pricing.texts.text8')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles['button-card-container']}>
                  <button onClick={handleClick} className={styles['button-card']}>
                    {t('pricing.contact')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
