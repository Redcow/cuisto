import { Handlers, PageProps } from "$fresh/server.ts";
import ConnexionHandler from "handlers/ConnexionHandler.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { ServerState } from "infrastructure/Types.d.ts";
import { FormField } from "components/input/FormField.tsx";
import Card from "components/container/Card.tsx";
import CardHeader from "components/container/CardHeader.tsx";
import CardBody from "components/container/CardBody.tsx";
import CardFooter from "components/container/CardFooter.tsx";
import { Button } from "components/input/Button.tsx";

export const handler: Handlers = {
  POST: ConnexionHandler.POST,
};

export default function LoginPage(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <Card class="w-small center">
        <CardHeader>
          <h3>CONNEXION</h3>
        </CardHeader>

        <CardBody>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            method="post"
          >
            <FormField
              text="Votre email"
              autoFocus
              required
              placeholder="email@..."
              name="email"
              id="email"
              type="email"
            />

            <FormField
              text="Votre mot de passe"
              required
              placeholder="Mot de passe"
              name="password"
              type="password"
              id="password"
              //minlength="8"
            />

            <button type="submit" class="link link-primary">
              se connecter
            </button>
          </form>
        </CardBody>

        <CardFooter>
          <Button>
            se connecter
          </Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
