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

import IModel from '../../core/interface/IModel';

import * as Gs2Identifier from '../../identifier/model'

export default class ProjectToken implements IModel {
    private token: string|null = null;
    public getToken(): string|null {
        return this.token;
    }
    public setToken(token: string|null) {
        this.token = token;
        return this;
    }
    public withToken(token: string|null): this {
        this.token = token;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ProjectToken|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ProjectToken()
            .withToken(data["token"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "token": this.getToken(),
        };
    }
}
