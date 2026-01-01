import { Gs2RestSession } from './model';
export default class {
    session: Gs2RestSession;
    constructor(session: Gs2RestSession);
    protected createAuthorizedHeaders(): {
        [key: string]: any;
    };
    private prepareRequestConfig;
    private compressBody;
    protected request<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, headers: {
        [key: string]: any;
    }, params?: {
        [key: string]: any;
    }, body?: {
        [key: string]: any;
    }): Promise<T>;
}
