import React, { useState } from 'react'
import styles from './tab-selector1.module.css'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import { DownOutlined } from '@ant-design/icons'

const TabSelector1 = ({
  image1Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image2Alt = 'image',
  rootClassName = '',
  image3Alt = 'image',
  image1Alt = '',
  image2Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image3Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const t = useTranslations('discoverClaim')

  return (
    <>
      <div className={`${styles['tab-selector1-container']} ${rootClassName}`}>
        <div className="tab-selector-img-container">
          {activeTab === 0 && <img alt={image1Alt} src={image1Src} className="tab-selector-img" />}
          {activeTab === 1 && <img alt={image2Alt} src={image2Src} className="tab-selector-img" />}
          {activeTab === 2 && <img alt={image3Alt} src={image3Src} className="tab-selector-img" />}
        </div>

        <div className={styles['tab-selector1-tabs-menu']}>
          {/* Tab 1 */}
          <div onClick={() => setActiveTab(0)} className={styles['tab-selector1-tab-horizontal1']}>
            <div className={styles['tab-selector1-divider-container1']}>
              {activeTab === 0 && <div className={styles['tab-selector1-divider1']}></div>}
            </div>
            <div className={styles['tab-selector1-content1']}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span className={styles['tab-selector1-text1']}>{t('headers.header1')}</span>
                {activeTab !== 0 ? <DownOutlined className="faqs-arrow-icon" /> : null}
              </div>

              {activeTab === 0 && (
                <div className={styles['tab-selector-text']}>
                  <p>{t('texts.text1')}</p>
                  <p>{t('texts.text2')}</p>
                  <ul>
                    <li className={styles['li']}>{t('texts.listItems.item1')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item2')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item3')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item4')}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Tab 2 */}
          <div onClick={() => setActiveTab(1)} className={styles['tab-selector1-tab-horizontal2']}>
            <div className={styles['tab-selector1-divider-container2']}>
              {activeTab === 1 && <div className={styles['tab-selector1-divider2']}></div>}
            </div>
            <div className={styles['tab-selector1-content2']}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span className={styles['tab-selector1-text1']}>{t('headers.header2')}</span>
                {activeTab !== 1 ? <DownOutlined className="faqs-arrow-icon" /> : null}
              </div>
              {/* Conditional content */}
              {activeTab === 1 && (
                <span className={styles['tab-selector-text']}>
                  <p>{t('texts.text3')}</p>
                  <p>{t('texts.text4')}</p>
                  <ul>
                    <li className={styles['li']}>{t('texts.listItems.item5')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item6')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item7')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item8')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item9')}</li>
                  </ul>
                </span>
              )}
            </div>
          </div>

          {/* Tab 3 */}
          <div onClick={() => setActiveTab(2)} className={styles['tab-selector1-tab-horizontal3']}>
            <div className={styles['tab-selector1-divider-container3']}>
              {activeTab === 2 && <div className={styles['tab-selector1-divider3']}></div>}
            </div>
            <div className={styles['tab-selector1-content3']}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span className={styles['tab-selector1-text1']}>{t('headers.header3')}</span>
                {activeTab !== 2 ? <DownOutlined className="faqs-arrow-icon" /> : null}
              </div>
              {/* Conditional content */}
              {activeTab === 2 && (
                <span className={styles['tab-selector-text']}>
                  <p>{t('texts.text5')}</p>
                  <p>{t('texts.text6')}</p>
                  <ul>
                    <li className={styles['li']}>{t('texts.listItems.item10')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item11')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item12')}</li>
                    <li className={styles['li']}>{t('texts.listItems.item13')}</li>
                  </ul>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

TabSelector1.propTypes = {
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
}

export default TabSelector1
