"""
URL configuration for config project. (core)
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/",
        include(
            [
                # These handle: /api/auth/users/ (register, get user), /api/auth/jwt/create/ (login)
                path("auth/", include("djoser.urls")),
                path("auth/", include("djoser.urls.jwt")),
            ]
        ),
    ),
]
