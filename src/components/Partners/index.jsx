import './style.scss'

const partners = [
    '/assets/partners/apple-store.png',
    '/assets/partners/apiary.png',
    '/assets/partners/android.png',
    '/assets/partners/basecamp.png',
    '/assets/partners/airbnb.png',
    '/assets/partners/ibm.png',
]

export const Partners = () => {
    return (
        <section className='partners'>
            <div className='partners__header'>
                <h1>Patners</h1>
                <p>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
            </div>
            <div className='partners__list'>
                {
                    partners.map((partner, index) => (
                        <img className='partners__logo' src={partner} alt="partner-logo" key={index} />
                    ))
                }
            </div>
            <a className='partners__button' href="/">All Partners</a>
        </section>
    )
}