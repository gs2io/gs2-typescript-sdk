import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2FormationRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    describeFormModelMasters(request: Request.DescribeFormModelMastersRequest): Promise<Result.DescribeFormModelMastersResult>;
    createFormModelMaster(request: Request.CreateFormModelMasterRequest): Promise<Result.CreateFormModelMasterResult>;
    getFormModelMaster(request: Request.GetFormModelMasterRequest): Promise<Result.GetFormModelMasterResult>;
    updateFormModelMaster(request: Request.UpdateFormModelMasterRequest): Promise<Result.UpdateFormModelMasterResult>;
    deleteFormModelMaster(request: Request.DeleteFormModelMasterRequest): Promise<Result.DeleteFormModelMasterResult>;
    describeMoldModels(request: Request.DescribeMoldModelsRequest): Promise<Result.DescribeMoldModelsResult>;
    getMoldModel(request: Request.GetMoldModelRequest): Promise<Result.GetMoldModelResult>;
    describeMoldModelMasters(request: Request.DescribeMoldModelMastersRequest): Promise<Result.DescribeMoldModelMastersResult>;
    createMoldModelMaster(request: Request.CreateMoldModelMasterRequest): Promise<Result.CreateMoldModelMasterResult>;
    getMoldModelMaster(request: Request.GetMoldModelMasterRequest): Promise<Result.GetMoldModelMasterResult>;
    updateMoldModelMaster(request: Request.UpdateMoldModelMasterRequest): Promise<Result.UpdateMoldModelMasterResult>;
    deleteMoldModelMaster(request: Request.DeleteMoldModelMasterRequest): Promise<Result.DeleteMoldModelMasterResult>;
    exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult>;
    getCurrentFormMaster(request: Request.GetCurrentFormMasterRequest): Promise<Result.GetCurrentFormMasterResult>;
    updateCurrentFormMaster(request: Request.UpdateCurrentFormMasterRequest): Promise<Result.UpdateCurrentFormMasterResult>;
    updateCurrentFormMasterFromGitHub(request: Request.UpdateCurrentFormMasterFromGitHubRequest): Promise<Result.UpdateCurrentFormMasterFromGitHubResult>;
    describeMolds(request: Request.DescribeMoldsRequest): Promise<Result.DescribeMoldsResult>;
    describeMoldsByUserId(request: Request.DescribeMoldsByUserIdRequest): Promise<Result.DescribeMoldsByUserIdResult>;
    getMold(request: Request.GetMoldRequest): Promise<Result.GetMoldResult>;
    getMoldByUserId(request: Request.GetMoldByUserIdRequest): Promise<Result.GetMoldByUserIdResult>;
    setMoldCapacityByUserId(request: Request.SetMoldCapacityByUserIdRequest): Promise<Result.SetMoldCapacityByUserIdResult>;
    addMoldCapacityByUserId(request: Request.AddMoldCapacityByUserIdRequest): Promise<Result.AddMoldCapacityByUserIdResult>;
    deleteMold(request: Request.DeleteMoldRequest): Promise<Result.DeleteMoldResult>;
    deleteMoldByUserId(request: Request.DeleteMoldByUserIdRequest): Promise<Result.DeleteMoldByUserIdResult>;
    addCapacityByStampSheet(request: Request.AddCapacityByStampSheetRequest): Promise<Result.AddCapacityByStampSheetResult>;
    setCapacityByStampSheet(request: Request.SetCapacityByStampSheetRequest): Promise<Result.SetCapacityByStampSheetResult>;
    describeForms(request: Request.DescribeFormsRequest): Promise<Result.DescribeFormsResult>;
    describeFormsByUserId(request: Request.DescribeFormsByUserIdRequest): Promise<Result.DescribeFormsByUserIdResult>;
    getForm(request: Request.GetFormRequest): Promise<Result.GetFormResult>;
    getFormByUserId(request: Request.GetFormByUserIdRequest): Promise<Result.GetFormByUserIdResult>;
    getFormWithSignature(request: Request.GetFormWithSignatureRequest): Promise<Result.GetFormWithSignatureResult>;
    getFormWithSignatureByUserId(request: Request.GetFormWithSignatureByUserIdRequest): Promise<Result.GetFormWithSignatureByUserIdResult>;
    setFormByUserId(request: Request.SetFormByUserIdRequest): Promise<Result.SetFormByUserIdResult>;
    setFormWithSignature(request: Request.SetFormWithSignatureRequest): Promise<Result.SetFormWithSignatureResult>;
    acquireActionsToFormProperties(request: Request.AcquireActionsToFormPropertiesRequest): Promise<Result.AcquireActionsToFormPropertiesResult>;
    deleteForm(request: Request.DeleteFormRequest): Promise<Result.DeleteFormResult>;
    deleteFormByUserId(request: Request.DeleteFormByUserIdRequest): Promise<Result.DeleteFormByUserIdResult>;
    acquireActionToFormPropertiesByStampSheet(request: Request.AcquireActionToFormPropertiesByStampSheetRequest): Promise<Result.AcquireActionToFormPropertiesByStampSheetResult>;
}