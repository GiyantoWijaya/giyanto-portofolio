import SocialMediaLink from "../social-media-link/social-media-link";

export default function ButtonResume() {
  return (
    <div className="flex mt-7 justify-end">
      <div className="mx-auto">
        <button className="btn glass btn-md sm:btn-lg md:btn-lg lg:btn-xl">
          My Resume
        </button>
      </div>
      <div className="my-auto">
        <SocialMediaLink />
      </div>
    </div>
  );
}
