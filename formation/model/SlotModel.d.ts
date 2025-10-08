import IModel from '../../core/interface/IModel';
export default class SlotModel implements IModel {
    private name;
    private propertyRegex;
    private metadata;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getPropertyRegex(): string | null;
    setPropertyRegex(propertyRegex: string | null): this;
    withPropertyRegex(propertyRegex: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SlotModel | null;
    toDict(): {
        [key: string]: any;
    };
}
