import IRequest from '../../core/interface/IRequest';
export default class GetOutputRequest implements IRequest {
    private requestId;
    private contextStack;
    private stackName;
    private outputName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStackName(): string | null;
    setStackName(stackName: string | null): this;
    withStackName(stackName: string | null): this;
    getOutputName(): string | null;
    setOutputName(outputName: string | null): this;
    withOutputName(outputName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetOutputRequest;
    toDict(): {
        [key: string]: any;
    };
}
