import { ComponentProps } from "preact";

export default function CardHeader(props: ComponentProps<any>) {
  return (
    <div class="card-header">
      {props.children}
    </div>
  );
}
