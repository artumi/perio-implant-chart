import "./table.css";
import LabelCell from "./Cells/LabelCell";
import NotesCell from "./Cells/NotesCell";
import InputCell from "./Cells/InputCell";
import CheckBoxCell from "./Cells/CheckBoxCell";
import NumberInputCell from "./Cells/NumberInputCell";
import ToothNumberCell from "./Cells/ToothNumberCell";

export default function LegendBodyMucosa() {
  return (
    <tbody>
      <tr>
        <LabelCell labelTitle="Notes" />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <td className="emptyColumn"></td>
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
        <NotesCell />
      </tr>
      <tr>
        <LabelCell labelTitle="Fixation" />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <td className="emptyColumn"></td>
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
        <InputCell />
      </tr>
      <tr>
        <LabelCell labelTitle="PMC" />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <td className="emptyColumn"></td>
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
      </tr>
      <tr>
        <LabelCell labelTitle="STM" />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <td className="emptyColumn"></td>
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
      </tr>
      <tr>
        <LabelCell labelTitle="MT" />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <td className="emptyColumn"></td>
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
      </tr>
      <tr>
        <LabelCell labelTitle="KMW" />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <td className="emptyColumn"></td>
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
      </tr>
      <tr>
        <LabelCell labelTitle="STH" />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <td className="emptyColumn"></td>
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
      </tr>
      <tr>
        <LabelCell />
        <ToothNumberCell toothNumber="18" />
        <ToothNumberCell toothNumber="17" />
        <ToothNumberCell toothNumber="16" />
        <ToothNumberCell toothNumber="15" />
        <ToothNumberCell toothNumber="14" />
        <ToothNumberCell toothNumber="13" />
        <ToothNumberCell toothNumber="12" />
        <ToothNumberCell toothNumber="11" />
        <td className="emptyColumn"></td>
        <ToothNumberCell toothNumber="21" />
        <ToothNumberCell toothNumber="22" />
        <ToothNumberCell toothNumber="23" />
        <ToothNumberCell toothNumber="24" />
        <ToothNumberCell toothNumber="25" />
        <ToothNumberCell toothNumber="26" />
        <ToothNumberCell toothNumber="27" />
        <ToothNumberCell toothNumber="28" />
      </tr>
      <tr>
        <LabelCell labelTitle="STH" />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <td className="emptyColumn"></td>
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
      </tr>
      <tr>
        <LabelCell labelTitle="KMW" />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <td className="emptyColumn"></td>
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
      </tr>
      <tr>
        <LabelCell labelTitle="MT" />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <td className="emptyColumn"></td>
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
        <NumberInputCell />
      </tr>
      <tr>
        <LabelCell labelTitle="STM" />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <td className="emptyColumn"></td>
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
      </tr>
      <tr>
        <LabelCell labelTitle="PMC" />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <td className="emptyColumn"></td>
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
        <CheckBoxCell />
      </tr>
    </tbody>
  );
}
