import { supabase } from "infrastructure/supabase.ts";
import { UploadError } from "../exceptions/UploadError.ts";

type UploadOptions = {
    bucket: string,
    path: string
}

export class Uploader
{
    async upload(file: File | Blob, {bucket, path}: UploadOptions): Promise<void>
    {
        const { data, error } = await supabase.storage.from(bucket).upload(path, file);
        
        if(error) throw new UploadError({
            name: "UPLOADER_FAIL",
            message: "Impossible d'enregistrer le fichier",
            cause: error
        });

        console.log(data);
    }
}