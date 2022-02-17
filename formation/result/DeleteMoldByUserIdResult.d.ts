import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DeleteMoldByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Formation.Mold | null;
    setItem(item: Gs2Formation.Mold | null): this;
    withItem(item: Gs2Formation.Mold | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteMoldByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
