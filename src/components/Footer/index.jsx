import './style.scss'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__nav'>
                    <h3>Fingertipe</h3>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/">Examples</a>
                        <a href="/">Pricing</a>
                        <a href="/">Update</a>
                    </nav>
                </div>
                <div className='footer__nav'>
                    <h3>Resource</h3>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/">Examples</a>
                        <a href="/">Pricing</a>
                        <a href="/">Update</a>
                    </nav>
                </div>
                <div className='footer__nav'>
                    <h3>About</h3>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/">Examples</a>
                        <a href="/">Pricing</a>
                        <a href="/">Update</a>
                    </nav>
                </div>
            </div>
            <div className='footer__contact'>
                <div className='contact__location'>
                    <img src="/assets/contact-icons/map-location.png" alt="map-icon" />
                    <p>7480 Mockingbird Hill undefined</p>
                </div>
                <div className='contact__phone'>
                    <img src="/assets/contact-icons/phone.png" alt="phone-icon" />
                    <p>(239) 555-0108</p>
                </div>
                <div className='contact__social-media'>
                    <a href="/"><img src="/assets/contact-icons/twitter.png" alt="twitter-logo" /></a>
                    <a href="/"><img src="/assets/contact-icons/facebook.png" alt="facebook-logo" /></a>
                    <a href="/"><img src="/assets/contact-icons/linkedin.png" alt="linkedin-logo" /></a>
                </div>
                <span>developed by <a href='https://github.com/hiagoemanuel' target='_blanck'>{'<'}hiago emanuel{'>'}</a></span>
            </div>
        </footer>
    )
}