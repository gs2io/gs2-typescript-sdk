import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2ProjectRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    createAccount(request: Request.CreateAccountRequest): Promise<Result.CreateAccountResult>;
    verify(request: Request.VerifyRequest): Promise<Result.VerifyResult>;
    signIn(request: Request.SignInRequest): Promise<Result.SignInResult>;
    issueAccountToken(request: Request.IssueAccountTokenRequest): Promise<Result.IssueAccountTokenResult>;
    forget(request: Request.ForgetRequest): Promise<Result.ForgetResult>;
    issuePassword(request: Request.IssuePasswordRequest): Promise<Result.IssuePasswordResult>;
    updateAccount(request: Request.UpdateAccountRequest): Promise<Result.UpdateAccountResult>;
    deleteAccount(request: Request.DeleteAccountRequest): Promise<Result.DeleteAccountResult>;
    describeProjects(request: Request.DescribeProjectsRequest): Promise<Result.DescribeProjectsResult>;
    createProject(request: Request.CreateProjectRequest): Promise<Result.CreateProjectResult>;
    getProject(request: Request.GetProjectRequest): Promise<Result.GetProjectResult>;
    getProjectToken(request: Request.GetProjectTokenRequest): Promise<Result.GetProjectTokenResult>;
    getProjectTokenByIdentifier(request: Request.GetProjectTokenByIdentifierRequest): Promise<Result.GetProjectTokenByIdentifierResult>;
    updateProject(request: Request.UpdateProjectRequest): Promise<Result.UpdateProjectResult>;
    deleteProject(request: Request.DeleteProjectRequest): Promise<Result.DeleteProjectResult>;
    describeBillingMethods(request: Request.DescribeBillingMethodsRequest): Promise<Result.DescribeBillingMethodsResult>;
    createBillingMethod(request: Request.CreateBillingMethodRequest): Promise<Result.CreateBillingMethodResult>;
    getBillingMethod(request: Request.GetBillingMethodRequest): Promise<Result.GetBillingMethodResult>;
    updateBillingMethod(request: Request.UpdateBillingMethodRequest): Promise<Result.UpdateBillingMethodResult>;
    deleteBillingMethod(request: Request.DeleteBillingMethodRequest): Promise<Result.DeleteBillingMethodResult>;
    describeReceipts(request: Request.DescribeReceiptsRequest): Promise<Result.DescribeReceiptsResult>;
    describeBillings(request: Request.DescribeBillingsRequest): Promise<Result.DescribeBillingsResult>;
}