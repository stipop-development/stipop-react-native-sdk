package com.stipopdemo.stipop.auth.api

import androidx.annotation.Keep
import com.stipopdemo.stipop.auth.model.GetAccessTokenAPIBody
import com.stipopdemo.stipop.auth.model.GetNewAccessTokenResponse
import okhttp3.Headers
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.POST
import java.util.concurrent.TimeUnit


internal interface StipopSampleApi {

    @POST("access")
    suspend fun getAccessToken(
        @Body getAccessTokenAPIBody: GetAccessTokenAPIBody
    ): GetNewAccessTokenResponse

    companion object {

        private val API_KEY_VALUE = "YOUR_API_KEY"

        fun create(): StipopSampleApi {
            val headers = Headers.Builder()
                .add("api_key", API_KEY_VALUE)
                .build()

            val loggingInterceptor = HttpLoggingInterceptor().apply { level = HttpLoggingInterceptor.Level.BODY }
            val client = OkHttpClient.Builder()
                .connectTimeout(10, TimeUnit.MINUTES)
                .readTimeout(10, TimeUnit.MINUTES)
                .writeTimeout(10, TimeUnit.MINUTES)
                .addInterceptor(loggingInterceptor)
                .addInterceptor(Interceptor {
                    it.proceed(it.request().newBuilder().headers(headers).build())
                })
                .addNetworkInterceptor {
                    it.proceed(it.request())
                }
                .build()

            val BASE_URL = "https://messenger.stipop.io/v1/"
            return Retrofit.Builder()
                .baseUrl(BASE_URL)
                .client(client)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
                .create(StipopSampleApi::class.java)
        }
    }
}