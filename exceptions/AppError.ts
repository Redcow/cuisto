type ErrorDto<T> = {
    name: T;
    message: string;
    cause?: unknown;
}

export class AppError <T extends string> extends Error
{
    readonly name: T;
    cause?: unknown;

    constructor({name, message, cause}: ErrorDto<T>)
    {
        super(message);
        this.name = name;
        this.cause = cause
    }
}