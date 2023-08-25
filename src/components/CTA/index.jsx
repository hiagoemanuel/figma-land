import './style.scss'
import './responsive.scss'

export const CTA = () => {
    return (
        <section className='cta'>
            <div className='cta__container'>
                <div className='cta__left-content'>
                    <h1 className='cta__title'>OpenType features and Variables fonts</h1>
                    <a className='cta__link' href="/">Try For Free</a>
                </div>
                <img className='cta__illustration' src="/assets/cta-illustration.png" alt="illustation" />
            </div>
        </section>
    )
}