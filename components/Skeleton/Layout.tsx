import { asset, Head } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";
import { type ServerState } from "infrastructure/Types.d.ts";
import { Link } from "../Link.tsx";

type Props = {
  children: ComponentChildren;
  state: ServerState;
};

const SignUp = () => (
  <Link class="link link-transparent" href="/inscription">
    S'inscrire
  </Link>
);

const LoginLink = () => (
  <Link href="/connexion">
    se connecter
  </Link>
);

const LogOutButton = () => (
  <Link href="/api/sign-out">
    se déconnecter
  </Link>
);

const Container = (props: Props) => {
  const isAllowed = !!props.state?.user;
  return (
    <section id="bg">
      <div id="foreground">
        <header class="box">
          <div class="flex-row">
            <img id="logo" src="/images/logo-medium.png" />
            <h1 style={{ textTransform: "uppercase" }}>fait maison</h1>
          </div>

          {isAllowed ? <LogOutButton /> : (
            <span>
              <SignUp />
              <LoginLink />
            </span>
          )}
        </header>

        <article>
          {props.children}
        </article>
      </div>

      <ul id="shape">
        <li>🥒</li>
        <li>🍕</li>
        <li>🍔</li>
        <li>🍙</li>
        <li>🌮</li>
        <li>🥗</li>
        <li>🍌</li>
        <li>🍽️</li>
      </ul>
    </section>
  );
};

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href={asset("/styles/global.css")} />
        <title>Fait maison</title>
        <link rel="icon" type="image/png" href={asset("favicon.png")} />
      </Head>

      <Container {...props} />

      {
        /* <footer class="box">
        mon footer
      </footer> */
      }
    </>
  );
}
