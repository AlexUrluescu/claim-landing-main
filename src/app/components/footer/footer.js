'use client'
import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={`${styles['footer-footer-container']} section-container`}>
        <div className={`${styles['footer-max-width']}`}>
          <div className={`${styles['footer-container']}`}>
            <img
              alt="logo"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/logo.svg"
              className={styles['footer-image1']}
            />
            <div className={styles['footer-icon-group']}>
              <a
                href="https://twitter.com/claim_it_app"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                <img
                  alt="image"
                  src="https://storage.googleapis.com/claimit-app-landing-assets/assets/x.svg"
                  className={styles['footer-image2']}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/claim-it-app"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link2"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className={styles['footer-icon1']}>
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
              <a
                href="https://join.slack.com/t/claim-it-workspace/shared_invite/zt-2g240xokg-lsH2PyepP2APSNU6ZR99Mg"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link3"
              >
                <svg viewBox="0 0 950.8571428571428 1024" className={styles['footer-icon3']}>
                  <path d="M868 443.429c46.857 0 82.857 34.286 82.857 81.143 0 36.571-18.857 62.286-53.143 74.286l-98.286 33.714 32 95.429c2.857 8.571 4 17.714 4 26.857 0 45.143-36.571 82.857-81.714 82.857-36 0-68-22.286-79.429-56.571l-31.429-94.286-177.143 60.571 31.429 93.714c2.857 8.571 4.571 17.714 4.571 26.857 0 44.571-36.571 82.857-82.286 82.857-36 0-67.429-22.286-78.857-56.571l-31.429-93.143-87.429 30.286c-9.143 2.857-18.857 5.143-28.571 5.143-46.286 0-81.143-34.286-81.143-80.571 0-35.429 22.857-67.429 56.571-78.857l89.143-30.286-60-178.857-89.143 30.857c-9.143 2.857-18.286 4.571-27.429 4.571-45.714 0-81.143-34.857-81.143-80.571 0-35.429 22.857-67.429 56.571-78.857l89.714-30.286-30.286-90.857c-2.857-8.571-4.571-17.714-4.571-26.857 0-45.143 36.571-82.857 82.286-82.857 36 0 67.429 22.286 78.857 56.571l30.857 91.429 177.143-60-30.857-91.429c-2.857-8.571-4.571-17.714-4.571-26.857 0-45.143 37.143-82.857 82.286-82.857 36 0 68 22.857 79.429 56.571l30.286 92 92.571-31.429c8-2.286 16-3.429 24.571-3.429 44.571 0 82.857 33.143 82.857 78.857 0 35.429-27.429 65.143-59.429 76l-89.714 30.857 60 180.571 93.714-32c8.571-2.857 17.714-4.571 26.286-4.571zM414.286 593.143l177.143-60-60-180-177.143 61.143z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles['footer-separator']}></div>
          <div className={styles['footer-row']}>
            <span className={styles['footer-text1']}>© 2024 ClaimIT. All rights reserved.</span>
            <div className={styles['footer-footer-links']}>
              <Link href="/privacy-policy">
                <span className={styles['footer-link4']}>Privacy Policy</span>
              </Link>
              <Link href="/terms-and-conditions">
                <span className={styles['footer-link5']}>Terms and Conditions</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
