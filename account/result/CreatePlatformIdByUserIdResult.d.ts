import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class CreatePlatformIdByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Account.PlatformId | null;
    setItem(item: Gs2Account.PlatformId | null): this;
    withItem(item: Gs2Account.PlatformId | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreatePlatformIdByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
