import { supabase } from "infrastructure/supabase.ts";
import { Uploader } from "infrastructure/uploader.ts";

import { type ServerState } from "infrastructure/Types.d.ts";
import { type HandlerContext, Handlers } from "$fresh/server.ts";

type Meal = {
  name: string;
  price: number;
  description: string;
  photo: Blob;
  user_id: string|null|undefined;
  id: string|null|undefined;
};

function getFormData(formData: FormData): Meal {
  return {
    name: String(formData.get("name")),
    description: String(formData.get("description")),
    price: +(formData.get("price") || 0),
    photo: formData.get("photo") as Blob,
    user_id: null,
    id: null
  };
}

async function saveMeal(meal: Meal): Promise<void> {
    const { data, error } = await supabase
      .from("meals")
      .insert(meal)
      .select();

    meal.id = data.id;
}

function uploadMealPhoto(meal: Meal) {
    const uploader = new Uploader();
    return uploader.upload(meal.photo, {
        bucket: "meal",
        path: "/"+meal.user_id+"/"+meal.id
    });
}

export const handler: Handlers<any, ServerState> = {
  async POST(
    request: Request,
    context: HandlerContext<unknown, ServerState>,
  ): Promise<Response> {
    const meal = getFormData(await request.formData());

    if(!context.state.user) {
        const headers = new Headers();
        headers.set("location", "/");
        return new Response(null, { status: 401, headers });
    }

    const user = context.state.user;

    meal.user_id = user.id;

    await saveMeal(meal);

    await uploadMealPhoto(meal);

    const headers = new Headers();
    headers.set("location", "/ma-cuisine/mes-plats");

    return new Response(null, { status: 303, headers });
  },
};
