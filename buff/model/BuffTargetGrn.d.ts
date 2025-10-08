import IModel from '../../core/interface/IModel';
export default class BuffTargetGrn implements IModel {
    private targetModelName;
    private targetGrn;
    getTargetModelName(): string | null;
    setTargetModelName(targetModelName: string | null): this;
    withTargetModelName(targetModelName: string | null): this;
    getTargetGrn(): string | null;
    setTargetGrn(targetGrn: string | null): this;
    withTargetGrn(targetGrn: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BuffTargetGrn | null;
    toDict(): {
        [key: string]: any;
    };
}
