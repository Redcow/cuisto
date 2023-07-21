import { type Handlers } from "$fresh/src/server/types.ts";
import { useSignal } from "@preact/signals";
import Layout from "components/Skeleton/Layout.tsx";
import { type PageProps } from "$fresh/server.ts";
import { type ServerState } from "infrastructure/Types.d.ts";

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
        <div class="card3">
          <div class="flex-row">
            
            <h2>
              <img src="/images/noodles.png" />
              Trouvez un plat près de chez vous garanti fait maison!
            </h2>
            <h2>

            </h2>
          </div>

          {
            /* <a class="btn btn-primary" href="/ma-cuisine">
            Ma cuisine
          </a> */
          }
        </div>
      </div>
    </Layout>
  );
}
