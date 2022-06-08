interface ICopyProps {
  copy?: string;
}

const PageIntroCopy = ({
  copy = "Randomly generated commonly asked questions on JavaScript Technical Interviews.",
}: ICopyProps) => {
  return <p>{copy}</p>;
};

export default PageIntroCopy;
