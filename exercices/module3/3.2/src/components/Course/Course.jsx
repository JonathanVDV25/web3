import Header from "components/Header/Header";
import Content from "components/Content/Content";

const Course = (course) => {
    return (
        <>
            <Header course={course.course.name} />
            <Content part={course.course.parts} />
        </>
    )
}

export default Course