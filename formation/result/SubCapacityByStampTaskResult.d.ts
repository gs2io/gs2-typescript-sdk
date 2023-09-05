import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class SubCapacityByStampTaskResult implements IResult {
    private item;
    private moldModel;
    private newContextStack;
    getItem(): Gs2Formation.Mold | null;
    setItem(item: Gs2Formation.Mold | null): this;
    withItem(item: Gs2Formation.Mold | null): this;
    getMoldModel(): Gs2Formation.MoldModel | null;
    setMoldModel(moldModel: Gs2Formation.MoldModel | null): this;
    withMoldModel(moldModel: Gs2Formation.MoldModel | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubCapacityByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
