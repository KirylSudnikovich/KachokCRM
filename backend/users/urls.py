from django.urls import include, path

from . import views

urlpatterns = [
    path('google/', views.GoogleLogin.as_view(), name='socialaccount_signup'),
    path('', views.UserListView.as_view()),
]