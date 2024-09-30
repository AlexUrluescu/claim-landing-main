import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './tabSelector3.module.css'

const TabSelector3 = ({
  image1Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image2Alt = 'image',
  rootClassName = '',
  image3Alt = 'image',
  image1Alt = '',
  image2Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
  image3Src = 'https://play.teleporthq.io/static/svg/default-img.svg',
}) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className={`${styles['tab-selector1-container']} ${rootClassName}`}>
        <div className={'tab-selector-img-container'}>
          {activeTab === 0 && (
            <img alt={image1Alt} src={image1Src} className={'tab-selector-img'} />
          )}
          {activeTab === 1 && (
            <img alt={image2Alt} src={image2Src} className={'tab-selector-img'} />
          )}
          {activeTab === 2 && (
            <img alt={image3Alt} src={image3Src} className={'tab-selector-img'} />
          )}
        </div>
        <div className={styles['tab-selector1-tabs-menu']}>
          <div onClick={() => setActiveTab(0)} className={styles['tab-selector1-tab-horizontal1']}>
            <div className={styles['tab-selector1-divider-container1']}>
              {activeTab === 0 && <div className={styles['tab-selector1-divider1']}></div>}
            </div>
            <div className={styles['tab-selector1-content1']}>
              <span className={styles['tab-selector1-text1']}>SPV</span>
              <span className={styles['tab-selector1-text2']}>
                The app is fully integrated with the Romanian ANAF, allowing users to automatically
                generate e-Factura, submit invoices to SPV, check their status in real time, and
                download all invoices received and sent to SPV.
              </span>
            </div>
          </div>
          <div onClick={() => setActiveTab(1)} className={styles['tab-selector1-tab-horizontal2']}>
            <div className={styles['tab-selector1-divider-container2']}>
              {activeTab === 1 && <div className={styles['tab-selector1-divider2']}></div>}
            </div>
            <div className={styles['tab-selector1-content2']}>
              <span className={styles['tab-selector1-text3']}>Auto Invoicing</span>
              <span className={styles['tab-selector1-text4']}>
                Contractors and Administrators can easily generate, send, and manage invoices.
                Invoices are created within a few clicks, using data from the timesheet module, and
                eliminating the need for manual entries. Extra items can be manually added if
                needed.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </>
  )
}

TabSelector3.propTypes = {
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
}

export default TabSelector3
