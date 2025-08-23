
from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/<int:pk>/delete/', views.post_confirm_delete, name='post_delete'),
    path('signup/', views.signup, name='signup'),
    path('post/new/', views.create_post, name='create_post'),
    path("logout/", LogoutView.as_view(), name="logout"),
]
