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
      <div class="card-white w-small center">
        <div class="card-header">
          <h3>CONNEXION</h3>
        </div>

        <div class="card-body">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            method="post"
          >
            <div class="flex-col">
              <label for="email">Votre email</label>
              <input
                autoFocus
                required
                placeholder="email@..."
                name="email"
                id="email"
                type="email"
              />
            </div>
          
            <div class="flex-col">
              <label>Votre mot de passe</label>
              <input
                required
                placeholder="Mot de passe"
                name="password"
                type="password"
                id="password"
                //minlength="8"
              />
            </div>

            <button type="submit" class="link link-primary">
              se connecter
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
