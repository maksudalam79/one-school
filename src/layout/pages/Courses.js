import CoursesDeatiles from "./CoursesDeatiles";
import Leftside from "./Leftside";

const Courses = () => {
  
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="">
        <Leftside></Leftside>
      </div>
      <div class="col-span-2"><CoursesDeatiles></CoursesDeatiles></div>
    </div>
  );
};

export default Courses;
