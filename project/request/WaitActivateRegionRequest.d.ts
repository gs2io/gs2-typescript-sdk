import IRequest from '../../core/interface/IRequest';
export default class WaitActivateRegionRequest implements IRequest {
    private requestId;
    private contextStack;
    private projectName;
    private regionName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getProjectName(): string | null;
    setProjectName(projectName: string | null): this;
    withProjectName(projectName: string | null): this;
    getRegionName(): string | null;
    setRegionName(regionName: string | null): this;
    withRegionName(regionName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WaitActivateRegionRequest;
    toDict(): {
        [key: string]: any;
    };
}
