package com.stipopdemo.stipop;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Locale;

import io.stipop.Stipop;
import io.stipop.StipopDelegate;
import io.stipop.models.SPPackage;
import io.stipop.models.SPSticker;

enum StipopDelegateFunction{
    onStickerSingleTapped, onStickerDoubleTapped, onStickerPackRequested
}

public class StipopClass {

    private static StipopClass instance = new StipopClass();

    private StipopClass() {}

    public static StipopClass getInstance() {
        return instance;
    }

    void connect(
            ReactContext reactContext,
            String userID
    ) {

        StipopDelegate stipopDelegate = new StipopDelegate() {

            @Override
            public boolean onStickerSingleTapped(@NonNull SPSticker spSticker) {
                // This function will be executed when user chooses a sticker.
                Log.e("Stipop : ","onStickerSingleTapped");
                WritableMap params = Arguments.createMap();
                params.putInt("packageId", spSticker.getPackageId());
                params.putInt("stickerId", spSticker.getStickerId());
                params.putString("stickerImg", spSticker.getStickerImg());
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit(StipopDelegateFunction.onStickerSingleTapped.name(), params);

                return true;
            }

            /* If you want to use double tap feature, change the plist file and implement this function. */
            @Override
            public boolean onStickerDoubleTapped(@NonNull SPSticker spSticker) {
                // This function will be executed when user clicks a sticker twice.
                Log.e("Stipop : ","onStickerSingleTapped");
                WritableMap params = Arguments.createMap();
                params.putInt("packageId", spSticker.getPackageId());
                params.putInt("stickerId", spSticker.getStickerId());
                params.putString("stickerImg", spSticker.getStickerImg());
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit(StipopDelegateFunction.onStickerDoubleTapped.name(), params);
                return true;
            }

            @Override
            public boolean onStickerPackRequested(@NonNull SPPackage spPackage) {
                Log.e("Stipop : ","onStickerPackRequested");
                WritableMap params = Arguments.createMap();
                params.putInt("packageId", spPackage.getPackageId());
                params.putString("packageName", spPackage.getPackageName());
                params.putString("packageImg", spPackage.getPackageImg());
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit(StipopDelegateFunction.onStickerPackRequested.name(), params); // Emit what you need.
                return true;
            }
        };

        Stipop.Companion.connect(
                (FragmentActivity) reactContext.getCurrentActivity(),
                userID,
                stipopDelegate,
                null,
                null,
                Locale.getDefault(),
                null
        );
    }
}