import IModel from '../../core/interface/IModel';
export default class ReferenceOf implements IModel {
    private referenceOfId;
    private name;
    getReferenceOfId(): string | null;
    setReferenceOfId(referenceOfId: string | null): this;
    withReferenceOfId(referenceOfId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReferenceOf | null;
    toDict(): {
        [key: string]: any;
    };
}
