//
//  StipopModule.m
//  StipopDemo
//
//  Created by kyum on 2022/07/09.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(StipopModule, NSObject)

RCT_EXTERN_METHOD(connect:(NSString *)userID)
RCT_EXTERN_METHOD(show
                  :(BOOL *)isKeyboardVisible
                  isStipopShowing:(BOOL *)isStipopShowing
                  callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(remove)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
@end

@interface RCT_EXTERN_MODULE(StipopEmitter, RCTEventEmitter)

RCT_EXTERN_METHOD(supportedEvents)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
