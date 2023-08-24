import './style.scss'
import './responsive.scss'

export const Contents = () => {
    return (
        <section className='contents'>
            <div className='contents__header'>
                <h1>Contents</h1>
                <p>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
            </div>
            <div className='contents__cards'>
                <div className='card'>
                    <div className='card__header'>
                        <h1>Work</h1>
                        <p>
                            Ever wondered if you're too reliant on a client for work? Slate helps you identify .
                        </p>
                    </div>
                    <a className='card__link' href="/">Sign Up</a>
                    <img className='card__image' src="/assets/macbook-pro.png" alt="" />
                </div>
                <div className='card'>
                    <div className='card__header'>
                        <h1>Design with real data</h1>
                        <p>
                            Ever wondered if you're too reliant on a client for work? Slate helps you identify .
                        </p>
                    </div>
                    <a className='card__link' href="/">Try For Free</a>
                    <img className='card__image' src="/assets/boards-notifications.png" alt="" />
                </div>
            </div>
        </section>
    )
}