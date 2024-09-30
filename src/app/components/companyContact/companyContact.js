'use client'
import React from 'react'
import styles from './companyContact.module.css'
import { useTranslations } from 'next-intl'

const CompanyContact = () => {
  const t = useTranslations('contactDetails')
  return (
    <div id="contact" className={`${styles['privacy-policy-contact1']} section-container`}>
      <div className="max-width-container">
        <div className={`${styles['privacy-policy-contact2']}`}>
          <a
            href="mailto:office@claimit.app?subject=Details about ClaimIt"
            className={`${styles['privacy-policy-link26']}`}
          >
            <div className={`${styles['privacy-policy-content2']}`}>
              <img
                alt="IconenvelopeI524"
                src="https://storage.googleapis.com/claimit-app-landing-assets/assets/iconenvelopei524-wdv.svg"
                className={`${styles['privacy-policy-iconenvelope']}`}
              />
              <div className={`${styles['privacy-policy-contact-info1']}`}>
                <div className={`${styles['privacy-policy-content3']}`}>
                  <span className={`${styles['privacy-policy-text33']}`}>Email</span>
                </div>
                <span className={`${styles['privacy-policy-text34']}`}>office@claimit.app</span>
              </div>
            </div>
          </a>
          <a href="tel:+40 754 783 362" className={`${styles['privacy-policy-link27']}`}>
            <div className={`${styles['privacy-policy-content4']}`}>
              <img
                alt="IconphoneI524"
                src="https://storage.googleapis.com/claimit-app-landing-assets/assets/iconphonei524-hmzt.svg"
                className={`${styles['privacy-policy-iconphone']}`}
              />
              <div className={`${styles['privacy-policy-contact-info2']}`}>
                <div className={`${styles['privacy-policy-content5']}`}>
                  <span className={`${styles['privacy-policy-text35']}`}>{t('phone')}</span>
                </div>
                <span className={`${styles['privacy-policy-text36']}`}>+40 754 783 362</span>
              </div>
            </div>
          </a>
          <div className={styles['privacy-policy-content6']}>
            <img
              alt="IconmapI524"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/iconmapi524-1jy8.svg"
              className={styles['privacy-policy-iconmap']}
            />
            <div className={styles['privacy-policy-contact-info3']}>
              <div className={styles['privacy-policy-content7']}>
                <span className={styles['privacy-policy-text37']}>{t('office')}</span>
              </div>
              <span className={styles['privacy-policy-text38']}>
                Cluj-Napoca, România Constantin Brâncuși 55-57-59
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyContact
