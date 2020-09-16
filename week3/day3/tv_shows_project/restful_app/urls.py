from django.urls import path

from . import views

urlpatterns = [
    # Pages
    path('', views.index),
    path('shows', views.display_shows),
    path('shows/new', views.new_show),
    path('shows/<int:show_id>', views.show_a_show),
    path('shows/<int:show_id>/edit', views.show_edit),

    # Process
    path('shows/create', views.create_a_show),
    path('shows/<int:show_id>/destroy', views.show_destroy),
    path('shows/<int:show_id>/update', views.show_update),
]
