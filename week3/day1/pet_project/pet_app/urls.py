from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('pets', views.show_the_pets),
    path('login', views.login),
    path('list_pet', views.list_pet),
    path('sell_pet/<int:pet_id>', views.sell_pet),
    path('like_pet/<int:pet_id>', views.like_pet),
    path('unlike_pet/<int:pet_id>', views.unlike_pet),
    path('logout', views.logout),
    path('pets/sold', views.show_sold_pets),
]
