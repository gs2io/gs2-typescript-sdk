import IModel from '../../core/interface/IModel';
import * as Gs2JobQueue from '../../jobQueue/model';
export default class DeadLetterJob implements IModel {
    private deadLetterJobId;
    private name;
    private userId;
    private scriptId;
    private args;
    private result;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getDeadLetterJobName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, deadLetterJobName: string | null): string | null;
    getDeadLetterJobId(): string | null;
    setDeadLetterJobId(deadLetterJobId: string | null): this;
    withDeadLetterJobId(deadLetterJobId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getResult(): Gs2JobQueue.JobResultBody[] | null;
    setResult(result: Gs2JobQueue.JobResultBody[] | null): this;
    withResult(result: Gs2JobQueue.JobResultBody[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeadLetterJob | null;
    toDict(): {
        [key: string]: any;
    };
}
