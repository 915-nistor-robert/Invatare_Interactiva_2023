import './Job.scss'

export default function Job({title, company,location,description}){
    return (
        <>
            <div className={'job-main-container'}>
                <div className={'job-header'}>
                    <h1 className={'job-title'}>{title}</h1>
                    <p className={'job-company'}>{company}</p>
                </div>
                <p className={'job-description'}>{description}</p>
                <p className={'job-location'}>{location}</p>
            </div>
        </>
    )
}