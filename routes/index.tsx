import { type Handlers } from "$fresh/src/server/types.ts";
import { useSignal } from "@preact/signals";
import Layout from "components/Skeleton/Layout.tsx";
import { type PageProps } from "$fresh/server.ts";
import { type ServerState } from "infrastructure/Types.d.ts";
import Card from "components/container/Card.tsx";

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
        <Card>
          <div class="flex-row">
            <img src="/images/noodles.png" />
            <h2>
              Trouvez un plat près de chez vous garanti fait maison!
            </h2>
          </div>
        </Card>

        {
          /* <a class="btn btn-primary" href="/ma-cuisine">
            Ma cuisine
          </a> */
        }
      </div>
    </Layout>
  );
}
