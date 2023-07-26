import { ComponentProps } from "preact";

export default function Card(props: ComponentProps<any>) {
  return (
    <div class="card-white">
      {props.children}
    </div>
  );
}
