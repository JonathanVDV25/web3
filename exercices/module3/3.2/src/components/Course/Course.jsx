import Header from "components/Header/Header";
import Content from "components/Content/Content";

const Course = ({course}) => {
    const {name: courseName, parts: courseParts } = course;

    return (
        <>
            <Header course={courseName} />
            <Content parts={courseParts} />
        </>
    )
}

export default Course