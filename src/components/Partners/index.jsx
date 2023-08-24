import './style.scss'

const partners = [
    'public/assets/partners/apple-store.png',
    'public/assets/partners/apiary.png',
    'public/assets/partners/android.png',
    'public/assets/partners/basecamp.png',
    'public/assets/partners/airbnb.png',
    'public/assets/partners/ibm.png',
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
                        <img src={partner} alt="partner-logo" key={index} />
                    ))
                }
            </div>
            <a className='partners__button' href="/">All Partners</a>
        </section>
    )
}