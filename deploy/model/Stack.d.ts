import IModel from '@/gs2/core/interface/IModel';
export declare class Stack implements IModel {
    private stackId;
    private name;
    private description;
    private template;
    private status;
    private createdAt;
    private updatedAt;
    getStackId(): string | null;
    setStackId(stackId: string | null): this;
    withStackId(stackId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTemplate(): string | null;
    setTemplate(template: string | null): this;
    withTemplate(template: string | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Stack | null;
    toDict(): {
        [key: string]: any;
    };
}
