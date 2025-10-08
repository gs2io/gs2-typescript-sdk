import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class CreateThresholdMasterResult implements IResult {
    private item;
    getItem(): Gs2Experience.ThresholdMaster | null;
    setItem(item: Gs2Experience.ThresholdMaster | null): this;
    withItem(item: Gs2Experience.ThresholdMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateThresholdMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
