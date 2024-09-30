import React, { useState } from 'react'

import PropTypes from 'prop-types'
import styles from './tab-selector2.module.css'
import { useTranslations } from 'next-intl'
import { DownOutlined } from '@ant-design/icons'

const TabSelector2 = ({
  rootClassName = '',
  image1Alt = '',
  image1Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image2Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image3Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image3Alt = 'image',
  image2Alt = 'image',
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const t = useTranslations('discoverClaim')

  return (
    <>
      <div className={`${styles['tab-selector2-container']} ${rootClassName}`}>
        <div className={styles['tab-selector2-tabs-menu']}>
          <div onClick={() => setActiveTab(0)} className={styles['tab-selector2-tab-horizontal1']}>
            <div className={styles['tab-selector2-divider-container1']}>
              {activeTab === 0 && <div className={styles['tab-selector2-divider1']}></div>}
            </div>
            <div className={styles['tab-selector2-content1']}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span className={styles['tab-selector2-text1']}>{t('headers.header4')}</span>
                {activeTab !== 0 ? <DownOutlined className="faqs-arrow-icon" /> : null}
              </div>
              {activeTab === 0 && (
                <div className={styles['tab-selector-text']}>
                  <span className={styles['tab-selector2-text2']}>{t('texts.text7')}</span>
                </div>
              )}
            </div>
          </div>

          <div onClick={() => setActiveTab(1)} className={styles['tab-selector2-tab-horizontal2']}>
            <div className={styles['tab-selector2-divider-container2']}>
              {activeTab === 1 && <div className={styles['tab-selector2-divider2']}></div>}
            </div>
            <div className={styles['tab-selector2-content2']}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span className={styles['tab-selector2-text3']}>{t('headers.header5')}</span>
                {activeTab !== 1 ? <DownOutlined className="faqs-arrow-icon" /> : null}
              </div>
              {activeTab === 1 && (
                <div className={styles['tab-selector-text']}>
                  <span className={styles['tab-selector2-text4']}>{t('texts.text8')}</span>
                  <ul>
                    <li className={styles['li']}>{t('texts.listItems.item14')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item15')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item16')}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`tab-selector-img-container ${styles['tab-selector2-image-container']}`}>
          {activeTab === 0 && <img alt={image1Alt} src={image1Src} className="tab-selector-img" />}
          {activeTab === 1 && <img alt={image2Alt} src={image2Src} className="tab-selector-img" />}
          {activeTab === 2 && <img alt={image3Alt} src={image3Src} className="tab-selector-img" />}
        </div>
      </div>
    </>
  )
}

TabSelector2.propTypes = {
  rootClassName: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default TabSelector2
