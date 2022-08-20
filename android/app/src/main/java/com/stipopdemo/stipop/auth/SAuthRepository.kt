package com.stipopdemo.stipop.auth

import android.util.Log
import com.stipopdemo.MainApplication
import com.stipopdemo.stipop.auth.api.StipopSampleApi
import com.stipopdemo.stipop.auth.model.GetAccessTokenAPIBody
import com.stipopdemo.stipop.auth.model.GetNewAccessTokenResponse
import io.stipop.models.StipopApiEnum
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch

class SAuthRepository {

    companion object {

        private var appId: String = "YOUR_APP_ID"
        private var clientId: String = "YOUR_APP_CLIENT_ID"
        private var clientSecret: String = "YOUR_APP_CLIENT_SECRET"
        private var refreshToken: String = "YOUR_APP_REFRESH_TOKEN"
        private var expiryTime: Int = 86400

        private var isSAuthWorking = false

        private var sAuthAccessToken = ""
        private var sAuthAccessTokenUserId = ""
        private var shouldRefreshAccessTokenTimeMillis = 0L

        fun getAccessTokenIfOverExpiryTime(userId: String, api: StipopApiEnum) {
            CoroutineScope(Job() + Dispatchers.IO).launch {
                setIsSAuthWorking(true)
                val currentTimeMillis = System.currentTimeMillis()
                if (sAuthAccessTokenUserId != userId) {
                    MainApplication.sAuthCallback.setAccessTokenAndReRequest(getAccessToken(userId), api)
                } else if (currentTimeMillis >= shouldRefreshAccessTokenTimeMillis) {
                    MainApplication.sAuthCallback.setAccessTokenAndReRequest(getAccessToken(userId), api)
                } else {
                    setIsSAuthWorking(false)
                    MainApplication.sAuthCallback.setAccessTokenAndReRequest(sAuthAccessToken, api)
                }
            }
        }

        private suspend fun getAccessToken(userId: String): String {
            val response = StipopSampleApi.create().getAccessToken(
                getAccessTokenAPIBody = GetAccessTokenAPIBody(
                    appId = appId,
                    userId = userId,
                    clientId = clientId,
                    clientSecret = clientSecret,
                    refreshToken = refreshToken,
                    expiryTime = expiryTime
                )
            )
            setSAuthInformation(response, userId)
            setIsSAuthWorking(false)
            return sAuthAccessToken
        }

        private fun setIsSAuthWorking(isSAuthWorking: Boolean){
            this.isSAuthWorking = isSAuthWorking
        }

        fun getIsSAuthWorking(): Boolean{
            return isSAuthWorking
        }

        private fun setSAuthInformation(result: GetNewAccessTokenResponse, userId: String){
            val currentTimeMillis = System.currentTimeMillis()
            val expiryTimeMillis = ((if(expiryTime > 60) (expiryTime - 10) else (expiryTime - 1))* 1000).toLong()
            sAuthAccessToken = result.body?.accessToken ?: ""
            sAuthAccessTokenUserId = userId
            shouldRefreshAccessTokenTimeMillis = (currentTimeMillis + expiryTimeMillis)
        }
    }
}