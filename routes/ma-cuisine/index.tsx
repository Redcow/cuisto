import { Handlers,PageProps } from "$fresh/server.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  GET(_request, context) {
    return context.render(context.state);
  },
};

export default function MyKitchenPage(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="flex flex-col items-center">
        Bienvenue dans ta cuisine, elle te plait?
        <div>
          <a href="ma-cuisine/mes-plats">Mes plats</a>
        </div>
      </div>
    </Layout>
  );
}
