import { HandlerContext } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";
import { supabase } from "infrastructure/supabase.ts";

export async function POST(
  request: Request,
  context: HandlerContext,
): Promise<Response> {
    const url = new URL(request.url);
    const form = await request.formData();

    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const { data: { user, session }, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if(error) {
      return context.render({failed: true});
    }

    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, { status: 303, headers });
  }

export default {
  POST,
};
