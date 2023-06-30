import Link from "next/link";

const SiteLinkButton = (props: {
  sectionId: string;
  children: React.ReactNode;
  classStyle: string;
  onClickCallback?: Function;
}) => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      // block: "start",
      // inline: "start",
    });
  };

  const handleOnClick = (element_id: string) => {
    scrolltoHash(element_id);
    props.onClickCallback ? props.onClickCallback() : null;
  };

  return (
    <Link
      className={props.classStyle}
      href="#"
      onClick={() => handleOnClick(props.sectionId)}
      type="button"
    >
      {props.children}
    </Link>
  );
};

export default SiteLinkButton;
