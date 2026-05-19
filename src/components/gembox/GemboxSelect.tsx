import { useEffect, useId, useRef, useState } from "react";

type GemboxSelectProps = {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
};

export function GemboxSelect({
  label,
  name,
  required = false,
  value,
  onChange,
  options,
  placeholder = "Select an option",
}: GemboxSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const fieldId = useId();

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const displayLabel = value || placeholder;

  return (
    <div className="gb-select" ref={rootRef}>
      <label className="gb-input__label" htmlFor={fieldId}>
        {label}
        {required ? <span className="gb-input__required" aria-hidden="true"> *</span> : null}
      </label>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        id={fieldId}
        className={`gb-select__trigger${open ? " gb-select__trigger--open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? "gb-select__value" : "gb-select__placeholder"}>
          {displayLabel}
        </span>
        <img
          className="gb-select__chevron"
          src="/assets/gembox/angles-up-down.svg"
          alt=""
          width={12}
          height={12}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <ul className="gb-select__menu" id={listId} role="listbox" aria-label={label}>
          {options.map((option) => (
            <li key={option} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === option}
                className={`gb-select__option${value === option ? " gb-select__option--selected" : ""}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}