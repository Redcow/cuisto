import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import { ServerState } from "infrastructure/Types.d.ts";

type Props = {
  children: ComponentChildren;
  state: ServerState;
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
  const isAllowed = !!props.state?.user;
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div>
        <nav>
          <div>
            {isAllowed ? <LogOutButton /> : <LoginButton />}
          </div>
        </nav>

        <div>
          {props.children}
        </div>
      </div>
    </>
  );
}
