import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { ServerState } from "infrastructure/Types.d.ts";
import { Link } from "components/Link.tsx";
import Card from "components/container/Card.tsx";

export const handler: Handlers = {
  GET(_request, context) {
    return context.render(context.state);
  },
};

export default function MyKitchenPage(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <Card>
        <h2>Bienvenue dans ta cuisine, elle te plait?</h2>
        <Link href="ma-cuisine/mes-plats">
          Mes plats
        </Link>
      </Card>
      <Card>
        <Link href="#">
          Mes ventes
        </Link>
        <p>todo faire un graph sur la semaine</p>
      </Card>
      <div class="flex flex-col items-center">
      </div>
    </Layout>
  );
}
