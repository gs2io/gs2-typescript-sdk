import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DeleteProgressByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Quest.Progress | null;
    setItem(item: Gs2Quest.Progress | null): this;
    withItem(item: Gs2Quest.Progress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteProgressByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
