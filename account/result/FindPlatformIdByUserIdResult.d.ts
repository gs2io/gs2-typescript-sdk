import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class FindPlatformIdByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Account.PlatformUser | null;
    setItem(item: Gs2Account.PlatformUser | null): this;
    withItem(item: Gs2Account.PlatformUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FindPlatformIdByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
