import IModel from '../../core/interface/IModel';
import * as Gs2Formation from '../../formation/model';
export default class Form implements IModel {
    private formId;
    private name;
    private index;
    private slots;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getMoldModelName(grn: string): string | null;
    static getIndex(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, moldModelName: string | null, index: string | null): string | null;
    getFormId(): string | null;
    setFormId(formId: string | null): this;
    withFormId(formId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    getSlots(): Gs2Formation.Slot[] | null;
    setSlots(slots: Gs2Formation.Slot[] | null): this;
    withSlots(slots: Gs2Formation.Slot[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Form | null;
    toDict(): {
        [key: string]: any;
    };
}
