from django.urls import path

from . import views

urlpatterns = [
    # Rendering paths
    path('', views.index),
    path('dashboard', views.show_dashboard),

    # Redirecting paths
    path('register', views.register),
    path('logout', views.logout),
    path('login', views.login),
]
