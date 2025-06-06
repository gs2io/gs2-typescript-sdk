import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2StateMachineRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult>;
    dumpUserDataByUserId(request: Request.DumpUserDataByUserIdRequest): Promise<Result.DumpUserDataByUserIdResult>;
    checkDumpUserDataByUserId(request: Request.CheckDumpUserDataByUserIdRequest): Promise<Result.CheckDumpUserDataByUserIdResult>;
    cleanUserDataByUserId(request: Request.CleanUserDataByUserIdRequest): Promise<Result.CleanUserDataByUserIdResult>;
    checkCleanUserDataByUserId(request: Request.CheckCleanUserDataByUserIdRequest): Promise<Result.CheckCleanUserDataByUserIdResult>;
    prepareImportUserDataByUserId(request: Request.PrepareImportUserDataByUserIdRequest): Promise<Result.PrepareImportUserDataByUserIdResult>;
    importUserDataByUserId(request: Request.ImportUserDataByUserIdRequest): Promise<Result.ImportUserDataByUserIdResult>;
    checkImportUserDataByUserId(request: Request.CheckImportUserDataByUserIdRequest): Promise<Result.CheckImportUserDataByUserIdResult>;
    describeStateMachineMasters(request: Request.DescribeStateMachineMastersRequest): Promise<Result.DescribeStateMachineMastersResult>;
    updateStateMachineMaster(request: Request.UpdateStateMachineMasterRequest): Promise<Result.UpdateStateMachineMasterResult>;
    getStateMachineMaster(request: Request.GetStateMachineMasterRequest): Promise<Result.GetStateMachineMasterResult>;
    deleteStateMachineMaster(request: Request.DeleteStateMachineMasterRequest): Promise<Result.DeleteStateMachineMasterResult>;
    describeStatuses(request: Request.DescribeStatusesRequest): Promise<Result.DescribeStatusesResult>;
    describeStatusesByUserId(request: Request.DescribeStatusesByUserIdRequest): Promise<Result.DescribeStatusesByUserIdResult>;
    getStatus(request: Request.GetStatusRequest): Promise<Result.GetStatusResult>;
    getStatusByUserId(request: Request.GetStatusByUserIdRequest): Promise<Result.GetStatusByUserIdResult>;
    startStateMachineByUserId(request: Request.StartStateMachineByUserIdRequest): Promise<Result.StartStateMachineByUserIdResult>;
    startStateMachineByStampSheet(request: Request.StartStateMachineByStampSheetRequest): Promise<Result.StartStateMachineByStampSheetResult>;
    emit(request: Request.EmitRequest): Promise<Result.EmitResult>;
    emitByUserId(request: Request.EmitByUserIdRequest): Promise<Result.EmitByUserIdResult>;
    report(request: Request.ReportRequest): Promise<Result.ReportResult>;
    reportByUserId(request: Request.ReportByUserIdRequest): Promise<Result.ReportByUserIdResult>;
    deleteStatusByUserId(request: Request.DeleteStatusByUserIdRequest): Promise<Result.DeleteStatusByUserIdResult>;
    exitStateMachine(request: Request.ExitStateMachineRequest): Promise<Result.ExitStateMachineResult>;
    exitStateMachineByUserId(request: Request.ExitStateMachineByUserIdRequest): Promise<Result.ExitStateMachineByUserIdResult>;
}
