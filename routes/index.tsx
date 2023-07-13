import { Handlers } from "$fresh/src/server/types.ts";
import { useSignal } from "@preact/signals";
import Counter from "islands/Counter.tsx";
import Layout from "components/Skeleton/Layout.tsx";
import { PageProps } from "$fresh/server.ts";
import { ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  GET(_request, context) {
    return context.render(context.state);
  },
};

export default function Home(props: PageProps<ServerState>) {
  const count = useSignal(3);
  return (
    <Layout state={props.data}>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter count={count} />
        <a
          href="/inscription"
          style={{ border: "1px solid black" }}
        >
          créer un compte
        </a>
        <br />
        <a href="/secret">
          secret path
        </a>
      </div>
    </Layout>
  );
}
