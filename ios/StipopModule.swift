//
//  StipopModule.swift
//  StipopDemo
//
//  Created by kyum on 2022/07/09.
//

import Foundation
import Stipop
import React

@objc(StipopModule)
class StipopModule: NSObject {
  
  static let stipopButton = SPUIButton(type: .system)
  
  static let eventEmitter = RCTEventEmitter()
  
  override init(){
    super.init()
    Stipop.initialize()
  }
  
  @objc(connect:)
  func connect(_ userID: String) -> Void {
    let user = SPUser(userID: userID)
    StipopModule.stipopButton.setUser(user, viewType: .picker)
    StipopModule.stipopButton.delegate = self
    
    if let presentedViewController = RCTPresentedViewController() {
      presentedViewController.view.addSubview(StipopModule.stipopButton)
    }
  }
  
  @objc(show:isStipopShowing:callback:)
  func show(_ isKeyboardVisible: Bool, isStipopShowing: Bool, callback: RCTResponseSenderBlock) -> Void{
    StipopModule.stipopButton.sendActions(for: .touchUpInside)
    var resultBool = false
    if(isKeyboardVisible){
      if(isStipopShowing){
        resultBool = false
      } else {
        resultBool = true
      }
    } else {
      resultBool = true
    }
    callback([NSNull(), resultBool])
  }
  
  @objc(remove)
  func remove() -> Void {
    if let presentedViewController = RCTPresentedViewController() {
      StipopModule.stipopButton.endEditing(true)
      presentedViewController.view.endEditing(true)
    }
  }
}

extension StipopModule: SPUIDelegate {
  
  func onStickerSingleTapped(_ view: SPUIView, sticker: SPSticker) {
    print("Stipop : onStickerSingleTapped")
    
    var stickerDict = [String: Any]()
    stickerDict["packageId"] = sticker.packageId
    stickerDict["stickerId"] = sticker.stickerId
    stickerDict["stickerImg"] = sticker.stickerImg
    stickerDict["keyword"] = sticker.keyword
    
    StipopEmitter.shared?.sendEvent(withName: "onStickerSingleTapped", body: stickerDict)
  }
  
  func onStickerDoubleTapped(_ view: SPUIView, sticker: SPSticker) {
    print("Stipop : onStickerDoubleTapped")
    
    var stickerDict = [String: Any]()
    stickerDict["packageId"] = sticker.packageId
    stickerDict["stickerId"] = sticker.stickerId
    stickerDict["stickerImg"] = sticker.stickerImg
    stickerDict["keyword"] = sticker.keyword
    
    StipopEmitter.shared?.sendEvent(withName: "onStickerDoubleTapped", body: stickerDict)
  }
}
