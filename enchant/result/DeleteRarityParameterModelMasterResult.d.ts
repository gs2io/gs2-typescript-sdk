import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class DeleteRarityParameterModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Enchant.RarityParameterModelMaster | null;
    setItem(item: Gs2Enchant.RarityParameterModelMaster | null): this;
    withItem(item: Gs2Enchant.RarityParameterModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRarityParameterModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
