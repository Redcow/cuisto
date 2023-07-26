import { LabelledInput } from "components/input/LabelledInput.tsx";
import Layout from "components/Skeleton/Layout.tsx";

import { type Handlers, type PageProps } from "$fresh/server.ts";
import { type ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  GET(_request, context) {
    return context.render(context.state);
  },
};

export default function NewTakeAway(props: PageProps<ServerState>)
{
  // todo mettre en textarea la desc
  return (
    <Layout state={props.data}>
      <form>
        <LabelledInput text="Nomme ton plat">
          <input name="name" required />
        </LabelledInput>

        <LabelledInput text="Comment as-tu trouvé la recette ?">
          <input name="description" required />
        </LabelledInput>
        
        <LabelledInput text="Tu nous montres ?">
          <input name="photo" type="file" required />
        </LabelledInput>

        <LabelledInput text="Combien ça coûte ?">
          <input name="price" type="number" required />
        </LabelledInput>

        <button type="submit"> Ajouter à ma carte</button>
      </form>
    </Layout>
  );
}
