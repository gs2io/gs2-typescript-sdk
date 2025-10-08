import IModel from '../../core/interface/IModel';
export default class Receipt implements IModel {
    private receiptId;
    private accountName;
    private name;
    private date;
    private amount;
    private pdfUrl;
    private createdAt;
    private updatedAt;
    static getAccountName(grn: string): string | null;
    static getReceiptName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(accountName: string | null, receiptName: string | null): string | null;
    getReceiptId(): string | null;
    setReceiptId(receiptId: string | null): this;
    withReceiptId(receiptId: string | null): this;
    getAccountName(): string | null;
    setAccountName(accountName: string | null): this;
    withAccountName(accountName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDate(): number | null;
    setDate(date: number | null): this;
    withDate(date: number | null): this;
    getAmount(): string | null;
    setAmount(amount: string | null): this;
    withAmount(amount: string | null): this;
    getPdfUrl(): string | null;
    setPdfUrl(pdfUrl: string | null): this;
    withPdfUrl(pdfUrl: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Receipt | null;
    toDict(): {
        [key: string]: any;
    };
}
