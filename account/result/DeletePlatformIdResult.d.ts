import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class DeletePlatformIdResult implements IResult {
    private item;
    getItem(): Gs2Account.PlatformId | null;
    setItem(item: Gs2Account.PlatformId | null): this;
    withItem(item: Gs2Account.PlatformId | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeletePlatformIdResult;
    toDict(): {
        [key: string]: any;
    };
}
