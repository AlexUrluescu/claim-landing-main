'use client'
import Head from 'next/head'
import { Collapse, Flex, ConfigProvider } from 'antd'
import Timeline from '../components/timeline/timeline'
import TabSelector1 from '../components/tab-selector1/tab-selector1'
import TabSelector2 from '../components/tab-selector2/tab-selector2'
import TestimonialCard from '../components/testimonial-card/testimonial-card'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { DownOutlined } from '@ant-design/icons'
import NativeUi from '../components/nativeUi/nativeUi'
import Pricing from '../components/pricing/pricing'
import TrustedCompany from '../components/trustedCompany/trustedCompany'
import CompanyContact from '../components/companyContact/companyContact'

export default function Home() {
  const t = useTranslations()

  const items = [
    {
      key: '1',
      label: (
        <Flex justify="space-between">
          <span className="faqs-item">{t('faqs.headers.header1')}</span>
          <DownOutlined className="faqs-arrow-icon" />
        </Flex>
      ),
      children: <p className="home-text31">{t('faqs.texts.text1')}</p>,
      showArrow: false,
    },
    {
      key: '2',
      label: (
        <Flex justify="space-between">
          <span className="faqs-item">{t('faqs.headers.header2')}</span>
          <DownOutlined className="faqs-arrow-icon" />
        </Flex>
      ),
      children: (
        <p className="home-text33">
          {t('faqs.texts.text2')}
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </p>
      ),
      showArrow: false,
    },
    {
      key: '3',
      label: (
        <Flex justify="space-between">
          <span className="faqs-item">{t('faqs.headers.header3')}</span>
          <DownOutlined className="faqs-arrow-icon" />
        </Flex>
      ),
      children: (
        <p className="home-text35">
          {t('faqs.texts.text3')}
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </p>
      ),
      showArrow: false,
    },
    {
      key: '4',
      label: (
        <Flex justify="space-between">
          <span className="faqs-item">{t('faqs.headers.header4')}</span>
          <DownOutlined className="faqs-arrow-icon" />
        </Flex>
      ),
      children: <p className="home-text37">{t('faqs.texts.text4')}</p>,
      showArrow: false,
    },
    {
      key: '5',
      label: (
        <Flex justify="space-between">
          <span className="faqs-item">{t('faqs.headers.header5')}</span>
          <DownOutlined className="faqs-arrow-icon" />
        </Flex>
      ),
      children: <p className="home-text39">{t('faqs.texts.text5')}</p>,
      showArrow: false,
    },
  ]

  return (
    <div>
      <div className="home-container1">
        <Head>
          <title>Claim IT</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/globas.css" as="style" />
          <link rel="stylesheet" href="/global.css" />
          <meta
            name="description"
            content="Manage employees, contractor, salaries, vacations, timesheets, invoicing, projects, contracts, timesheets, reports, projects, finance, reports, AI predictions."
          />
          <meta property="og:title" content="Claim IT" />
          <meta
            property="og:description"
            content="Claim IT is here to revolutionise the way you manage your business! Our innovative AI based solution streamlines operational tasks into one user-friendly AI based platform."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4f3f1a87-25a2-4434-81fe-ed9f858cd831/f88b6daf-c5e5-416d-a0b1-e5ca87b18b12?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <main className="home-main">
          <div className="home-hero hero-container">
            <img
              alt="image"
              src="https://storage.googleapis.com/claimit-app-landing-assets/assets/logo.svg"
              className="home-image1"
            />
          </div>
          <div className="home-sub-hero">
            <div className="home-max-width1">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/sub-hero-1500w.webp"
                srcSet="https://storage.googleapis.com/claimit-app-landing-assets/assets/sub-hero-1500w.webp 1200w, https://storage.googleapis.com/claimit-app-landing-assets/assets/sub-hero-tablet.webp 800w, https://storage.googleapis.com/claimit-app-landing-assets/assets/sub-hero-mobile.webp 480w"
                className="home-image2"
              />
              <div className="home-container2">
                <h1 className="heading-1" style={{}}>
                  <span>
                    Claim IT: {t('claimIT.title')}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h1>
                <span className="text-1">{t('claimIT.text')}</span>
              </div>
            </div>
          </div>
          <div id="demo" className="home-sign-up section-container">
            <div className="home-max-width4 max-width-container">
              <div className="home-content13">
                <h2 className="home-text24 heading-1">
                  <span>
                    {t('streamline.headers.header1')}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h2>
                <span className="home-text28">{t('streamline.texts.text1')}</span>
                <div className="home-input-container">
                  <a
                    href="https://outlook.office.com/bookwithme/user/6ddd6166860b49da8817e028f237daa1@mtdtechnology.net?anonymous&amp;ep=plink"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1 button button-primary"
                  >
                    {t('streamline.texts.text2')} 📅
                  </a>
                </div>
              </div>
              <div className="home-video-container">
                <video
                  loop={true}
                  muted={true}
                  poster="https://storage.googleapis.com/claimit-app-landing-assets/assets/placeholder%20lightbox-1500w.webp"
                  preload="auto"
                  autoPlay={true}
                  controls={true}
                  playsInline={true}
                  className="home-video"
                ></video>
              </div>
            </div>
          </div>
          <div id="benefits" className="home-benefits section-container">
            <div className="max-width-container">
              <h2 className="home-text17 heading-1">{t('unlockSucces.title')}</h2>
              <Timeline></Timeline>
            </div>
          </div>

          <div id="features" className="section-container">
            <div className="home-max-width5 max-width-container">
              <div>
                <h1 className="heading-1">{t('discoverClaim.title')}</h1>
              </div>
              <div className="tabs-main-container">
                <TabSelector1
                  image1Alt="tab-selector1-dashboard image"
                  image1Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/dashboard-1500w.webp"
                  image2Alt="tab-selector1-claim image"
                  image2Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/claim-1500w.webp"
                  image3Alt="tab-selector1-invoices image"
                  image3Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/invoices-1500w.webp"
                  rootClassName="tab-selector1root-class-name"
                ></TabSelector1>
                <TabSelector2
                  image1Alt="tab-selector2-projects and team image"
                  image1Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/projects-1500w.webp"
                  image2Alt="tab-selector2-reports image"
                  image2Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/reports-1500w.webp"
                  image3Alt="tab-selector2-leave and travel image"
                  image3Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/leave-1500w.webp"
                  rootClassName="tab-selector2root-class-name"
                ></TabSelector2>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div style={{ padding: '0px 50px', marginBottom: 50 }}>
              <h1 className="heading-1">{t('potentialOfClaim.title')}</h1>
            </div>
            <div className="max-width-container">
              <div className="home-column1">
                <img
                  alt="IconRelumeI312"
                  src="https://storage.googleapis.com/claimit-app-landing-assets/assets/multi-tenant.svg"
                  className="home-icon-relume1"
                />
                <div className="home-content10">
                  <span className="home-text18">{t('potentialOfClaim.headers.header1')}</span>
                  <span className="home-text-potential">{t('potentialOfClaim.texts.text1')}</span>
                </div>
              </div>
              <div className="home-column1">
                <img
                  alt="IconRelumeI312"
                  src="https://storage.googleapis.com/claimit-app-landing-assets/assets/multi-roles.svg"
                  className="home-icon-relume2"
                />
                <div className="home-content11">
                  <span className="home-text20">{t('potentialOfClaim.headers.header2')}</span>
                  <span className="home-text-potential">{t('potentialOfClaim.texts.text2')}</span>
                </div>
              </div>
              <div className="home-column1">
                <img
                  alt="IconRelumeI312"
                  src="https://storage.googleapis.com/claimit-app-landing-assets/assets/security.svg"
                  className="home-icon-relume3"
                />
                <div className="home-content12">
                  <span className="home-text22">{t('potentialOfClaim.headers.header3')}</span>
                  <span className="home-text-potential">{t('potentialOfClaim.texts.text3')}</span>
                </div>
              </div>
              <div className="home-column1">
                <img
                  alt="IconRelumeI312"
                  src="https://storage.googleapis.com/claimit-app-landing-assets/assets/anaf.svg"
                  className="home-icon-relume3"
                />
                <div className="home-content12">
                  <span className="home-text22">{t('potentialOfClaim.headers.header4')}</span>
                  <span className="home-text-potential">{t('potentialOfClaim.texts.text4')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-benefits" style={{ padding: '100px 50px' }}>
            <Swiper
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
              loop={true} // Enables infinite looping
              autoplay={{
                delay: 3000, // 3-second delay between slides
                disableOnInteraction: false, // Keeps autoplay running after user interaction
              }}
              navigation={true} // Enable navigation arrows
              pagination={{ clickable: true }} // Enables clickable pagination bullets
              modules={[Pagination, Navigation, Autoplay]} // Ensure the correct modules are included
              spaceBetween={30} // Adds space between slides
              slidesPerView={1} // Display only one slide at a time
            >
              <SwiperSlide>
                <TestimonialCard
                  content={t('reviews.review1')}
                  avatarName="Alexandru Prunescu"
                  avatarCompany="Cloud Practice Lead"
                  avatarImageSrc="https://storage.googleapis.com/claimit-app-landing-assets/assets/alex-p-testimonial-200w.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  content={t('reviews.review2')}
                  avatarName="Roxana Lungu"
                  avatarCompany="CFO"
                  avatarImageSrc="https://storage.googleapis.com/claimit-app-landing-assets/assets/roxana-claim-testimonial-200h.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  content={t('reviews.review3')}
                  avatarName="Sandu Babasan"
                  avatarCompany="Tech Entrepreneur"
                  avatarImageSrc="https://storage.googleapis.com/claimit-app-landing-assets/assets/sandu-testimonial-200h.webp"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Pricing />
          </div>
          <div>
            <NativeUi
              image1Alt="tab-selector1-dashboard image"
              image1Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/dashboard-1500w.webp"
              image2Alt="tab-selector1-claim image"
              image2Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/claim-1500w.webp"
              image3Alt="tab-selector1-invoices image"
              image3Src="https://storage.googleapis.com/claimit-app-landing-assets/assets/invoices-1500w.webp"
              rootClassName="tab-selector1root-class-name"
            />
          </div>
          <div className="home-contact1">
            <TrustedCompany />
          </div>
          <div className="section-container">
            <div className="max-width-container">
              <div className="home-faq-inner">
                <div className="home-heading-container">
                  <h2 className="heading-1" style={{ padding: '0px 10px' }}>
                    {t('faqs.title')}
                  </h2>
                </div>
                <div style={{ width: '100%' }}>
                  <ConfigProvider
                    theme={{
                      components: {
                        Collapse: {
                          contentPadding: '4px 16px',
                          headerBg: 'white',
                        },
                      },
                    }}
                  >
                    <Collapse showArrow={false} items={items} bordered={false} />
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </div>
          <CompanyContact />
        </main>
      </div>
    </div>
  )
}
