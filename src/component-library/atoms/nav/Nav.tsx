import { FC } from "react";

interface NavProps {
  readonly sections: string[];
}

const Nav: FC<NavProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <p key={index}>{section}</p>
      ))}
    </>
  );
};

export default Nav;
