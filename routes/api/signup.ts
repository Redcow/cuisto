import { Handlers, type HandlerContext } from "$fresh/server.ts";
import { supabase } from "infrastructure/supabase.ts";
import { giveHomeUrlFor } from "infrastructure/security.ts";
import { setCookie } from "$std/http/cookie.ts";

type FormSignUp = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

function getFormData(formData: FormData): FormSignUp {
  return {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
    first_name: String(formData.get("first_name")),
    last_name: String(formData.get("last_name")),
  };
}

export const handler: Handlers = {
  async POST(
    request: Request,
    _context: HandlerContext,
  ): Promise<Response> {
  
    console.log("hohoho");
  
    const { email, password, first_name, last_name } = getFormData(
      await request.formData(),
    );
  
    const { data: { user, session }, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: first_name,
          last_name: last_name,
        },
      },
    });

    console.log(error);
  
    const headers = new Headers();
    headers.set("location", giveHomeUrlFor(user));
  
    console.log(session);
  
    const url = new URL(request.url);
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
}