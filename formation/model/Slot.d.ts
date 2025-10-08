import IModel from '../../core/interface/IModel';
export default class Slot implements IModel {
    private name;
    private propertyId;
    private metadata;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Slot | null;
    toDict(): {
        [key: string]: any;
    };
}
