import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class CreateProgressByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Quest.Progress | null;
    setItem(item: Gs2Quest.Progress | null): this;
    withItem(item: Gs2Quest.Progress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateProgressByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
