import type { InputHTMLAttributes } from "react";

type GemboxInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
  error?: string;
  helpText?: string;
};

export function GemboxInput({
  label,
  required = false,
  error,
  helpText,
  id,
  className = "",
  ...rest
}: GemboxInputProps) {
  const fieldId = id ?? `gb-input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`gb-input ${className}`.trim()}>
      <label className="gb-input__label" htmlFor={fieldId}>
        {label}
        {required ? <span className="gb-input__required" aria-hidden="true"> *</span> : null}
      </label>
      {helpText ? <p className="gb-input__help">{helpText}</p> : null}
      <input className="gb-input__field" id={fieldId} required={required} {...rest} />
      {error ? <p className="gb-input__error">{error}</p> : null}
    </div>
  );
}
