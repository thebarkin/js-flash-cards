interface ICopyProps {
  copy?: string;
}

export const PageIntroCopy = ({
  copy = "Randomly generated commonly asked questions on JavaScript Technical Interviews.",
}: ICopyProps) => {
  return <p>{copy}</p>;
};
