from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),  # localhost:8000/
    path('login', views.login),
    path('dashboard', views.dashboard),
    path('logout', views.logout),
    path('add_drink', views.add_drink),
]
