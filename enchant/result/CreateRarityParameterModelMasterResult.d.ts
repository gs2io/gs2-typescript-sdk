import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class CreateRarityParameterModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Enchant.RarityParameterModelMaster | null;
    setItem(item: Gs2Enchant.RarityParameterModelMaster | null): this;
    withItem(item: Gs2Enchant.RarityParameterModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateRarityParameterModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
