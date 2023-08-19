import './style.scss'

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero__presentation'>
                <h1>Work at the speed of thought</h1>
                <p>
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>
            </div>
            <duv className="hero__buttons">
                <a className='button button--try-free' href='/'>Try For Free</a>
                <a className='button button--learn-more' href='/'>Learn More</a>
            </duv>
        </section>
    )
}