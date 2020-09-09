from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('foods/create', views.create_food),
    path('chefs/create', views.create_chef),
]
