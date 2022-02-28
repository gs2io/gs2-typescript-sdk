import IModel from '../../core/interface/IModel';
export default class SecurityPolicy implements IModel {
    private securityPolicyId;
    private name;
    private description;
    private policy;
    private createdAt;
    private updatedAt;
    static getOwnerId(grn: string): string | null;
    static getSecurityPolicyName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(ownerId: string | null, securityPolicyName: string | null): string | null;
    getSecurityPolicyId(): string | null;
    setSecurityPolicyId(securityPolicyId: string | null): this;
    withSecurityPolicyId(securityPolicyId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPolicy(): string | null;
    setPolicy(policy: string | null): this;
    withPolicy(policy: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SecurityPolicy | null;
    toDict(): {
        [key: string]: any;
    };
}
