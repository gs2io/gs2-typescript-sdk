import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2GradeRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    dumpUserDataByUserId(request: Request.DumpUserDataByUserIdRequest): Promise<Result.DumpUserDataByUserIdResult>;
    checkDumpUserDataByUserId(request: Request.CheckDumpUserDataByUserIdRequest): Promise<Result.CheckDumpUserDataByUserIdResult>;
    cleanUserDataByUserId(request: Request.CleanUserDataByUserIdRequest): Promise<Result.CleanUserDataByUserIdResult>;
    checkCleanUserDataByUserId(request: Request.CheckCleanUserDataByUserIdRequest): Promise<Result.CheckCleanUserDataByUserIdResult>;
    prepareImportUserDataByUserId(request: Request.PrepareImportUserDataByUserIdRequest): Promise<Result.PrepareImportUserDataByUserIdResult>;
    importUserDataByUserId(request: Request.ImportUserDataByUserIdRequest): Promise<Result.ImportUserDataByUserIdResult>;
    checkImportUserDataByUserId(request: Request.CheckImportUserDataByUserIdRequest): Promise<Result.CheckImportUserDataByUserIdResult>;
    describeGradeModelMasters(request: Request.DescribeGradeModelMastersRequest): Promise<Result.DescribeGradeModelMastersResult>;
    createGradeModelMaster(request: Request.CreateGradeModelMasterRequest): Promise<Result.CreateGradeModelMasterResult>;
    getGradeModelMaster(request: Request.GetGradeModelMasterRequest): Promise<Result.GetGradeModelMasterResult>;
    updateGradeModelMaster(request: Request.UpdateGradeModelMasterRequest): Promise<Result.UpdateGradeModelMasterResult>;
    deleteGradeModelMaster(request: Request.DeleteGradeModelMasterRequest): Promise<Result.DeleteGradeModelMasterResult>;
    describeGradeModels(request: Request.DescribeGradeModelsRequest): Promise<Result.DescribeGradeModelsResult>;
    getGradeModel(request: Request.GetGradeModelRequest): Promise<Result.GetGradeModelResult>;
    describeStatuses(request: Request.DescribeStatusesRequest): Promise<Result.DescribeStatusesResult>;
    describeStatusesByUserId(request: Request.DescribeStatusesByUserIdRequest): Promise<Result.DescribeStatusesByUserIdResult>;
    getStatus(request: Request.GetStatusRequest): Promise<Result.GetStatusResult>;
    getStatusByUserId(request: Request.GetStatusByUserIdRequest): Promise<Result.GetStatusByUserIdResult>;
    addGradeByUserId(request: Request.AddGradeByUserIdRequest): Promise<Result.AddGradeByUserIdResult>;
    subGradeByUserId(request: Request.SubGradeByUserIdRequest): Promise<Result.SubGradeByUserIdResult>;
    setGradeByUserId(request: Request.SetGradeByUserIdRequest): Promise<Result.SetGradeByUserIdResult>;
    applyRankCap(request: Request.ApplyRankCapRequest): Promise<Result.ApplyRankCapResult>;
    applyRankCapByUserId(request: Request.ApplyRankCapByUserIdRequest): Promise<Result.ApplyRankCapByUserIdResult>;
    deleteStatusByUserId(request: Request.DeleteStatusByUserIdRequest): Promise<Result.DeleteStatusByUserIdResult>;
    verifyGrade(request: Request.VerifyGradeRequest): Promise<Result.VerifyGradeResult>;
    verifyGradeByUserId(request: Request.VerifyGradeByUserIdRequest): Promise<Result.VerifyGradeByUserIdResult>;
    verifyGradeUpMaterial(request: Request.VerifyGradeUpMaterialRequest): Promise<Result.VerifyGradeUpMaterialResult>;
    verifyGradeUpMaterialByUserId(request: Request.VerifyGradeUpMaterialByUserIdRequest): Promise<Result.VerifyGradeUpMaterialByUserIdResult>;
    addGradeByStampSheet(request: Request.AddGradeByStampSheetRequest): Promise<Result.AddGradeByStampSheetResult>;
    applyRankCapByStampSheet(request: Request.ApplyRankCapByStampSheetRequest): Promise<Result.ApplyRankCapByStampSheetResult>;
    subGradeByStampTask(request: Request.SubGradeByStampTaskRequest): Promise<Result.SubGradeByStampTaskResult>;
    multiplyAcquireActionsByUserId(request: Request.MultiplyAcquireActionsByUserIdRequest): Promise<Result.MultiplyAcquireActionsByUserIdResult>;
    multiplyAcquireActionsByStampSheet(request: Request.MultiplyAcquireActionsByStampSheetRequest): Promise<Result.MultiplyAcquireActionsByStampSheetResult>;
    verifyGradeByStampTask(request: Request.VerifyGradeByStampTaskRequest): Promise<Result.VerifyGradeByStampTaskResult>;
    verifyGradeUpMaterialByStampTask(request: Request.VerifyGradeUpMaterialByStampTaskRequest): Promise<Result.VerifyGradeUpMaterialByStampTaskResult>;
    exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult>;
    getCurrentGradeMaster(request: Request.GetCurrentGradeMasterRequest): Promise<Result.GetCurrentGradeMasterResult>;
    updateCurrentGradeMaster(request: Request.UpdateCurrentGradeMasterRequest): Promise<Result.UpdateCurrentGradeMasterResult>;
    updateCurrentGradeMasterFromGitHub(request: Request.UpdateCurrentGradeMasterFromGitHubRequest): Promise<Result.UpdateCurrentGradeMasterFromGitHubResult>;
}