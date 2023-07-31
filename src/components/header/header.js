import ButtonResume from "../button-resume/button-resume";
import ProfilePic from "../profile-pic/profile-pic";

export default function Header() {
  return (
    <div className="flex flex-wrap mt-20 max-sm:justify-center">
      <div className="mx-5 max-sm:text-3xl text-4xl my-auto">
        <h2 className="text-indigo-100 font-inter antialiased">Hi! I am</h2>
        <h1 className="text-[#83CD29] font-graduate antialiased">
          GIYANTO WIJAYA
        </h1>
        <h2 className="text-indigo-100 font-inter antialiased">
          Software Engineer
        </h2>
        <ButtonResume />
      </div>
      <ProfilePic />
    </div>
  );
}
