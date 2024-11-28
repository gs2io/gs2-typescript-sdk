import IModel from '../../core/interface/IModel';
import * as Gs2Buff from '../../buff/model';
export default class BuffTargetModel implements IModel {
    private targetModelName;
    private targetFieldName;
    private conditionGrns;
    private rate;
    getTargetModelName(): string | null;
    setTargetModelName(targetModelName: string | null): this;
    withTargetModelName(targetModelName: string | null): this;
    getTargetFieldName(): string | null;
    setTargetFieldName(targetFieldName: string | null): this;
    withTargetFieldName(targetFieldName: string | null): this;
    getConditionGrns(): Gs2Buff.BuffTargetGrn[] | null;
    setConditionGrns(conditionGrns: Gs2Buff.BuffTargetGrn[] | null): this;
    withConditionGrns(conditionGrns: Gs2Buff.BuffTargetGrn[] | null): this;
    getRate(): number | null;
    setRate(rate: number | null): this;
    withRate(rate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BuffTargetModel | null;
    toDict(): {
        [key: string]: any;
    };
}
