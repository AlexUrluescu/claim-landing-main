import React from 'react'
import styles from './timeline.module.css'
import { useTranslations } from 'next-intl'

const Timeline = () => {
  const t = useTranslations('unlockSucces')
  return (
    <>
      <div className={styles['timeline-timeline'] ? styles['timeline-timeline'] : ''}>
        <div className={styles['timeline-timeline-item1'] ? styles['timeline-timeline-item1'] : ''}>
          <div className={styles['timeline-content1'] ? styles['timeline-content1'] : ''}>
            <img
              alt="IconRelumeI312"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/person.svg"
              className={styles['timeline-icon-relume1'] ? styles['timeline-icon-relume1'] : ''}
            />
            <div className="divider-vertical"></div>
          </div>
          <div className={styles['timeline-content2'] ? styles['timeline-content2'] : ''}>
            <span className={styles['timeline-header']}>{t('headers.header1')}</span>
            <span className={styles['timeline-text']}>{t('texts.text1')}</span>
          </div>
        </div>
        <div className={styles['timeline-timeline-item2'] ? styles['timeline-timeline-item2'] : ''}>
          <div className={styles['timeline-content3'] ? styles['timeline-content3'] : ''}>
            <img
              alt="IconRelumeI312"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/dollar.svg"
              className={styles['timeline-icon-relume2'] ? styles['timeline-icon-relume2'] : ''}
            />
            <div className="divider-vertical"></div>
          </div>
          <div className={styles['timeline-content4'] ? styles['timeline-content4'] : ''}>
            <span className={styles['timeline-header']}>{t('headers.header2')}</span>
            <span className={styles['timeline-text']}>{t('texts.text2')}</span>
          </div>
        </div>
        <div className={styles['timeline-timeline-item3'] ? styles['timeline-timeline-item3'] : ''}>
          <div className={styles['timeline-content5'] ? styles['timeline-content5'] : ''}>
            <img
              alt="IconRelumeI312"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/copy.svg"
              className={styles['timeline-icon-relume3'] ? styles['timeline-icon-relume3'] : ''}
            />
            <div className="divider-vertical"></div>
          </div>
          <div className={styles['timeline-content6'] ? styles['timeline-content6'] : ''}>
            <span className={styles['timeline-header']}>{t('headers.header3')}</span>
            <span className={styles['timeline-text']}>{t('texts.text3')}</span>
          </div>
        </div>
        <div className={styles['timeline-timeline-item3'] ? styles['timeline-timeline-item3'] : ''}>
          <div className={styles['timeline-content5'] ? styles['timeline-content5'] : ''}>
            <img
              alt="IconRelumeI312"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/quality.svg"
              className={styles['timeline-icon-relume3'] ? styles['timeline-icon-relume3'] : ''}
            />
            <div className="divider-vertical"></div>
          </div>
          <div className={styles['timeline-content6'] ? styles['timeline-content6'] : ''}>
            <span className={styles['timeline-header']}>{t('headers.header5')}</span>
            <span className={styles['timeline-text']}>{t('texts.text5')}</span>
          </div>
        </div>
        <div className={styles['timeline-timeline-item4'] ? styles['timeline-timeline-item4'] : ''}>
          <div className={styles['timeline-content7'] ? styles['timeline-content7'] : ''}>
            <img
              alt="IconRelumeI312"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/thumbs-up.svg"
              className={styles['timeline-icon-relume4'] ? styles['timeline-icon-relume4'] : ''}
            />
          </div>
          <div className={styles['timeline-content8'] ? styles['timeline-content8'] : ''}>
            <span className={styles['timeline-header']}>{t('headers.header4')}</span>
            <span className={styles['timeline-text']}>{t('texts.text4')}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
