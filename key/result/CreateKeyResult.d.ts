import IResult from '../../core/interface/IResult';
import * as Gs2Key from '../model';
export default class CreateKeyResult implements IResult {
    private item;
    getItem(): Gs2Key.Key | null;
    setItem(item: Gs2Key.Key | null): this;
    withItem(item: Gs2Key.Key | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateKeyResult;
    toDict(): {
        [key: string]: any;
    };
}
