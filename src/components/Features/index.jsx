import './style.scss'

export const Features = () => {
    return (
        <section className='features'>
            <div className='features__header'>
                <h1>Features</h1>
                <p>
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>
            </div>
            <div className='features__info'>
                <img className='info__image' src='/assets/page-exemple.png' alt='page-exemple' />
                <div className='info__discription'>
                    <div className='discription__container'>
                        <div className='discription__title'>
                            <img className='discription__icon' src="/assets/features-icons/cutlery-icon.png" alt="details-icon" />
                            <h1>A single source of truth</h1>
                        </div>
                        <p>
                            When you add work to your Slate calendar we automatically calculate useful insights
                        </p>
                    </div>
                    <div className='discription__container'>
                        <div className='discription__title'>
                            <img className='discription__icon' src="/assets/features-icons/alien-icon.png" alt="details-icon" />
                            <h1>Intuitive interface</h1>
                        </div>
                        <p>
                            When you add work to your Slate calendar we automatically calculate useful insights
                        </p>
                    </div>
                    <div className='discription__container'>
                        <div className='discription__title'>
                            <img className='discription__icon' src="/assets/features-icons/infinite-icon.png" alt="details-icon" />
                            <h1>Or with rules</h1>
                        </div>
                        <p>
                            When you add work to your Slate calendar we automatically calculate useful insights
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}