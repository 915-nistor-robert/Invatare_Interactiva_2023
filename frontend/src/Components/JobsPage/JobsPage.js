import './JobsPage.scss'
import {useState} from "react";
import Job from "../Job/Job";
import {FaFilter} from "react-icons/fa";

export default function JobsPage() {
    const [jobs, setJobs] = useState([{
        "title": "Crapat lemne",
        "company": "-",
        "location": "Hunedoara,HD",
        "description": "Hai fra la crapat de lemne."
    },
        {
            "title": "Zugravit",
            "company": "-",
            "location": "Deva,HD",
            "description": "Dau o lada de bere cn imi zugraveste 2 pereti!"
        },
        {
            "title": "Back End Developer",
            "company": "Web Applications Ltd.",
            "location": "Sydney, Australia",
            "description": "We are looking for a Back End Developer to join our team."
        },
        {
            "title": "Data Scientist",
            "company": "Big Data Analytics Inc.",
            "location": "Toronto, Canada",
            "description": "We are looking for a talented Data Scientist to join our team. The ideal candidate will have experience with machine learning algorithms and big data technologies."
        }])
    return (<>
            <div className={'jobs-main-container'}>
                <div className={'jobs-searchbar-container'}>
                    <input type={'text'} name={'search'} className={'jobs-searchbar'} placeholder={'looking for a certain job?'}/>
                </div>
                {jobs.map(({title,description,location,company})=>(
                    <Job title={title} description={description} location={location}
                    company={company}/>
                ))}
            </div>
        </>
    )
}