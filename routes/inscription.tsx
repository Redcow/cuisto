
import { type Handlers, PageProps } from "$fresh/server.ts";
import InscriptionHandler from "handlers/InscriptionHandler.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { type ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  POST: InscriptionHandler.POST,
};

export default function LoginPage(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="card-white w-small center">
        <div class="card-header">
          <h3>INSCRIPTION</h3>
        </div>

        <div class="card-body">
        <form
        style={{ display: "flex", flexDirection: "column" }}
        method="post"
      >
        <label>
          email
          <input
            autoFocus
            required
            placeholder="email@..."
            name="email"
            type="email"
          />
        </label>
        <label>
          mot de passe
          <input
            required
            placeholder="Mot de passe"
            name="password"
            type="password"
            //minlength="8"
          />
        </label>

        <button type="submit">
          GO
        </button>
      </form>
          </div>

      
    </div>
    </Layout>
  );
}
