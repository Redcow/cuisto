import { Input } from "components/input/Input.tsx";
import { type JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLInputElement> {
  text: string;
  textarea?: boolean;
}

export function FormField({ text, textarea, ...attributes }: Props) {
  if (textarea) {
    return (
      <label>
        {text}
        <textarea {...attributes}></textarea>
      </label>
    );
  }

  return (
    <label>
      {text}
      <Input {...attributes} />
    </label>
  );
}
