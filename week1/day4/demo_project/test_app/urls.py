from django.urls import path

from . import views

urlpatterns = [
    # path('', include('test_app.urls'))
    path('', views.index),  # localhost:8000/
    path('hello', views.hello),  # localhost:8000/hello
    path('color/<str:color_var>', views.show_color),
]
