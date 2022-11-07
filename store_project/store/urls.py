from django.urls import path

from .views import ProductAPIView, CategoryAPIView

urlpatterns = [
    path('products/', ProductAPIView.as_view()),
    path('categories/', CategoryAPIView.as_view()),
]