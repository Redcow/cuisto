import { HandlerContext } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";
import { supabase } from "infrastructure/supabase.ts";
import { giveHomeUrlFor } from "../infrastructure/security.ts";

export async function POST(
  request: Request,
  context: HandlerContext,
): Promise<Response> {
  const url = new URL(request.url);
  const form = await request.formData();

  const email = String(form.get("email"));
  const password = String(form.get("password"));

  const { data: { user, session }, error } = await supabase.auth
    .signInWithPassword({
      email: email,
      password: password,
    });

  if (error != null || user == null || session == null) {
    return context.render({ failed: true });
  }

  const headers = new Headers();
  headers.set("location", giveHomeUrlFor(user));

  // console.log(session) todo handle for refresh

  setCookie(headers, {
    name: "auth",
    value: session.access_token,
    maxAge: session.expires_in,
    sameSite: "Lax",
    domain: url.hostname,
    path: "/",
    secure: true,
  });

  return new Response(null, { status: 303, headers });
}

export default {
  POST,
};
