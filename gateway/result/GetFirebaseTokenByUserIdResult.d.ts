import IResult from '../../core/interface/IResult';
import * as Gs2Gateway from '../model';
export default class GetFirebaseTokenByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Gateway.FirebaseToken | null;
    setItem(item: Gs2Gateway.FirebaseToken | null): this;
    withItem(item: Gs2Gateway.FirebaseToken | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFirebaseTokenByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
