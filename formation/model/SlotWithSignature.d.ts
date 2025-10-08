import IModel from '../../core/interface/IModel';
export default class SlotWithSignature implements IModel {
    private name;
    private propertyType;
    private body;
    private signature;
    private metadata;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getPropertyType(): string | null;
    setPropertyType(propertyType: string | null): this;
    withPropertyType(propertyType: string | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SlotWithSignature | null;
    toDict(): {
        [key: string]: any;
    };
}
