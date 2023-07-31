import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLink() {
  return (
    <>
      <Link className="mx-2" href="">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="mx-2">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </>
  );
}
