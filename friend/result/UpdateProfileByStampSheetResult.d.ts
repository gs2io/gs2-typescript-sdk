import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class UpdateProfileByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Friend.Profile | null;
    setItem(item: Gs2Friend.Profile | null): this;
    withItem(item: Gs2Friend.Profile | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateProfileByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
