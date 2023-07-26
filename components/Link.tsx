import { ComponentChildren, JSX } from "preact";

export function Link({children, ...aProps}: JSX.HTMLAttributes<HTMLAnchorElement>) {
    return (
    <a class="link" {...aProps}>
    {children}
  </a>);
}