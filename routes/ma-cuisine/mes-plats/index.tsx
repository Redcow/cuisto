import Layout from "components/Skeleton/Layout.tsx";

import { type Handlers, type PageProps } from "$fresh/server.ts";
import { type ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  GET(_request, context) {
    return context.render(context.state);
  },
};

export default function MyTakeAway(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="flex flex-col items-center">
        Qu'est ce que tu nous prépares de bon ??
        <a
          href="/ma-cuisine/mes-plats/nouveau"
        >
          Ajouter un plat à ma carte!
        </a>
      </div>
    </Layout>
  );
}
