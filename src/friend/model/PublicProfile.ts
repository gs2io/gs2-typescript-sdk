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

import IModel from '@/gs2/core/interface/IModel';

export class PublicProfile implements IModel {
    private userId: string|null = null;
    private publicProfile: string|null = null;

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getPublicProfile(): string|null {
        return this.publicProfile;
    }

    public setPublicProfile(publicProfile: string|null) {
        this.publicProfile = publicProfile;
        return this;
    }

    public withPublicProfile(publicProfile: string|null): this {
        this.publicProfile = publicProfile;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PublicProfile|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PublicProfile()
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
        };
    }
}
