import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetMoldByUserIdResult implements IResult {
    private item;
    private moldModel;
    getItem(): Gs2Formation.Mold | null;
    setItem(item: Gs2Formation.Mold | null): this;
    withItem(item: Gs2Formation.Mold | null): this;
    getMoldModel(): Gs2Formation.MoldModel | null;
    setMoldModel(moldModel: Gs2Formation.MoldModel | null): this;
    withMoldModel(moldModel: Gs2Formation.MoldModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMoldByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
