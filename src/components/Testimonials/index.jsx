import './style.scss'

const feedbacks = [
    {
        name: 'Claire Bell',
        avatarPath: '/assets/testimonials/claire.png',
        occupation: 'Designer',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
    },
    {
        name: 'Francisco Lane',
        avatarPath: '/assets/testimonials/francisco.png',
        occupation: 'Designer',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
    }, {
        name: 'Ralph Fisher',
        avatarPath: '/assets/testimonials/ralph.png',
        occupation: 'Designer',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
    },
    {
        name: 'Joge Murphy',
        avatarPath: '/assets/testimonials/jorge.png',
        occupation: 'Designer',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
    }
]

export const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h1 className='testimonials__title'>Testimonials</h1>
            <div className='testimonials__feedback'>
                {
                    feedbacks.map(client => (
                        <article className='feedback' key={client.name}>
                            <div className='feedback__client'>
                                <img  className='client__avatar' src={client.avatarPath} alt="client-avatar" />
                                <div>
                                    <h5>{client.name}</h5>
                                    <span>{client.occupation}</span>
                                </div>
                            </div>
                            <p>{client.text}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}