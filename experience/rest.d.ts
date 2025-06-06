import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2ExperienceRestClient extends AbstractGs2RestClient {
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
    describeExperienceModelMasters(request: Request.DescribeExperienceModelMastersRequest): Promise<Result.DescribeExperienceModelMastersResult>;
    createExperienceModelMaster(request: Request.CreateExperienceModelMasterRequest): Promise<Result.CreateExperienceModelMasterResult>;
    getExperienceModelMaster(request: Request.GetExperienceModelMasterRequest): Promise<Result.GetExperienceModelMasterResult>;
    updateExperienceModelMaster(request: Request.UpdateExperienceModelMasterRequest): Promise<Result.UpdateExperienceModelMasterResult>;
    deleteExperienceModelMaster(request: Request.DeleteExperienceModelMasterRequest): Promise<Result.DeleteExperienceModelMasterResult>;
    describeExperienceModels(request: Request.DescribeExperienceModelsRequest): Promise<Result.DescribeExperienceModelsResult>;
    getExperienceModel(request: Request.GetExperienceModelRequest): Promise<Result.GetExperienceModelResult>;
    describeThresholdMasters(request: Request.DescribeThresholdMastersRequest): Promise<Result.DescribeThresholdMastersResult>;
    createThresholdMaster(request: Request.CreateThresholdMasterRequest): Promise<Result.CreateThresholdMasterResult>;
    getThresholdMaster(request: Request.GetThresholdMasterRequest): Promise<Result.GetThresholdMasterResult>;
    updateThresholdMaster(request: Request.UpdateThresholdMasterRequest): Promise<Result.UpdateThresholdMasterResult>;
    deleteThresholdMaster(request: Request.DeleteThresholdMasterRequest): Promise<Result.DeleteThresholdMasterResult>;
    exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult>;
    getCurrentExperienceMaster(request: Request.GetCurrentExperienceMasterRequest): Promise<Result.GetCurrentExperienceMasterResult>;
    preUpdateCurrentExperienceMaster(request: Request.PreUpdateCurrentExperienceMasterRequest): Promise<Result.PreUpdateCurrentExperienceMasterResult>;
    updateCurrentExperienceMaster(request: Request.UpdateCurrentExperienceMasterRequest): Promise<Result.UpdateCurrentExperienceMasterResult>;
    updateCurrentExperienceMasterFromGitHub(request: Request.UpdateCurrentExperienceMasterFromGitHubRequest): Promise<Result.UpdateCurrentExperienceMasterFromGitHubResult>;
    describeStatuses(request: Request.DescribeStatusesRequest): Promise<Result.DescribeStatusesResult>;
    describeStatusesByUserId(request: Request.DescribeStatusesByUserIdRequest): Promise<Result.DescribeStatusesByUserIdResult>;
    getStatus(request: Request.GetStatusRequest): Promise<Result.GetStatusResult>;
    getStatusByUserId(request: Request.GetStatusByUserIdRequest): Promise<Result.GetStatusByUserIdResult>;
    getStatusWithSignature(request: Request.GetStatusWithSignatureRequest): Promise<Result.GetStatusWithSignatureResult>;
    getStatusWithSignatureByUserId(request: Request.GetStatusWithSignatureByUserIdRequest): Promise<Result.GetStatusWithSignatureByUserIdResult>;
    addExperienceByUserId(request: Request.AddExperienceByUserIdRequest): Promise<Result.AddExperienceByUserIdResult>;
    subExperience(request: Request.SubExperienceRequest): Promise<Result.SubExperienceResult>;
    subExperienceByUserId(request: Request.SubExperienceByUserIdRequest): Promise<Result.SubExperienceByUserIdResult>;
    setExperienceByUserId(request: Request.SetExperienceByUserIdRequest): Promise<Result.SetExperienceByUserIdResult>;
    addRankCapByUserId(request: Request.AddRankCapByUserIdRequest): Promise<Result.AddRankCapByUserIdResult>;
    subRankCap(request: Request.SubRankCapRequest): Promise<Result.SubRankCapResult>;
    subRankCapByUserId(request: Request.SubRankCapByUserIdRequest): Promise<Result.SubRankCapByUserIdResult>;
    setRankCapByUserId(request: Request.SetRankCapByUserIdRequest): Promise<Result.SetRankCapByUserIdResult>;
    deleteStatusByUserId(request: Request.DeleteStatusByUserIdRequest): Promise<Result.DeleteStatusByUserIdResult>;
    verifyRank(request: Request.VerifyRankRequest): Promise<Result.VerifyRankResult>;
    verifyRankByUserId(request: Request.VerifyRankByUserIdRequest): Promise<Result.VerifyRankByUserIdResult>;
    verifyRankCap(request: Request.VerifyRankCapRequest): Promise<Result.VerifyRankCapResult>;
    verifyRankCapByUserId(request: Request.VerifyRankCapByUserIdRequest): Promise<Result.VerifyRankCapByUserIdResult>;
    addExperienceByStampSheet(request: Request.AddExperienceByStampSheetRequest): Promise<Result.AddExperienceByStampSheetResult>;
    setExperienceByStampSheet(request: Request.SetExperienceByStampSheetRequest): Promise<Result.SetExperienceByStampSheetResult>;
    subExperienceByStampTask(request: Request.SubExperienceByStampTaskRequest): Promise<Result.SubExperienceByStampTaskResult>;
    addRankCapByStampSheet(request: Request.AddRankCapByStampSheetRequest): Promise<Result.AddRankCapByStampSheetResult>;
    subRankCapByStampTask(request: Request.SubRankCapByStampTaskRequest): Promise<Result.SubRankCapByStampTaskResult>;
    setRankCapByStampSheet(request: Request.SetRankCapByStampSheetRequest): Promise<Result.SetRankCapByStampSheetResult>;
    multiplyAcquireActionsByUserId(request: Request.MultiplyAcquireActionsByUserIdRequest): Promise<Result.MultiplyAcquireActionsByUserIdResult>;
    multiplyAcquireActionsByStampSheet(request: Request.MultiplyAcquireActionsByStampSheetRequest): Promise<Result.MultiplyAcquireActionsByStampSheetResult>;
    verifyRankByStampTask(request: Request.VerifyRankByStampTaskRequest): Promise<Result.VerifyRankByStampTaskResult>;
    verifyRankCapByStampTask(request: Request.VerifyRankCapByStampTaskRequest): Promise<Result.VerifyRankCapByStampTaskResult>;
}
