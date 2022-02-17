/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IResult from '../../core/interface/IResult';

import * as Gs2News from '../model'

export class PrepareUpdateCurrentNewsMasterFromGitHubResult implements IResult {
    private uploadToken: string|null = null;

    public getUploadToken(): string|null {
        return this.uploadToken;
    }

    public setUploadToken(uploadToken: string|null) {
        this.uploadToken = uploadToken;
        return this;
    }

    public withUploadToken(uploadToken: string|null): this {
        this.uploadToken = uploadToken;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PrepareUpdateCurrentNewsMasterFromGitHubResult {
        return new PrepareUpdateCurrentNewsMasterFromGitHubResult()
            .withUploadToken(data["uploadToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "uploadToken": this.getUploadToken(),
        };
    }
}
