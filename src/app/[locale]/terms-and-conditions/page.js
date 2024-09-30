'use client'
import React from 'react'
import Head from 'next/head'
import styles from './terms-and-conditions.module.css'
import { useTranslations } from 'next-intl'
import CompanyContact from '@/app/components/companyContact/companyContact'

const TermsAndConditions = () => {
  const t = useTranslations('terms')
  return (
    <>
      <div className={`${styles['terms-and-conditions-container1']}`}>
        <Head>
          <title>{t('title')}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Manage employees, contractor, salaries, vacations, timesheets, invoicing, projects, contracts, timesheets, reports, projects, finance, reports, AI predictions."
          />
          <meta property="og:title" content="Terms And Conditions - Claim IT" />
          <meta
            property="og:description"
            content="Claim IT is here to revolutionise the way you manage your business! Our innovative AI based solution streamlines operational tasks into one user-friendly AI based platform."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4f3f1a87-25a2-4434-81fe-ed9f858cd831/f88b6daf-c5e5-416d-a0b1-e5ca87b18b12?org_if_sml=1&amp;force_format=original"
          />
        </Head>

        <main className={`${styles['terms-and-conditions-main']}`}>
          <div className={`${styles['terms-and-conditions-content1']} section-container`}>
            <div className={`${styles['terms-and-conditions-max-width1']} max-width-container`}>
              <h1 className={'heading-1'}>{t('headers.header0')}</h1>
              <p>{t('texts.text1')}</p>
              <h4 className={styles['terms-and-conditions-text12']}>{t('headers.header1')}</h4>
              <span>{t('texts.text2')}</span>
              <ol className={`${styles['terms-and-conditions-ul10']} `}>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text14']}>
                    {t('headers.header2')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul11']} }`}>
                    <li className={'list-item'}>
                      <p>{t('texts.text3')}</p>
                    </li>
                    <li className={'list-item'}>
                      <p>{t('texts.text31')}</p>
                    </li>
                    <li className={'list-item'}>
                      <p>{t('texts.text32')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text18']}>
                    {t('headers.header3')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul12']} }`}>
                    <li className={'list-item'}>
                      <p>{t('texts.text4')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text20']}>
                    {t('headers.header4')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul13']} }`}>
                    <li className={'list-item'}>
                      <p>{t('texts.text5')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text22']}>
                    {t('headers.header5')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul14']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text6')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text24']}>
                    {t('headers.header6')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul15']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text7')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text26']}>
                    {t('headers.header7')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul16']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text8')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text28']}>
                    {t('headers.header8')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul17']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text9')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text30']}>
                    {t('headers.header9')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul18']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text10')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text32']}>
                    {t('headers.header10')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul19']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text11')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text34']}>
                    {t('headers.header11')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul20']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text12')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text36']}>
                    {t('headers.header12')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul21']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text13')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text38']}>
                    {t('headers.header13')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul22']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text14')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text40']}>
                    {t('headers.header14')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul23']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text15')}</p>
                    </li>
                    <li className={'list-item'}>
                      <p>{t('texts.text151')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text43']}>
                    {t('headers.header15')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul24']} `}>
                    <li className={'list-item'}>
                      <p>{t('texts.text16')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text45']}>
                    {t('headers.header16')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul25']} `}>
                    <li>
                      <p className={'list-item'}>{t('texts.text17')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text47']}>
                    {t('headers.header17')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul26']}`}>
                    <li className={'list-item'}>
                      <p>{t('texts.text18')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text49']}>
                    {t('headers.header18')}:
                  </span>
                  <ol className={`${styles['terms-and-conditions-ul27']}`}>
                    <li className={'list-item'}>
                      <p>{t('texts.text19')}</p>
                    </li>
                  </ol>
                </li>
                <li className={'list-item'}>
                  <span className={styles['terms-and-conditions-text51']}>
                    {t('headers.header19')}:
                  </span>
                  <ol className={styles['list']}>
                    <li className={'list-item'}>
                      <p>{t('texts.text20')}</p>
                    </li>
                  </ol>
                </li>
              </ol>
              <p className={styles['terms-and-conditions-text53']}>{t('final_notice')}</p>
            </div>
          </div>

          <CompanyContact />
        </main>
        <div></div>
      </div>
    </>
  )
}

export default TermsAndConditions
