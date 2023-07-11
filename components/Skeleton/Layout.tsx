import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  isAllowed: boolean;
};

const LoginButton = () => (
  <a
    style={{ border: "1px solid black" }}
    href="/connexion"
  >
    se connecter
  </a>
);

const LogOutButton = () => (
  <a
    style={{ border: "1px solid black" }}
    href="/api/sign-out"
  >
    partir
  </a>
);

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div>
        <nav>
          <div>
            {props.isAllowed ? <LogOutButton /> : <LoginButton />}
          </div>
        </nav>

        <div>
          {props.children}
        </div>
      </div>
    </>
  );
}
