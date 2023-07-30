import { Handlers, type HandlerContext } from "$fresh/server.ts";
import { supabase } from "infrastructure/supabase.ts";
import { giveHomeUrlFor } from "infrastructure/security.ts";

type User = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

function getFormData(formData: FormData): User {
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
  
    const { email, password, first_name, last_name } = getFormData(
      await request.formData(),
    );
  
    const { data: { user }, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: first_name,
          last_name: last_name,
        },
      },
    });
  
    const headers = new Headers();
    headers.set("location", giveHomeUrlFor(user));

    return new Response(null, { status: 303, headers });
  }
}