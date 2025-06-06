import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2EnhanceRestClient extends AbstractGs2RestClient {
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
    describeRateModels(request: Request.DescribeRateModelsRequest): Promise<Result.DescribeRateModelsResult>;
    getRateModel(request: Request.GetRateModelRequest): Promise<Result.GetRateModelResult>;
    describeRateModelMasters(request: Request.DescribeRateModelMastersRequest): Promise<Result.DescribeRateModelMastersResult>;
    createRateModelMaster(request: Request.CreateRateModelMasterRequest): Promise<Result.CreateRateModelMasterResult>;
    getRateModelMaster(request: Request.GetRateModelMasterRequest): Promise<Result.GetRateModelMasterResult>;
    updateRateModelMaster(request: Request.UpdateRateModelMasterRequest): Promise<Result.UpdateRateModelMasterResult>;
    deleteRateModelMaster(request: Request.DeleteRateModelMasterRequest): Promise<Result.DeleteRateModelMasterResult>;
    describeUnleashRateModels(request: Request.DescribeUnleashRateModelsRequest): Promise<Result.DescribeUnleashRateModelsResult>;
    getUnleashRateModel(request: Request.GetUnleashRateModelRequest): Promise<Result.GetUnleashRateModelResult>;
    describeUnleashRateModelMasters(request: Request.DescribeUnleashRateModelMastersRequest): Promise<Result.DescribeUnleashRateModelMastersResult>;
    createUnleashRateModelMaster(request: Request.CreateUnleashRateModelMasterRequest): Promise<Result.CreateUnleashRateModelMasterResult>;
    getUnleashRateModelMaster(request: Request.GetUnleashRateModelMasterRequest): Promise<Result.GetUnleashRateModelMasterResult>;
    updateUnleashRateModelMaster(request: Request.UpdateUnleashRateModelMasterRequest): Promise<Result.UpdateUnleashRateModelMasterResult>;
    deleteUnleashRateModelMaster(request: Request.DeleteUnleashRateModelMasterRequest): Promise<Result.DeleteUnleashRateModelMasterResult>;
    directEnhance(request: Request.DirectEnhanceRequest): Promise<Result.DirectEnhanceResult>;
    directEnhanceByUserId(request: Request.DirectEnhanceByUserIdRequest): Promise<Result.DirectEnhanceByUserIdResult>;
    directEnhanceByStampSheet(request: Request.DirectEnhanceByStampSheetRequest): Promise<Result.DirectEnhanceByStampSheetResult>;
    unleash(request: Request.UnleashRequest): Promise<Result.UnleashResult>;
    unleashByUserId(request: Request.UnleashByUserIdRequest): Promise<Result.UnleashByUserIdResult>;
    unleashByStampSheet(request: Request.UnleashByStampSheetRequest): Promise<Result.UnleashByStampSheetResult>;
    createProgressByUserId(request: Request.CreateProgressByUserIdRequest): Promise<Result.CreateProgressByUserIdResult>;
    getProgress(request: Request.GetProgressRequest): Promise<Result.GetProgressResult>;
    getProgressByUserId(request: Request.GetProgressByUserIdRequest): Promise<Result.GetProgressByUserIdResult>;
    start(request: Request.StartRequest): Promise<Result.StartResult>;
    startByUserId(request: Request.StartByUserIdRequest): Promise<Result.StartByUserIdResult>;
    end(request: Request.EndRequest): Promise<Result.EndResult>;
    endByUserId(request: Request.EndByUserIdRequest): Promise<Result.EndByUserIdResult>;
    deleteProgress(request: Request.DeleteProgressRequest): Promise<Result.DeleteProgressResult>;
    deleteProgressByUserId(request: Request.DeleteProgressByUserIdRequest): Promise<Result.DeleteProgressByUserIdResult>;
    createProgressByStampSheet(request: Request.CreateProgressByStampSheetRequest): Promise<Result.CreateProgressByStampSheetResult>;
    deleteProgressByStampTask(request: Request.DeleteProgressByStampTaskRequest): Promise<Result.DeleteProgressByStampTaskResult>;
    exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult>;
    getCurrentRateMaster(request: Request.GetCurrentRateMasterRequest): Promise<Result.GetCurrentRateMasterResult>;
    preUpdateCurrentRateMaster(request: Request.PreUpdateCurrentRateMasterRequest): Promise<Result.PreUpdateCurrentRateMasterResult>;
    updateCurrentRateMaster(request: Request.UpdateCurrentRateMasterRequest): Promise<Result.UpdateCurrentRateMasterResult>;
    updateCurrentRateMasterFromGitHub(request: Request.UpdateCurrentRateMasterFromGitHubRequest): Promise<Result.UpdateCurrentRateMasterFromGitHubResult>;
}
