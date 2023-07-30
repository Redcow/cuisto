import { AppError } from "exceptions/AppError.ts";

type ErrorName = 
    | 'UPLOADER_FAIL'
    | 'STORAGE_UNREACHABLE'

export class UploadError 
    extends AppError<ErrorName>{}