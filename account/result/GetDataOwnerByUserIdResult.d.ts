import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class GetDataOwnerByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Account.DataOwner | null;
    setItem(item: Gs2Account.DataOwner | null): this;
    withItem(item: Gs2Account.DataOwner | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDataOwnerByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
