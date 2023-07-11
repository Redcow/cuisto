import { Handlers, PageProps } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = 
{
    async POST(request, context) {
        console.log(request)
        const url = new URL(request.url);
        const form = await request.formData();
    
        const email = String(form.get("email"));
        const password = String(form.get("password"));
    
        const headers = new Headers();
    
        if (
          email === "francisco_canari@hotmail.fr" &&
          password === "123"
        ) {
          headers.set("location", "/");
    
          setCookie(headers, {
            name: "auth",
            value: "jojo",
            maxAge: 3600,
            sameSite: "Lax",
            domain: url.hostname,
            path: "/",
            secure: true,
          });
    
          return new Response(null, { status: 303, headers });
        } else {
          return context.render({failed: true});
        }
      },
};

export default function Login(props: PageProps)
{
  return (
    <div>
      <h3>Se connecter</h3>
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
      {props.data?.failed && <div style={{backgroundColor: "rose"}}>
        raté
        </div>}
    </div>
  );
}
