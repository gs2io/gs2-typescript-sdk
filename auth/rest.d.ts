import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2AuthRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    login(request: Request.LoginRequest): Promise<Result.LoginResult>;
    loginBySignature(request: Request.LoginBySignatureRequest): Promise<Result.LoginBySignatureResult>;
}
