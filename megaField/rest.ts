/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant, Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';

import axios from 'axios';

export default class Gs2MegaFieldRestClient extends AbstractGs2RestClient {

    public static ENDPOINT_HOST: string|null = null;

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'namePrefix': String(request.getNamePrefix() ?? null),
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetServiceVersionResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeAreaModels(request: Request.DescribeAreaModelsRequest): Promise<Result.DescribeAreaModelsResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeAreaModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getAreaModel(request: Request.GetAreaModelRequest): Promise<Result.GetAreaModelResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetAreaModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeAreaModelMasters(request: Request.DescribeAreaModelMastersRequest): Promise<Result.DescribeAreaModelMastersResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeAreaModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createAreaModelMaster(request: Request.CreateAreaModelMasterRequest): Promise<Result.CreateAreaModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateAreaModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getAreaModelMaster(request: Request.GetAreaModelMasterRequest): Promise<Result.GetAreaModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetAreaModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateAreaModelMaster(request: Request.UpdateAreaModelMasterRequest): Promise<Result.UpdateAreaModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateAreaModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteAreaModelMaster(request: Request.DeleteAreaModelMasterRequest): Promise<Result.DeleteAreaModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteAreaModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLayerModels(request: Request.DescribeLayerModelsRequest): Promise<Result.DescribeLayerModelsResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeLayerModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLayerModel(request: Request.GetLayerModelRequest): Promise<Result.GetLayerModelResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetLayerModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLayerModelMasters(request: Request.DescribeLayerModelMastersRequest): Promise<Result.DescribeLayerModelMastersResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeLayerModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createLayerModelMaster(request: Request.CreateLayerModelMasterRequest): Promise<Result.CreateLayerModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateLayerModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getLayerModelMaster(request: Request.GetLayerModelMasterRequest): Promise<Result.GetLayerModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetLayerModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateLayerModelMaster(request: Request.UpdateLayerModelMasterRequest): Promise<Result.UpdateLayerModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateLayerModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteLayerModelMaster(request: Request.DeleteLayerModelMasterRequest): Promise<Result.DeleteLayerModelMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteLayerModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.ExportMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getCurrentFieldMaster(request: Request.GetCurrentFieldMasterRequest): Promise<Result.GetCurrentFieldMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetCurrentFieldMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public preUpdateCurrentFieldMaster(request: Request.PreUpdateCurrentFieldMasterRequest): Promise<Result.PreUpdateCurrentFieldMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PreUpdateCurrentFieldMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentFieldMaster(request: Request.UpdateCurrentFieldMasterRequest): Promise<Result.UpdateCurrentFieldMasterResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'mode': request.getMode() ?? null,
            'settings': request.getSettings() ?? null,
            'uploadToken': request.getUploadToken() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentFieldMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentFieldMasterFromGitHub(request: Request.UpdateCurrentFieldMasterFromGitHubRequest): Promise<Result.UpdateCurrentFieldMasterFromGitHubResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'checkoutSetting': request.getCheckoutSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentFieldMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public putPosition(request: Request.PutPositionRequest): Promise<Result.PutPositionResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/spatial/{areaModelName}/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'position': request.getPosition()?.toDict() ?? null,
            'vector': request.getVector()?.toDict() ?? null,
            'r': request.getR() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutPositionResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public putPositionByUserId(request: Request.PutPositionByUserIdRequest): Promise<Result.PutPositionByUserIdResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/spatial/{areaModelName}/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'position': request.getPosition()?.toDict() ?? null,
            'vector': request.getVector()?.toDict() ?? null,
            'r': request.getR() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutPositionByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public fetchPosition(request: Request.FetchPositionRequest): Promise<Result.FetchPositionResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer/{layerModelName}/spatial/fetch')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userIds': request.getUserIds() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.FetchPositionResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public fetchPositionFromSystem(request: Request.FetchPositionFromSystemRequest): Promise<Result.FetchPositionFromSystemResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/system/area/{areaModelName}/layer/{layerModelName}/spatial/fetch')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userIds': request.getUserIds() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.FetchPositionFromSystemResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public nearUserIds(request: Request.NearUserIdsRequest): Promise<Result.NearUserIdsResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer/{layerModelName}/spatial/near')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'point': request.getPoint()?.toDict() ?? null,
            'r': request.getR() ?? null,
            'limit': request.getLimit() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.NearUserIdsResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public nearUserIdsFromSystem(request: Request.NearUserIdsFromSystemRequest): Promise<Result.NearUserIdsFromSystemResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/system/area/{areaModelName}/layer/{layerModelName}/spatial/near')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'point': request.getPoint()?.toDict() ?? null,
            'r': request.getR() ?? null,
            'limit': request.getLimit() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.NearUserIdsFromSystemResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public action(request: Request.ActionRequest): Promise<Result.ActionResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/spatial/{areaModelName}/{layerModelName}/action')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'position': request.getPosition()?.toDict() ?? null,
            'scopes': request.getScopes()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ActionResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public actionByUserId(request: Request.ActionByUserIdRequest): Promise<Result.ActionByUserIdResult> {
        const url = ((Gs2MegaFieldRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/spatial/{areaModelName}/{layerModelName}/action')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{areaModelName}', String(request.getAreaModelName() ?? 'null') === "" ? "null" : String(request.getAreaModelName() ?? 'null'))
            .replace('{layerModelName}', String(request.getLayerModelName() ?? 'null') === "" ? "null" : String(request.getLayerModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'position': request.getPosition()?.toDict() ?? null,
            'scopes': request.getScopes()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ActionByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
