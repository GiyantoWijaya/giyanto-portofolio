import ProfilePic from "../profile-pic/profile-pic";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-center mt-20">
      <div className="mx-5 max-sm:text-left text-4xl my-auto">
        <h2 className="text-indigo-100 font-inter">Hi! I am</h2>
        <h1 className="text-[#83CD29] font-graduate">GIYANTO WIJAYA</h1>
        <h2 className="text-indigo-100 font-inter">Software Engineer</h2>
      </div>
      <ProfilePic />
    </div>
  );
}
