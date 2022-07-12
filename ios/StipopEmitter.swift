//
//  StipopEmitter.swift
//  StipopDemo
//
//  Created by kyum on 2022/07/10.
//

import Foundation
import React

@objc(StipopEmitter)
class StipopEmitter: RCTEventEmitter {

    public static var shared:StipopEmitter?

    override init() {
        super.init()
      StipopEmitter.shared = self
    }

    override func supportedEvents() -> [String] {
      
      var eventArr: [String] = []
      eventArr.append("onStickerSingleTapped")
      eventArr.append("onStickerDoubleTapped")
      
        return eventArr
    }
}
