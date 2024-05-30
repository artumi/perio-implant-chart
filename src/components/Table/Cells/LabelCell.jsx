import "../table.css";

export default function LabelCell({
  labelTitle,
  multiLabel,
  upTitle,
  downTitle,
}) {
  return (
    <>
      {multiLabel ? (
        <td className="labelTitle">
          {upTitle} {downTitle}
        </td>
      ) : (
        <td className="labelTitle">{labelTitle}</td>
      )}
    </>
  );
}
