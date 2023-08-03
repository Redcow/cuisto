import { Uploader } from "infrastructure/uploader.ts";

import type Meal from "domain/meal/Entity.ts";
import { type MealPhotoUploaderI } from "domain/meal/create/Types.d.ts";

export class MealUploader extends Uploader implements MealPhotoUploaderI
{
    
    uploadPhoto(photo: File, path: string) {
        return super.upload(photo, {
            bucket: "meal",
            path
        })
    }

    createPathForPhoto(photo: File, meal: Meal) {
        return meal.user.id+"/"+meal.id+"/"+photo.name;
    }
}