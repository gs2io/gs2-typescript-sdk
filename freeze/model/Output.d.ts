import IModel from '../../core/interface/IModel';
export default class Output implements IModel {
    private outputId;
    private name;
    private text;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getStageName(grn: string): string | null;
    static getOutputName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, stageName: string | null, outputName: string | null): string | null;
    getOutputId(): string | null;
    setOutputId(outputId: string | null): this;
    withOutputId(outputId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getText(): string | null;
    setText(text: string | null): this;
    withText(text: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Output | null;
    toDict(): {
        [key: string]: any;
    };
}
