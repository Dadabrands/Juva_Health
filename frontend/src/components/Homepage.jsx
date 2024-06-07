

import styles from "../style";
import {
  Navbar,
  Services,
  Plans,
  Footer,
  Faqs,
  Hero,
} from "../components";
const Homepage = () => {
  return (
    <>
     <div className="w-full overflow-hidden">
          <div
            className={`${styles.paddingX} ${styles.flexCenter}top-30 left-90 w-1280 h-84 bg-secondary max-w-[1080] h-[84] rounded-lg`}
            >
            <div className={`${styles.boxWidth} `}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-white ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div
            className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mt-auto`}
            >
            <div className={`${styles.boxWidth} mb-40 ss:mb-auto xs:mb-auto`}>
              <Services />
            </div>
          </div>

          <div className={`${styles.flexCenter} ${styles.backgroundContainer} hidden`}>
            <div
              className={`${styles.boxWidth}  ${styles.paddingX} mb-40 mt-auto`}
              style={{
                background:
                  "linear-gradient(to bottom, #8730AB 50%, #ffffff 50%)",
              }}
            >
              <Plans />
            </div>
          </div>
          <div
            className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mt-auto hidden`}
            >
            <div className={`${styles.boxWidth} mb-40 ss:mb-auto xs:mb-auto`}>
              <Faqs />
            </div>
          </div>
          <div
            className={`bg-gray20 sm:px-16 px-6 ${styles.flexCenter} xs:mt-[450px] xxs:mt-[450px]`}
            >
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
        </>
  )
}

export default Homepage