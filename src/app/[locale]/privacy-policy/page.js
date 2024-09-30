'use client'
import React from 'react'
import Head from 'next/head'
import Footer from '../../components/footer/footer'
import styles from './privacy-policy.module.css'
import { useTranslations } from 'next-intl'
import CompanyContact from '@/app/components/companyContact/companyContact'

const PrivacyPolicy = () => {
  const t = useTranslations('privacyPage')

  return (
    <>
      <div className={`${styles['privacy-policy-container1']}`}>
        <Head>
          <title>{t('title')}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Manage employees, contractor, salaries, vacations, timesheets, invoicing, projects, contracts, timesheets, reports, projects, finance, reports, AI predictions."
          />
          <meta property="og:title" content="Privacy Policy - Claim IT" />
          <meta
            property="og:description"
            content="Claim IT is here to revolutionise the way you manage your business! Our innovative AI based solution streamlines operational tasks into one user-friendly AI based platform."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4f3f1a87-25a2-4434-81fe-ed9f858cd831/f88b6daf-c5e5-416d-a0b1-e5ca87b18b12?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <main className="privacy-policy-main">
          <div className={`${styles['privacy-policy-content1']} section-container`}>
            <div className={`${styles['privacy-policy-max-width1']} max-width-container`}>
              <h1 className={styles['privacy-policy-text10']}>{t('headers.header1')}</h1>
              <p>{t('texts.text1')}</p>
              <ol className={`${styles['privacy-policy-ul']} list`}>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text13']}>{t('headers.header2')}:</span>
                    <span>{t('texts.text2')}</span>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text16']}>{t('headers.header3')}:</span>
                    <span>{t('texts.text3')}</span>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text19']}>{t('headers.header4')}:</span>
                    <span>{t('texts.text4')}</span>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text22']}>{t('headers.header5')}:</span>
                    <span>{t('texts.text5')}</span>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text25']}>{t('headers.header6')}:</span>
                    <span>{t('texts.text6')}</span>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text28']}>{t('headers.header7')}:</span>
                    <span>{t('texts.text7')}</span>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span className={styles['privacy-policy-text31']}>{t('headers.header8')}:</span>
                    <span>{t('texts.text8')}</span>
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <CompanyContact />
        </main>
      </div>
    </>
  )
}

export default PrivacyPolicy
