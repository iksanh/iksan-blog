from .serializers import PostsSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from posts.models import Posts
from rest_framework import generics,status, permissions

from rest_framework.parsers import MultiPartParser, FormParser
# from rest_framework import status, permissions
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view,permission_classes


class PostsList(generics.ListCreateAPIView):
    
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Posts.objects.all()
        category = self.request.query_params.get('cat')  # Get the 'cat' parameter from the URL
        if category:
            # Filter the queryset based on the 'cat' parameter
            queryset = queryset.filter(category__name=category)
        return queryset
    # def create(self, request):
    #     file_uploaded = request.FILES.get('file_uploaded')
    #     content_type = file_uploaded.content_type
    #     response = "POST API and you have uploaded a {} file".format(content_type)
    #     return Response(response)
    

class PostsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer