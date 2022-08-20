package com.stipopdemo.stipop.auth.model

import com.google.gson.annotations.SerializedName

data class GetNewAccessTokenResponse(
    @SerializedName("header") val header: ResponseHeader,
    @SerializedName("body") val body: ResponseBody?
){
    data class ResponseHeader(
        @SerializedName("code") val code: String,
        @SerializedName("status") val status: String,
        @SerializedName("message") val message: String
    )
    data class ResponseBody(@SerializedName("accessToken") val accessToken: String?)
}