import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetMoldModelResult implements IResult {
    private item;
    getItem(): Gs2Formation.MoldModel | null;
    setItem(item: Gs2Formation.MoldModel | null): this;
    withItem(item: Gs2Formation.MoldModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMoldModelResult;
    toDict(): {
        [key: string]: any;
    };
}
