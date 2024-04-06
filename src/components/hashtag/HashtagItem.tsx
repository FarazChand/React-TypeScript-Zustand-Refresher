type HashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

export default function HashtagItem({
  onSelectCompany,
  company,
}: HashtagItemProps) {
  const handleSelectCompany = () => onSelectCompany(company);

  return (
    <li key={company}>
      <button onClick={handleSelectCompany}>{`#${company}`}</button>
    </li>
  );
}
