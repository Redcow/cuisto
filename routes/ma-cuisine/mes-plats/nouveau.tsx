import { FormField } from "components/input/FormField.tsx";
import Layout from "components/Skeleton/Layout.tsx";
import Card from "components/container/Card.tsx";
import CardHeader from "components/container/CardHeader.tsx";
import CardBody from "components/container/CardBody.tsx";
import CardFooter from "components/container/CardFooter.tsx";
import { Button } from "components/input/Button.tsx";

import { type Handlers, type PageProps } from "$fresh/server.ts";
import { type ServerState } from "infrastructure/Types.d.ts";

export const handler: Handlers = {
  /* GET(_request, context) {
    return context.render(context.state);
  }, */
  async POST(request, context) {
    const form = await request.formData();

    const name = String(form.get("name"));
    const description = String(form.get("description"));
    const photo = form.get("photo") as Blob;
    const price = +form.get("price");

    console.log("photo", photo);

    if (photo) {
      try {
        console.log(typeof photo);
        const reader = photo.stream().getReader();
        //const reader = request.body.stream().getReader();
        const result = await reader.read();
        if (result.value) {
          await Deno.writeFile(
            `tmp/${photo.name}`,
            result.value,
          );
        }
      } catch (e) {
        console.error(e);
      }
    }

    return context.render(context.state);
  },
};

export default function NewTakeAway(props: PageProps<ServerState>) {
  // todo mettre en textarea la desc
  return (
    <Layout state={props.data}>
      <Card>
        <CardHeader>
          <h3>Ton nouveau plat</h3>
        </CardHeader>
        <CardBody>
          <form
            id="new-plat"
            class="w-small center"
            method="post"
            action="/api/kitchen/meals"
            encType="multipart/form-data"
          >
            <FormField
              name="name"
              text="Nom de ton plat"
              required
            />

            <FormField
              name="description"
              text="Quelques mots pour donner envie ?"
              textarea
              required
            />

            <FormField
              name="photo"
              text="Une photo ?"
              type="file"
              required
            />

            <FormField
              text="Combien ça coûte ?"
              name="price"
              type="number"
              required
            />
            <Button
              type="submit"
              form="new-plat"
            >
              Ajouter à ma carte
            </Button>
          </form>
        </CardBody>
      </Card>
    </Layout>
  );
}
