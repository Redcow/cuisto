import { deleteCookie } from "$std/http/cookie.ts";
import { Handlers } from "$fresh/server.ts";
import { supabase } from "infrastructure/supabase.ts";

export const handler: Handlers = {
  async GET(request) {
    const url = new URL(request.url);
    const headers = new Headers(request.headers);

    deleteCookie(headers, "auth", { path: "/", domain: url.hostname });
    const { error } = await supabase.auth.signOut()

    headers.set("location", "/");

    return new Response(null, { status: 302, headers });
  },
};
