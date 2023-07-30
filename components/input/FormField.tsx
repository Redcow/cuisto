import { Input } from "components/input/Input.tsx";
import { type JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLInputElement> {
  text: string;
  textarea?: boolean;
}

export function FormField({ text, textarea, ...attributes }: Props) {
  if (textarea) {
    return (
      <div><label>
        {text}
        <textarea {...attributes}></textarea>
      </label></div>
    );
  }

  return (
    <div>
    <label>
      {text}
      <Input {...attributes} />
    </label></div>
  );
}
