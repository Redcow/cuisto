import { ComponentProps } from "preact";

export default function CardFooter(props: ComponentProps<any>) {

  return (
    <div class="card-footer">
      {props.children}
    </div>
  );
}
