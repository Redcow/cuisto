import { ComponentProps } from "preact";

export default function CardBody(props: ComponentProps<any>) {
  return (
    <div class="card-body">
      {props.children}
    </div>
  );
}
