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
  
//  static let semaphore = DispatchSemaphore(value: 1)  // For using SAuth user.
  
  override init(){
    super.init()
//    *setSAuthDelegate() should be typed before initialize()
//    Stipop.setSAuthDelegate(sAuthDelegate: self)  // For using SAuth user.
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
    print("⚡️Stipop : onStickerSingleTapped")
    
    var stickerDict = [String: Any]()
    stickerDict["packageId"] = sticker.packageId
    stickerDict["stickerId"] = sticker.stickerId
    stickerDict["stickerImg"] = sticker.stickerImg
    stickerDict["keyword"] = sticker.keyword
    
    StipopEmitter.shared?.sendEvent(withName: "onStickerSingleTapped", body: stickerDict)
  }
  
  func onStickerDoubleTapped(_ view: SPUIView, sticker: SPSticker) {
    print("⚡️Stipop : onStickerDoubleTapped")
    
    var stickerDict = [String: Any]()
    stickerDict["packageId"] = sticker.packageId
    stickerDict["stickerId"] = sticker.stickerId
    stickerDict["stickerImg"] = sticker.stickerImg
    stickerDict["keyword"] = sticker.keyword
    
    StipopEmitter.shared?.sendEvent(withName: "onStickerDoubleTapped", body: stickerDict)
  }
}

/* If you use SAuth, implement SAuthDelegate and refresh accessToken when authorization error occured. */
/*
extension StipopModule: SAuthDelegate {
    func httpError(apiEnum: SPAPIEnum, error: SPError) {
        print("⚡️Stipop: HTTP Error => \(apiEnum)")
        DispatchQueue.global().async {
            StipopModule.semaphore.wait()
            DemoSAuthManager.getAccessTokenIfOverExpiryTime(userId: Stipop.getUser().userID, completion: { accessToken in
              StipopModule.semaphore.signal()
                guard let accessToken = accessToken else { return }
                Stipop.setAccessToken(accessToken: accessToken)
                SAuthManager.reRequest(api: apiEnum)
            })
        }
    }
}
*/
