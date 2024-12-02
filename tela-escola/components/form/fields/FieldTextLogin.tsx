import { IFieldText } from "utils/interfaces/IFields";

export default function FieldTextLogin({
  label,
  name,
  placeholder,
  icon,
  iconSize,
  typeField,
  max,
  disabledField,
  messageField
}: IFieldText) {
  return (
    <div className="w-full relative">
      <label
        htmlFor={ name }
        className="flex flex-col w-full px-5 py-2  rounded-lg border border-neutral-700/15 hover:ring hover:ring-slate-700/15 cursor-pointer duration-200"
      >
        <div className="flex flex-row space-x-1.5">
          {icon && (
            <img
              src={ icon }
              alt="SVG Icon"
              width={ iconSize ?? 18 }
            />
          )}
          <span className="font-bold text-base text-neutral-700/50">
            { label }
          </span>
        </div>
        <input 
          type={ typeField }
          id={ name }
          name={ name }
          placeholder={ placeholder ?? "" }
          maxLength={ max ? max : 500 }
          disabled={ disabledField }
          className="outline-none text-base placeholder-neutral-700/70 w-full font-semibold p-1 rounded-lg"
        />
      </label>
      { 
        messageField && messageField.length > 0 && 
        <span 
          className="w-full pr-2 font-semibold text-red-500/80 text-xs flex justify-end absolute"
        >
          { messageField && messageField.length > 0 ? messageField : null }
        </span>
      }
    </div>
  );
}