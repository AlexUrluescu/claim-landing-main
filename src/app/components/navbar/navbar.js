'use client'
import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import LocalSwitcher from '../localSwitcher/localSwitcher'

const Navbar = ({
  id = '',
  logoSrc = 'https://storage.googleapis.com/claimit-app-landing-assets/assets/logo.svg',
  linkIcon = 'https://www.linkedin.com/company/claim-it-app',
  link6 = 'Contact',
  section4 = '/#contact',
  linkImage = 'https://twitter.com/claim_it_app',
  link5 = 'Terms and Conditions',
  imageAlt = 'image',
  linkIcon1 = 'https://join.slack.com/t/claim-it-workspace/shared_invite/zt-2g240xokg-lsH2PyepP2APSNU6ZR99Mg',
  link2 = 'Demo',
  link3 = 'Key Features',
  imageSrc = 'https://storage.googleapis.com/claimit-app-landing-assets/assets/x.svg',
  section2 = '/#demo',
  logoAlt = 'ClaimIt Logo',
  link4 = 'Privacy Policy',
  section3 = '/#features',
  section1 = '/#benefits',
  link1 = 'Benefits',
}) => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('nav')

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div id={id} className="navbar-wrapper">
        <header data-thq="thq-navbar" className="navbar-root-container">
          <Link className="navbar-icon-link" href="/">
            <img alt={logoAlt} src={logoSrc} className="navbar-logo1" />
          </Link>
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <a href={section1} className="navbar-links-style">
                {t('benefits')}
              </a>
              <a href={section2} className="navbar-links-style">
                {t('demo')}
              </a>
              <a href={section3} className="navbar-links-style">
                {t('keyFeature')}
              </a>
              <Link className="navbar-links-style" href={'/privacy-policy'}>
                {t('privacyAndConditions')}
              </Link>
              <Link className="navbar-links-style" href={'/terms-and-conditions'}>
                {t('termsAndConditions')}
              </Link>
              <Link
                className="navbar-links-style"
                href={'https://docs.claimit.app/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('docs')}
              </Link>
              <a href={section4} className="navbar-links-style">
                {t('contact')}
              </a>
            </nav>
            <div className="navbar-buttons1">
              <a
                href="https://console.claimit.app/login"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-login1 button button-primary navbar-login-text"
              >
                Log in
              </a>
            </div>
            <div className="navbar-language-container">
              <LocalSwitcher />
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu" onClick={toggleMobileMenu}>
            <svg viewBox="0 0 1024 1024" className="navbar-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
            <div className="navbar-mobile-content">
              <div className="navbar-top">
                <div>
                  <img alt={logoAlt} src={logoSrc} className="navbar-logo2" />
                </div>
                <div className="close-button" onClick={toggleMobileMenu}>
                  <CloseOutlined style={{ fontSize: '24px', color: 'black' }} />
                </div>
              </div>
              <nav className="navbar-links2">
                <div>
                  <LocalSwitcher />
                </div>
                <Link
                  className="navbar-links-style"
                  href={section1}
                  onClick={() => toggleMobileMenu(false)}
                >
                  {link1}
                </Link>
                <Link
                  className="navbar-links-style"
                  href={section2}
                  onClick={() => toggleMobileMenu(false)}
                >
                  {link2}
                </Link>
                <Link
                  className="navbar-links-style"
                  href={section3}
                  onClick={() => toggleMobileMenu(false)}
                >
                  {link3}
                </Link>
                <Link
                  className="navbar-links-style"
                  href={'/privacy-policy'}
                  onClick={() => toggleMobileMenu(false)}
                >
                  {link4}
                </Link>
                <Link
                  className="navbar-links-style"
                  href={'/terms-and-conditions'}
                  onClick={() => toggleMobileMenu(false)}
                >
                  {link5}
                </Link>

                <Link
                  className="navbar-links-style"
                  href={'https://docs.claimit.app/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => toggleMobileMenu(false)}
                >
                  Docs
                </Link>

                <Link
                  className="navbar-links-style"
                  href={section4}
                  onClick={() => toggleMobileMenu(false)}
                >
                  {link6}
                </Link>
              </nav>
              <div className="container-login-button">
                <a
                  style={{ width: '80%', fontSize: '20px' }}
                  href="https://console.claimit.app/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navbar-login2 button button-primary navbar-login-text"
                >
                  Log in
                </a>
              </div>
            </div>
            <div className="navbar-icon-group">
              <a
                href={linkImage}
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link20"
              >
                <img alt={imageAlt} src={imageSrc} className="navbar-image" />
              </a>
              <a
                href={linkIcon}
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link21"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon5">
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
              <a
                href={linkIcon1}
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link22"
              >
                <svg viewBox="0 0 950.8571428571428 1024" className="navbar-icon7">
                  <path d="M868 443.429c46.857 0 82.857 34.286 82.857 81.143 0 36.571-18.857 62.286-53.143 74.286l-98.286 33.714 32 95.429c2.857 8.571 4 17.714 4 26.857 0 45.143-36.571 82.857-81.714 82.857-36 0-68-22.286-79.429-56.571l-31.429-94.286-177.143 60.571 31.429 93.714c2.857 8.571 4.571 17.714 4.571 26.857 0 44.571-36.571 82.857-82.286 82.857-36 0-67.429-22.286-78.857-56.571l-31.429-93.143-87.429 30.286c-9.143 2.857-18.857 5.143-28.571 5.143-46.286 0-81.143-34.286-81.143-80.571 0-35.429 22.857-67.429 56.571-78.857l89.143-30.286-60-178.857-89.143 30.857c-9.143 2.857-18.286 4.571-27.429 4.571-45.714 0-81.143-34.857-81.143-80.571 0-35.429 22.857-67.429 56.571-78.857l89.714-30.286-30.286-90.857c-2.857-8.571-4.571-17.714-4.571-26.857 0-45.143 36.571-82.857 82.286-82.857 36 0 67.429 22.286 78.857 56.571l30.857 91.429 177.143-60-30.857-91.429c-2.857-8.571-4.571-17.714-4.571-26.857 0-45.143 37.143-82.857 82.286-82.857 36 0 68 22.857 79.429 56.571l30.286 92 92.571-31.429c8-2.286 16-3.429 24.571-3.429 44.571 0 82.857 33.143 82.857 78.857 0 35.429-27.429 65.143-59.429 76l-89.714 30.857 60 180.571 93.714-32c8.571-2.857 17.714-4.571 26.286-4.571zM414.286 593.143l177.143-60-60-180-177.143 61.143z"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar
