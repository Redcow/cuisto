
import { Handlers } from "$fresh/server.ts";
import { supabase } from "infrastructure/supabase.ts";

export const handler: Handlers = 
{
    async POST(request, context) {
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
      },
};

export default function LoginPage() {
  return (
    <div>
      <h3>INSCRIPTION</h3>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        method="post"
      >
        <label>
          email
          <input
            autoFocus
            required
            placeholder="email@..."
            name="email"
            type="email"
          />
        </label>
        <label>
          mot de passe
          <input
            required
            placeholder="Mot de passe"
            name="password"
            type="password"
            //minlength="8"
          />
        </label>

        <button type="submit">
          GO
        </button>
      </form>
    </div>
  );
}
