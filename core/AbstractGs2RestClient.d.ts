import { Gs2RestSession } from './model';
export default class {
    session: Gs2RestSession;
    constructor(session: Gs2RestSession);
    protected createAuthorizedHeaders(): {
        [key: string]: any;
    };
    private prepareRequestConfig;
    private compressBody;
    /** 既存の要求と同じ写像: 応答があれば message（JSON 文字列）を展開、無ければ [] */
    private mapError;
    protected request<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, headers: {
        [key: string]: any;
    }, params?: {
        [key: string]: any;
    }, body?: {
        [key: string]: any;
    }): Promise<T>;
}
