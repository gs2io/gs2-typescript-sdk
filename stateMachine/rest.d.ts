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
    deleteStatusByUserId(request: Request.DeleteStatusByUserIdRequest): Promise<Result.DeleteStatusByUserIdResult>;
    exitStateMachine(request: Request.ExitStateMachineRequest): Promise<Result.ExitStateMachineResult>;
    exitStateMachineByUserId(request: Request.ExitStateMachineByUserIdRequest): Promise<Result.ExitStateMachineByUserIdResult>;
}