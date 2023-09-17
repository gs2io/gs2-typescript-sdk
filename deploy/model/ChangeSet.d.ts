import IModel from '../../core/interface/IModel';
export default class ChangeSet implements IModel {
    private resourceName;
    private resourceType;
    private operation;
    getResourceName(): string | null;
    setResourceName(resourceName: string | null): this;
    withResourceName(resourceName: string | null): this;
    getResourceType(): string | null;
    setResourceType(resourceType: string | null): this;
    withResourceType(resourceType: string | null): this;
    getOperation(): string | null;
    setOperation(operation: string | null): this;
    withOperation(operation: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChangeSet | null;
    toDict(): {
        [key: string]: any;
    };
}
