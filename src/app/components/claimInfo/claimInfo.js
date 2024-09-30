import React from 'react'
import Image from 'next/image'
import styles from './claimInfo.module.css'

const ClaimInfo = () => {
  return (
    <div className="home-contact1 section-container">
      <div className="home-max-width8 max-width-container">
        <div className={styles['main-container']}>
          <div className="image-container">
            <Image
              style={{ width: '100%' }}
              alt={'icon'}
              src={
                'https://storage.googleapis.com/claimit-app-landing-assets/assets/claim-icon.svg'
              }
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className={styles['tab-selector1-text5']}>Claim Mobile: Manage Time Anywhere,</p>
            <p className={styles['tab-selector1-text5']}>Anytime!</p>
          </div>
          <div className={styles['content-container']}>
            <p className={styles['tab-selector1-text6']}>
              Introducing Claim on Mobile – your essential tool for managing leave requests and
              claiming hours, now available on the go! Whether you`&#39;`re on a business trip or taking a
              well-deserved break, Claim Mobile keeps you connected to your responsibilities. Simply
              download Claim on Mobile from the App Store or Google Play, and manage your time
              effortlessly from anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaimInfo
