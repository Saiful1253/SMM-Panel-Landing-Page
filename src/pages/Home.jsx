import Stats from '../components/Stats'
import WorkingProcess from '../components/WorkingProcess'
import PaymentMethods from '../components/PaymentMethods'
import GrowthSection from '../components/GrowthSection'
import Advantages from '../components/Advantages'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <ScrollReveal className="reveal">
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">Excellent 4.8 out of 5</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal" delay="reveal-delay-1">
              <h1>
                Best SMM Panel <br />
                in Bangladesh - <span className="highlight">Fast</span>
                <span className="highlight">,Safe</span> & <br />
                Growth in Social Media.
              </h1>
            </ScrollReveal>

            <ScrollReveal className="reveal" delay="reveal-delay-2">
              <p className="hero-description">
                SMM is Bangladesh's most reliable & cheap SMM panel for real social media
                growth. We built this platform for Bangladeshi businesses, creators, and agencies.
                You get fast delivery, safe methods, and followers that actually stay. No fake bots.
                No account risks. Just real results. Most panels chase big numbers. We focus on
                keeping those numbers. You get retention guarantees, delivery control, and long-
                term credibility.
              </p>
            </ScrollReveal>

            <ScrollReveal className="reveal" delay="reveal-delay-3">
              <div className="hero-buttons">
                <button className="btn btn-outline" onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}>
                  View Services
                </button>
                <button className="btn btn-primary">
                  Create an Account
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="hero-image">
            <img src="/hero.png" alt="Hero" className="hero-img" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <section className="services-section" id="services-section">
        <div className="section-header">
          <div className="section-label">our services</div>
          <h2 className="section-title">
            Powerful <span className="highlight">SMM Services</span> for Fast Growth
          </h2>
          <p className="section-description">
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we've got you covered.
          </p>
        </div>

        <div className="platform-filters">
          {[
            { name: 'Facebook', icon: '📘', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlklEQVR4AcRUbVLDIBSEHss6Y/Ivt7GeoHoC623yr3HGeqzi7hIIoeTDqGMmj8Bj3y7vEdiZP37+X6C5f62au7djsz+de3Ma04e5pQJMZiBikBpnz8a6ZxBVvRmN6cOcRGeEigJcoYiNIalZeCpiFVMA3ggIyNUVwLMuxCg2A40EWBaln4GSYYf5ur0cbDCsnuXzEIpk5RoJAHz0yHIL0rr9eOrKs73X2RFHFNDq52ru7LBScBGvkliX71PFOUD0RgFz3T3Is6IRAf4glIuiuYBJuQaBFcQRsrSYJKtBABsUCX6xMwhMkGJj/R/z+fgSIC36wQ9fadNj2VKBEhDxi28kS5CRaxBwNjoT4LZuwjUI7K7vJTbcNU6Gyy3M8/eUb39ywTf1jQL9Afp5Fjgv3KMgGAXksC5upMZbmqwSIwFlgRVs4VUMYsWhgW9GAnQpPQDZ/5YhRrFZ0I0A5wW0rmZ/hXW4MmrFFMBFAeKYKg8Tg3HL8s6h25uvsye+HGZv2EkBz2SMhHhyYSPfAnHALgoE4NbvFwAAAP//gWK+zAAAAAZJREFUAwBnhbYxFCx0uwAAAABJRU5ErkJggg==' },
            { name: 'Instagram', icon: '📸', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABxUlEQVR4AdxUTVPCMBDNov4uy8+wjLdyBT9OHpTixYujoUfg5oA/o/VvOWJ8r6XQpGnLjHKx09cku2/3bdIkPXXk558KXEVvwXi4TrcwaNuQjqL3CWN8q11bIpKNnKQgB1ugaX0DERMzhrEu0xJgFSS7pEPHjGWOKt8S+Fan56XTGIkNUI4PbTGTSZVrCaACLkvu76mvj2R5Mc0HxSejYInC1P21BEDfCaCS/CfDlonZ9GeLsE/BEhSCz/fuctDpCtBWRYBEmV5eZuNo/TwerjbYUZ/AQ4LZUbhK9vVbBZA8ZiIkflGibpUS8s+UUtNRtLrXEEY/AxpfBjQ69w653veLnojcsYci/kKAqWqQmsVjaJ1BuatElFb156luqltaBUAPeHD0PMQSmVeMlTHKQHiKXfXIk4t+THsTugSQ7SS/Z2aLwc1sEUqyDHt6Pogp3JWcoq6A74cFPBOstgS2aUobE3hg5XAFPPzCxGpLwBIA3tcYaRYQs6leDd4EXcYEB7DKsWagcXBQQetPqwa7fV+sJcCABBVgJv0t2Zou/R6Qk99XjHX9NQESNGaSQAi7hpecoG0DOX2NGMa68Aq4pN+Mjy7wAwAA//8IColqAAAABklEQVQDAAPw3zFGbW66AAAAAElFTkSuQmCC' },
            { name: 'X (Twitter)', icon: '🐦', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABZUlEQVR4AeyUTU7DMBCF7cK9SI4BEruyBW5AeoOQLd0hwTES7gWY90m1ZTsmqSuxQGrkJ0/Hb96bTn425o+vs8HqgE8a0eP2tXm4exsFJ4z32/cn78SZj9kTA8g5AVIMxJy9GJVrBFZjreuoFdy3ubwi6ZEYKNlQjIji4kKseGAMhpPOm7jJ3MBwidSVTEo5+BEa6752/f528rncIBxgwl9GFNDVxnx++MLS7pztYnE4iQHuSgYTxQYjwOgAuRokBgcBZlmjschNDMRMutfvqlUaYWJQGlGNQz5/ahMDCKeacIMRzJEYRIfV92HYX++i+hDODHo9w791E6qyYIk/M6B2UDfPLzdW8epNRxy+uMVVNOCl0ksWf2+KxWviFAUDLyph1SUfM3g5Jj0M7VLnviAY9Jq9xtJKvXPOdiLE4yGeEAXw4IuzuoKBZw6aP0BEsAe02tteTQDPPWafGRxTVMP5/wY/AAAA//9Wu5KtAAAABklEQVQDABaTqjE5czHdAAAAAElFTkSuQmCC' },
            { name: 'YouTube', icon: '▶️', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABBElEQVR4AeyT7Q2CQAyGOd1GHQIWUFfQxDmAOUx0BXUBGELdxpx9iW0OJEePnP6C0BTa6/vcR2+W/PiZAIMb/N8tOq626Wm5qRyz9K2xpua8WOfQcJclK0Bybm1FydQx+lS9TY01poCGCxFAEvEhSM5yAiA6ZsHxaF4ApOgFGGsLGqN9RcsFeIt3z1u5f1xNIChRA5geCgoGMEjrgwFoZ9wNagrVmagB6G0SrrTCvEIXUHOwz1Nv8yXsS3djouUCuoNG/1OnfQNexpSjFT2FsoLD/VITJCM6Dg8zgHlKWymMbQwaaGXOCgABQJCkC5V9zJDXGI/PoAEtthaAgzH9BBjczTcAAAD//8c/BQQAAAAGSURBVAMA2NuIMXbaMrAAAAAASUVORK5CYII=' },
            { name: 'TikTok', icon: '🎵', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVR4AcyUSXLCMBBF3TlEkgXZk1vgkwVOZt8i7MMiySWU/1SGUsvCssumKpQbNHz168HiqXnw5/8B3l/eOlkYrKsVYG0Gh0cDmv3z7mMKsjaDxsyOU5DVAKK/QgDtX3eubJsArhBAFsyVbDMAkJJNAkg3pq1GMi446D9/viyEcCzsxaUiAGd6zzsL1sW01ciovvN1/r2cAGHBwimVjQA4NzmWyDVL81nP+fvSp8IRYHCeahi7QyzMNQeg3ulBakvasjaPLNVNjR0gF1LbfG3p3AHU0FvdiX6ps5LeAVJBCkvXNb4FoXH1cYDsFTvkPcnnyrLafAfIw1EW8Y8Mx/FeZPdhTo8cgDdFUblbCQQT3JUm12m/+DgACqKqHWYfHfqajQAc4LD60eKI+WDUu2ed/WGt+lMEcIpy4UiXzAZr9bv4wt0FANnC/gAAAP//Vy1bHgAAAAZJREFUAwA9gZAxdEuwhQAAAABJRU5ErkJggg==' },
            { name: 'LinkedIn', icon: '💼', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHklEQVR4AeyTwY3CMBBFnd0+dikldJImQOIEnJCgiXRCSgH6QOY/CyM7TIJC4IJA/mRsD//hmfjHvfnzYYC/arf8r7Z+jPBIq56VqHB+lW4+E7c9MkDLsPGuGA00ARgf6/n0VM/WgjbS08ME6JhldBTs9QCZlzRLzd4LNqpM5gkEcDK+nYK5xEmQwjBij9K1sJF+dQEaeoCUHAyIkUq2Ktx5SkyPeLKmPHN0AcxkFjE91IsAZY5Y42lpMAATeiP5SbVJy5hByUODAVfTYOzd7xKTPg0G9JlZe1+AVZVsratEpd6SPVJ2aCgxajX2Lk/52egCkIQxIkbEUcyjrLW45zJA3428/eJB0PbIANxIXf1ijPBI/0MGSDdeFb8dcAEAAP//vNJDdAAAAAZJREFUAwDOw5oxaWm46AAAAABJRU5ErkJggg==' },
            { name: 'Telegram', icon: '✈️', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABf0lEQVR4AeyT21HDMBBF5UAdQCfEnbgJmOHLyRcz0IQ7sekEqAMw9wiv/JI9yuD8JaNrybvrs7uSsnNn/l0SzDb4rnjeI3NstkVAb4uXunVXqNwkgUEFbgELupcYNruTOwB6U7yWglJpLVqAae1H67KDX+iRnACwQTPXAvDgVrDMfediRcdqAoMKPN0CYI2Bu+3B5rVzX29+oUc0gYG7D32lig2Dqj+qx/zHXd933QQfi/fqqWFGIYFBF6olFvmqP6uHI+cQgysowLXuD1nVljLMqpXND6ua6lbgTnHxBLQs5wF5Yv9o5MuoGpM6rBcqxz1T2CI8QBDATDcDaR1uCHDFLXYpn7akP+C/d54RsRXIXClwYoff8D7qAENMXADZVyuXnzHafwxJCQgcaAYxn85v5js1AQeeC8Q/2birc1IC/lCieLhmx0XgAmg9qhi7bKORlIAPh7cJAoeJbdDNKBkxKCkBgUsiOd1Ix1jMvxMApRvEeqpNEkyhw/ezJ/gFAAD//3uNQakAAAAGSURBVAMATburMQo6n2cAAAAASUVORK5CYII=' },
            { name: 'Discord', icon: '🎮', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABd0lEQVR4AeyTUU7DMBBEN8A5gJuQ3iSXAImvpl9IcIncpD0KcI8S5rnxynGcoBTxgdRoN+vdGe/YjnNlf/xcBH484MUjum9e6rvmdU/MO902b1u8hKXcogBN8d6u9yLXRPLUK+treTtgPWLiTmwiMBBrMXEFN/LcHURsmOs1BhMBiADneGnuSKC0grVCeY+RQGkFawXUg2P0aS6QKzvD7GDrnjq9WS5Q6tFb1X50Txtijld23AirStiX3TxEvgvkW4Pw2T3ukug7oel79xzyyIEXPe3lAgJHZ6fc0q2SR08bxNpcTAUmHLbKt+EHE5guoKbOAgZM8Micuyiglba4pvoEjYNR5y9WMsFUc1sUcNYvBi7Ah8v7UIsuLHxURYzxgZuEq0CucDLmnEZmLsBtyK8dx0AdFxaupWIlZ7zhJumYtmoWjymIwlctmAuETC9ANQj3O12JoKJVdtzBU3TRlDgRiCBCeMznIruARyxxZgVK5HNq/1/gGwAA//9CIy03AAAABklEQVQDAKqjqjFKvCVvAAAAAElFTkSuQmCC' },
            { name: 'Spotify', icon: '🎧', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8klEQVR4AcSUUW7CMAyGne5gg5eh3QKkjWsA12CT4BYTe4EdbM38WYlJ26yUh2mIn8Sxf/+2m9LIH3/+X2D58TJbntab1efr2XBaR2yD+m4N4NcOSEzC0DTnILKVGGYGEQlqG9RHjIx8qgJUR+KccIQvxKxSV7W4gYAl1wprwWNndAS3HzMQILAfNNWGy2jL+I5Ap4IQL6KI2k0NZZJyHx7CprRdAGUqwEnCw9PbHBwX+10Nh8U+AGIpBJ5BLwO5bK8/LiBN86i2fwmiI25JCc4yCEacQkyIA1DkugrgSKATbhErtyQdC3vOMvLtQRCh3EkIcZY5LgApH7LGtp0DxkCFhjwWfCLbqIAHEKMAuCVcIKu7M7VJdXlE7AExVAwQAZw59Dnk/VUgn6SVqjpjUpKdUTVvcHq5EEkUX0pBF4gxXDyCDVeUUShsTDoeRmZQEZIEXRkNK5QaXEDa9qsMcEEdFWMBdsfVpmqAyGC0JClyucDx+f1SBlNVHpHttVoeInuq5rmQawDt3HIlhwtgx++4Y52E9EwQLeP7OToCKFvbJeOOPVxylJSOAA6fLcYdsOT6t9KnDAQIQISbAwl7FDpzbhacWlxVIAdCgowQyOdcBmx8vOH9sXicbkYF1C+QEQJ0ZdB/Wmx8xIzhpsAYeYrvBwAA//8ZqHVoAAAABklEQVQDABrVR0DLYLMcAAAAAElFTkSuQmCC' },
            { name: 'SoundCloud', icon: '☁️', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA+ElEQVR4AeySUQ6CMBBEG+9k4p9wEM8CnMWDiH8mHkrnNWWzSCmYyIcJpkN3u7MzZeUQNv7tBosD3ke0zYiuz1MFFtVF+Oo/QFS4qS9C8UtolM+uooGa403TjtA5o9SqTi1TCmHWQE2VOoZGhMmBjicLk2xtYpCEUUCUfTAhzopQEBr1Rii2NTKAQEU7QoB0LeC3IvM2dikzkCiHkLg5sbi2OLdkRYBRpJmBMi/SK/frM/e1YuwNOjGBtnDnkeDFfZzK2W36Bpfjo0+IJorrBHIMu5TXkixCPHpEm/lMRRjdlBzEDj2ISxDFlh+RHf4y2A0Wp/n/I3oDAAD//+rmJ1YAAAAGSURBVAMA78diMaqLs9oAAAAASUVORK5CYII=' },
            { name: 'Snapchat', icon: '👻', iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABLElEQVR4AeSUSw7CIBRF1T2ZOFMX4lqsa3EhrTMTF6X30EJKHwViUycabvm9dw9Q7G6z8u9PAPfX4SS10nsQ7WvN6RaPSIatjNBJtS+0G80VIVnAYICZN57WRUgWILdGKpVszCxAq8+tPILmYmcBkcOCzu8B2u5V4tYUb8hoY0dyJJOT2sFDiZw/UrOq8KKJJzdKMIDL/tlJW0V1Um1pyJFMjgGMHE3waG7aZPXTMddPAnSWJLBtF1Tx4FNCjgk1gMGcl2yCCwN8nwwkADCWMEYFr9lpICiAAmA2ZeFEAHADpLPEDfrKllwJj3BBAmDieFbfK/eyMfJx1EqLSxKgVfBf8Lqpz67GIGescbda1S42tu57SUA/FT9l4kCqt5IzjiPSvWpAOr08ujrgAwAA//90BNynAAAABklEQVQDAHSjcDH34MZQAAAAAElFTkSuQmCC' },
            { name: 'Website Traffic', icon: '📊' },
          ].map((platform, index) => (
            <button key={index} className="platform-btn">
              <span className="platform-icon">
                {platform.iconImg ? <img src={platform.iconImg} alt={platform.name} /> : platform.icon}
              </span>
              {platform.name}
            </button>
          ))}
        </div>

        <div className="service-card">
          <div className="service-image">
             <img src="/upper.jpg" alt="Facebook Marketing" className="service-image-img" loading="lazy" decoding="async" />
          </div>
          <div className="service-content">
            <h3 className="service-title">Facebook Marketing Services</h3>
            <p className="service-description">
              Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.
            </p>
            <div className="service-list">
              {[
                { title: 'Facebook Post Likes', desc: 'Boost post engagement and credibility with real likes.' },
                { title: 'Facebook Likes', desc: 'Grow your page popularity with high-quality likes.' },
                { title: 'Facebook Comments', desc: 'Increase interaction with engaging comments.' },
                { title: 'Facebook Shares', desc: 'Expand your reach with powerful shares.' },
                { title: 'Facebook Video Views', desc: 'Get more visibility with high-retention video views.' },
                { title: 'Facebook Reactions', desc: 'Make your posts more engaging with diverse reactions.' },
              ].map((item, index) => (
                <div key={index} className="service-item">
                  <span className="service-number">{index + 1}</span>
                  <span className="service-item-text">
                    <strong>{item.title}</strong> - {item.desc}
                  </span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}>
              View Facebook Services
            </button>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <WorkingProcess />

      {/* Payment Methods Section */}
      <PaymentMethods />

      {/* Growth Section */}
      <GrowthSection />

      {/* Advantages Section */}
      <Advantages />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
