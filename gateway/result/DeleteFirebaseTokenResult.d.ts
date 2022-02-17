import IResult from '../../core/interface/IResult';
import * as Gs2Gateway from '../model';
export default class DeleteFirebaseTokenResult implements IResult {
    private item;
    getItem(): Gs2Gateway.FirebaseToken | null;
    setItem(item: Gs2Gateway.FirebaseToken | null): this;
    withItem(item: Gs2Gateway.FirebaseToken | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteFirebaseTokenResult;
    toDict(): {
        [key: string]: any;
    };
}
