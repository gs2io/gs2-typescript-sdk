import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class DeleteThresholdMasterResult implements IResult {
    private item;
    getItem(): Gs2Experience.ThresholdMaster | null;
    setItem(item: Gs2Experience.ThresholdMaster | null): this;
    withItem(item: Gs2Experience.ThresholdMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteThresholdMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
