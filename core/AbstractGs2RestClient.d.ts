import { Gs2RestSession } from './model';
export default class {
    session: Gs2RestSession;
    constructor(session: Gs2RestSession);
    protected createAuthorizedHeaders(): {
        [key: string]: any;
    };
}
