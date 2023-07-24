import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="avatar mx-5">
      <div className="w-60 max-sm:w-48 max-sm:mt-10 max-sm:mx-auto md:w-60 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
        <Image
          src="/img/me.png"
          height={150}
          width={150}
          alt="my-profile-pict"
        />
      </div>
    </div>
  );
}
