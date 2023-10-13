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

import * as Gs2SkillTree from '../model'

export default class PrepareImportUserDataByUserIdResult implements IResult {
    private uploadToken: string|null = null;
    private uploadUrl: string|null = null;

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

    public getUploadUrl(): string|null {
        return this.uploadUrl;
    }

    public setUploadUrl(uploadUrl: string|null) {
        this.uploadUrl = uploadUrl;
        return this;
    }

    public withUploadUrl(uploadUrl: string|null): this {
        this.uploadUrl = uploadUrl;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PrepareImportUserDataByUserIdResult {
        return new PrepareImportUserDataByUserIdResult()
            .withUploadToken(data["uploadToken"])
            .withUploadUrl(data["uploadUrl"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "uploadToken": this.getUploadToken(),
            "uploadUrl": this.getUploadUrl(),
        };
    }
}
