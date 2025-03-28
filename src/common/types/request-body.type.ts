export type RequestBodyType<T> = {
    body: T;
} & Express.Request;