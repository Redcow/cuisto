import { Input } from "components/input/Input.tsx";
import { type JSX } from "preact";

/* type Props = 
{
    text: string,
    [attr:string]: any;
} */

interface Props extends JSX.HTMLAttributes<HTMLInputElement> {
    text: string
}

export function LabelledInput({text, ...attributes}: Props) {
    return (
    <label>
        {text}
        <Input {...attributes} />
    </label>);
}