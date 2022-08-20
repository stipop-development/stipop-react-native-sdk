package com.stipopdemo.stipop.auth

import io.stipop.models.StipopApiEnum

interface SAuthCallback {
    fun setAccessTokenAndReRequest(accessToken: String, api: StipopApiEnum)
}