import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2MoneyRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    describeWallets(request: Request.DescribeWalletsRequest): Promise<Result.DescribeWalletsResult>;
    describeWalletsByUserId(request: Request.DescribeWalletsByUserIdRequest): Promise<Result.DescribeWalletsByUserIdResult>;
    getWallet(request: Request.GetWalletRequest): Promise<Result.GetWalletResult>;
    getWalletByUserId(request: Request.GetWalletByUserIdRequest): Promise<Result.GetWalletByUserIdResult>;
    depositByUserId(request: Request.DepositByUserIdRequest): Promise<Result.DepositByUserIdResult>;
    withdraw(request: Request.WithdrawRequest): Promise<Result.WithdrawResult>;
    withdrawByUserId(request: Request.WithdrawByUserIdRequest): Promise<Result.WithdrawByUserIdResult>;
    depositByStampSheet(request: Request.DepositByStampSheetRequest): Promise<Result.DepositByStampSheetResult>;
    withdrawByStampTask(request: Request.WithdrawByStampTaskRequest): Promise<Result.WithdrawByStampTaskResult>;
    describeReceipts(request: Request.DescribeReceiptsRequest): Promise<Result.DescribeReceiptsResult>;
    getByUserIdAndTransactionId(request: Request.GetByUserIdAndTransactionIdRequest): Promise<Result.GetByUserIdAndTransactionIdResult>;
    recordReceipt(request: Request.RecordReceiptRequest): Promise<Result.RecordReceiptResult>;
    recordReceiptByStampTask(request: Request.RecordReceiptByStampTaskRequest): Promise<Result.RecordReceiptByStampTaskResult>;
}
