import Education from "./Education"
import Experience from "./Experience"
import Hobbies from "./Hobbies"
import Skills from "./Skills"

export default function ColumnTwo() {
  return (
    <div className="flex flex-col items-center gap-8 m-8">
      <Experience />
      <Education />
      <Skills />
      <Hobbies />
    </div>
  )
}
