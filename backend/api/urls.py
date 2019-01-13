from django.urls import include, path
from . import views
from rest_framework.authtoken import views as vi


urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api-token-auth/', vi.obtain_auth_token),
    path('test/', views.hello_world)
]