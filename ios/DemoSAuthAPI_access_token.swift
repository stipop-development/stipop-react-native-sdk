//
//  SAuthAPI_access_token.swift
//  StipopDemo
//
//  Created by kyum on 2022/08/18.
//

import Alamofire

extension DemoSAuthAPI {
    
    static func getAccessToken(userId: String,
                               completion: ((String) -> Void)?,
                               failure: ((DemoSAuthError?) -> Void)? = nil) -> DataRequest {
        return request(Path.accessToken,
                       method: .post,
                       userId: userId,
                       completion: { response in
            completion?(response.body?.accessToken ?? "")
        }, failure: failure)
    }
}
