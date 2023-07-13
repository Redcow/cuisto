import { Handlers,PageProps } from "$fresh/server.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  GET(_request, context) {
    return context.render(context.state);
  },
};

export default function Secret(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="flex flex-col items-center">
        <h2>Congrats, You've reached the secret page!</h2>
        <p>Here's a little treat:</p>
        <p class="text-[72px] text-align-center">🍋</p>
      </div>
    </Layout>
  );
}
