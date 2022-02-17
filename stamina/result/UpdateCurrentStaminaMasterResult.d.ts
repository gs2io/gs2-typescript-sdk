import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class UpdateCurrentStaminaMasterResult implements IResult {
    private item;
    getItem(): Gs2Stamina.CurrentStaminaMaster | null;
    setItem(item: Gs2Stamina.CurrentStaminaMaster | null): this;
    withItem(item: Gs2Stamina.CurrentStaminaMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentStaminaMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
