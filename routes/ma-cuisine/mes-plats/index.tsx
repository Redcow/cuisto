import Layout from "components/Skeleton/Layout.tsx";

import { type Handlers, type PageProps } from "$fresh/server.ts";
import { type ServerState } from "infrastructure/Types.d.ts";
import MesPlatsHandler from "handlers/MesPlatsHandler.ts";
import Card from "components/container/Card.tsx";
import CardHeader from "../../../components/container/CardHeader.tsx";
import CardBody from "../../../components/container/CardBody.tsx";
import { Tile } from "../../../components/container/Tile.tsx";
import { Link } from "../../../components/Link.tsx";

type State = {
  plats: any[]
}

type PageState = ServerState & State

export const handler: Handlers = {
  GET: MesPlatsHandler.GET,
};

export default function MyTakeAway(props: PageProps<PageState>) {
  const plats = props.data.plats || [];
  return (
    <Layout state={props.data}>
      <Card>
        <CardHeader>
          <h3>Ta carte</h3>
        </CardHeader>
        <CardBody>
          {plats.length ? 
            <div>
              <Link href={'mes-plats/nouveau'}>Ajouter un plat!</Link>
              {plats.map(plat => <Tile title="bolognaise" />)}
            </div> 
            : 
            <Link href={'mes-plats/nouveau'}>Créer votre premier plat!</Link>}
        </CardBody>
      </Card>
    </Layout>
  );
}
