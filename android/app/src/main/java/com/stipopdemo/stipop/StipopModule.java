package com.stipopdemo.stipop;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import io.stipop.Stipop;

public class StipopModule extends ReactContextBaseJavaModule {

    public StipopModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "StipopModule";
    }

    @ReactMethod
    public void connect(String userID) {
        StipopClass.getInstance().connect(getReactApplicationContext(), userID);
    }

    @ReactMethod
    public void show(Boolean isKeyboardVisible, Boolean isStipopShowing, Callback callback){

        Integer keyboardHeight = Stipop.Companion.getCurrentKeyboardHeight();

        getReactApplicationContext().getCurrentActivity().runOnUiThread(new Runnable(){

            @Override
            public void run() {
                Stipop.Companion.show();
            }
        });

        if(keyboardHeight > 0){
            if(isStipopShowing){
                callback.invoke(false);
            } else {
                callback.invoke(true);
            }
        } else {
            callback.invoke(true);
        }
    }

    @ReactMethod
    public void addListener(String eventName) {
    }

    @ReactMethod
    public void removeListeners(Integer count) {
    }
}