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

export default class SendNotificationResult implements IResult {
    private protocol: string|null = null;

    public getProtocol(): string|null {
        return this.protocol;
    }

    public setProtocol(protocol: string|null) {
        this.protocol = protocol;
        return this;
    }

    public withProtocol(protocol: string|null): this {
        this.protocol = protocol;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SendNotificationResult {
        return new SendNotificationResult()
            .withProtocol(data["protocol"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "protocol": this.getProtocol(),
        };
    }
}
