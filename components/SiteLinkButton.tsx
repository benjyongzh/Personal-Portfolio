import Link from "next/link";

const SiteLinkButton = (props: {
  sectionId: string;
  children: React.ReactNode;
  classStyle: string;
  onClickCallback?: Function;
}) => {
  return (
    <Link
      className={props.classStyle}
      href={`#${props.sectionId}`}
      onClick={() => (props.onClickCallback ? props.onClickCallback() : null)}
      type="button"
    >
      {props.children}
    </Link>
  );
};

export default SiteLinkButton;
