from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .view import PostsList, PostsDetail


urlpatterns = [
    path('', PostsList.as_view()),
    path('<int:pk>', PostsDetail.as_view())
]