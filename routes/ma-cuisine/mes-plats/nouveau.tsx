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
        <LabelledInput text="Nom de ton plat">
          <input name="name" required />
        </LabelledInput>

        <LabelledInput text="Quelques mots pour donner envie ?">
          <input name="description" required />
        </LabelledInput>
        
        <LabelledInput text="Une photo ?">
          <input name="photo" type="file" required />
        </LabelledInput>

        <LabelledInput 
          text="Combien ça coûte ?"
          name="price"
          type="number"
          required
        />

        <button type="submit"> Ajouter à ma carte</button>
      </form>
    </Layout>
  );
}
