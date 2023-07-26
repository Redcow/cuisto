import { HandlerContext } from "$fresh/server.ts";

async function GET(_request: Request, context: HandlerContext): Promise<Response> {
    const plats = await [{},{}];

    return context.render({
        ...context.state,
        plats
    });
}

export default {
    GET
};