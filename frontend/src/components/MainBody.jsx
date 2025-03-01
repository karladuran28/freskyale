import ExperienceBlock from "./ExperienceBlock"
import HobbiesBlock from "./HobbiesBlock"
import LanguagesBlock from "./LanguagesBlock"
import ProjectsBlock from "./ProjectsBlock"
import StackBlock from "./StackBlock"
import Test from "./Test"

const MainBody = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-1/2">
      <div className="flex flex-row gap-4 w-full p-8">
        <div className="flex justify-center items-center w-1/3">
          <h1 className="text-2xl">Karla Durán</h1>
        </div>
        <div className="flex flex-col  items-left text-lg w-2/3">
          <h2>Computer Engineer</h2>
          <h2>Language and Technology Enthusiast</h2> 
        </div>
      </div>
      <StackBlock/>
      <ProjectsBlock/>
      <ExperienceBlock/>
      <LanguagesBlock/>
      <HobbiesBlock/>
      <Test/>
    </div>
  )
}

export default MainBody