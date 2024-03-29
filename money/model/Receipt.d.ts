import IModel from '../../core/interface/IModel';
export default class Receipt implements IModel {
    private receiptId;
    private transactionId;
    private purchaseToken;
    private userId;
    private type;
    private slot;
    private price;
    private paid;
    private free;
    private total;
    private contentsId;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, transactionId: string | null): string | null;
    getReceiptId(): string | null;
    setReceiptId(receiptId: string | null): this;
    withReceiptId(receiptId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getPurchaseToken(): string | null;
    setPurchaseToken(purchaseToken: string | null): this;
    withPurchaseToken(purchaseToken: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getPrice(): number | null;
    setPrice(price: number | null): this;
    withPrice(price: number | null): this;
    getPaid(): number | null;
    setPaid(paid: number | null): this;
    withPaid(paid: number | null): this;
    getFree(): number | null;
    setFree(free: number | null): this;
    withFree(free: number | null): this;
    getTotal(): number | null;
    setTotal(total: number | null): this;
    withTotal(total: number | null): this;
    getContentsId(): string | null;
    setContentsId(contentsId: string | null): this;
    withContentsId(contentsId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Receipt | null;
    toDict(): {
        [key: string]: any;
    };
}
