package com.stipopdemo;

import android.app.Application;
import android.content.Context;
import androidx.annotation.NonNull;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.soloader.SoLoader;
import com.stipopdemo.newarchitecture.MainApplicationReactNativeHost;
import com.stipopdemo.stipop.StipopPackage;
import com.stipopdemo.stipop.auth.SAuthCallback;
import com.stipopdemo.stipop.auth.SAuthRepository;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import io.stipop.Stipop;
import io.stipop.event.SAuthDelegate;
import io.stipop.models.StipopApiEnum;
import io.stipop.s_auth.SAuthManager;
import retrofit2.HttpException;

public class MainApplication extends Application implements ReactApplication
//        ,SAuthDelegate  // For using SAuth user.
//        ,SAuthCallback  // For using SAuth user.
{

    private final ReactNativeHost mReactNativeHost =
            new ReactNativeHost(this) {
                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected List<ReactPackage> getPackages() {
                    @SuppressWarnings("UnnecessaryLocalVariable")
                    List<ReactPackage> packages = new PackageList(this).getPackages();
                    // Packages that cannot be autolinked yet can be added manually here, for example:
                    // packages.add(new MyReactNativePackage());
                    packages.add(new StipopPackage());
                    return packages;
                }

                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }
            };

    private final ReactNativeHost mNewArchitectureNativeHost =
            new MainApplicationReactNativeHost(this);

    public static SAuthCallback sAuthCallback;  // For using SAuth user.

    @Override
    public ReactNativeHost getReactNativeHost() {
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            return mNewArchitectureNativeHost;
        } else {
            return mReactNativeHost;
        }
    }

    @Override
    public void onCreate() {
        super.onCreate();
        // If you opted-in for the New Architecture, we enable the TurboModule system
        ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        SoLoader.init(this, /* native exopackage */ false);
        initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
        // Stipop-android-SDK configure.
        Stipop.Companion.configure(this, null, null);   // If you use SAuth, second parameter will be this.
//        sAuthCallback = this;  // For using SAuth user.

    }

    /**
     * Loads Flipper in React Native templates. Call this in the onCreate method with something like
     * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
     *
     * @param context
     * @param reactInstanceManager
     */
    private static void initializeFlipper(
            Context context, ReactInstanceManager reactInstanceManager) {
        if (BuildConfig.DEBUG) {
            try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
                Class<?> aClass = Class.forName("com.stipopdemo.ReactNativeFlipper");
                aClass
                        .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
                        .invoke(null, context, reactInstanceManager);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * httpException (From SAuthDelegate)
     * :If HttpException occurs in Stipop, occurred HttpException will be received in here.
     *
     * @process 1: Issue new AccessToken (If other exception is issuing an AccessToken, please wait until finishing and request using this AccessToken).
     * @param api: Where HttpException occurred.
     *         exception: HttpException occurred.
     */
    /*
    @Override
    public void httpException(@NonNull StipopApiEnum api, @NonNull HttpException exception) {
        if(exception.code() == 401){
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        while(SAuthRepository.Companion.getIsSAuthWorking()) {
                            Thread.sleep(50);
                        }
                        SAuthRepository.Companion.getAccessTokenIfOverExpiryTime(Stipop.Companion.getUserId(), api);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }).start();
        }
    }
     */

    /**
     * setAccessTokenAndReRequest (From SAuthCallback)
     * :Newly issued AccessToken will be received in here.
     *
     * @process 1: Set new AccessToken to Stipop. (Using Stipop.setAccessToken method)
     *          2: Rerequest to the API where error occurred. (Using SAuthManager.reRequest method)
     * @param accessToken: Newly issued AccessToken.
     * @param api: HttpException occurred.
     */
    /*
    @Override
    public void setAccessTokenAndReRequest(@NonNull String accessToken, @NonNull StipopApiEnum api) {
        Stipop.Companion.setAccessToken(accessToken);
        SAuthManager.Companion.reRequest(api);
    }
     */
}
