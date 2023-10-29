from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .view import CategoryList, CategoryDetail


urlpatterns = [
    path('', CategoryList.as_view()),
    path('<int:pk>', CategoryDetail.as_view())
]