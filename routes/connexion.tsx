import { Handlers, PageProps } from "$fresh/server.ts";
import ConnexionHandler from "handlers/ConnexionHandler.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  POST: ConnexionHandler.POST,
};

export default function LoginPage(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div>
        <h3>CONNEXION</h3>
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
    </Layout>
  );
}
