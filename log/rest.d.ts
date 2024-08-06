import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2LogRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    queryAccessLog(request: Request.QueryAccessLogRequest): Promise<Result.QueryAccessLogResult>;
    countAccessLog(request: Request.CountAccessLogRequest): Promise<Result.CountAccessLogResult>;
    queryIssueStampSheetLog(request: Request.QueryIssueStampSheetLogRequest): Promise<Result.QueryIssueStampSheetLogResult>;
    countIssueStampSheetLog(request: Request.CountIssueStampSheetLogRequest): Promise<Result.CountIssueStampSheetLogResult>;
    queryExecuteStampSheetLog(request: Request.QueryExecuteStampSheetLogRequest): Promise<Result.QueryExecuteStampSheetLogResult>;
    countExecuteStampSheetLog(request: Request.CountExecuteStampSheetLogRequest): Promise<Result.CountExecuteStampSheetLogResult>;
    queryExecuteStampTaskLog(request: Request.QueryExecuteStampTaskLogRequest): Promise<Result.QueryExecuteStampTaskLogResult>;
    countExecuteStampTaskLog(request: Request.CountExecuteStampTaskLogRequest): Promise<Result.CountExecuteStampTaskLogResult>;
    queryInGameLog(request: Request.QueryInGameLogRequest): Promise<Result.QueryInGameLogResult>;
    sendInGameLog(request: Request.SendInGameLogRequest): Promise<Result.SendInGameLogResult>;
    sendInGameLogByUserId(request: Request.SendInGameLogByUserIdRequest): Promise<Result.SendInGameLogByUserIdResult>;
    queryAccessLogWithTelemetry(request: Request.QueryAccessLogWithTelemetryRequest): Promise<Result.QueryAccessLogWithTelemetryResult>;
    describeInsights(request: Request.DescribeInsightsRequest): Promise<Result.DescribeInsightsResult>;
    createInsight(request: Request.CreateInsightRequest): Promise<Result.CreateInsightResult>;
    getInsight(request: Request.GetInsightRequest): Promise<Result.GetInsightResult>;
    deleteInsight(request: Request.DeleteInsightRequest): Promise<Result.DeleteInsightResult>;
}
