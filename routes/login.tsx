import { Handlers, PageProps } from "$fresh/server.ts";

import LoginHandler from "handlers/ConnexionHandler.ts";

export const handler: Handlers = 
{
    POST: LoginHandler.POST
};

export default function Login(props: PageProps)
{
  return (
    <div>
      <h3>Se connecter</h3>
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
      {props.data?.failed && <div style={{backgroundColor: "rose"}}>
        raté
        </div>}
    </div>
  );
}
