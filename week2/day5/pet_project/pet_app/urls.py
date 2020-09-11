from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('pets', views.show_the_pets),
    path('login', views.login),
    path('list_pet', views.list_pet),
    path('sell_pet/<int:pet_id>', views.sell_pet),
]
