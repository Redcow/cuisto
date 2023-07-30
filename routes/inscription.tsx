import { type Handlers, PageProps } from "$fresh/server.ts";
import Layout from "components/Skeleton/Layout.tsx";
import { type ServerState } from "infrastructure/Types.d.ts";
import { FormField } from "components/input/FormField.tsx";
import { Button } from "components/input/Button.tsx";
import Card from "components/container/Card.tsx";
import CardHeader from "components/container/CardHeader.tsx";
import CardBody from "components/container/CardBody.tsx";
import CardFooter from "components/container/CardFooter.tsx";

export default function LoginPage(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <Card class="w-small center">
        <CardHeader>
          <h3>INSCRIPTION</h3>
        </CardHeader>

        <CardBody>
          <form
            id="signup-form"
            action="/api/signup"
            method="post"
          >
            <FormField
              text="email"
              autofocus
              required
              placeholder="email@..."
              name="email"
              type="email"
            />

            <FormField
              text="mot de passe"
              required
              placeholder="Mot de passe"
              name="password"
              type="password"
              minLength={6}
            />

            <FormField
              text="Prénom"
              required
              name="first_name"
              type="text"
            />

            <FormField
              text="Nom"
              required
              name="last_name"
              type="text"
            />
          </form>
        </CardBody>

        <CardFooter>
          <Button form="signup-form">
            S'inscrire
          </Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
