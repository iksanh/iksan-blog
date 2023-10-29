"""backend_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from django.http import HttpResponse

#for api 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#for api authentication
from rest_framework.permissions import IsAuthenticated

#for upload file 
from django.conf import settings
from django.conf.urls.static import static

#for security 
#custom
from auth.api.view import MyTokenObtainPairSerializer, MyTokenObtainPairView
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.tokens import RefreshToken





class HomeView(APIView):
  permission_classes = (IsAuthenticated,)

  def get(self, request):
    content = {'message' : 'Wellcome to Jwt Authentication Page Using React JS and Django'}

    return Response(content)


#LOGOUT
class LogoutView(APIView):
  permission_classes = (IsAuthenticated,)
  def get(self, request): 
    try: 
      refresh_token = request.data['refresh_token']
      print(refresh_token)
      token = RefreshToken(refresh_token)
      token.blacklist()
      return Response(status= status.HTTP_205_RESET_CONTENT)
    except Exception as e : 
      return Response(status=status.HTTP_400_BAD_REQUEST)



def home(req):
  msg = "Api Backend Blog"
  return HttpResponse(msg, content_type="text/plain")



#Test for django-rest-framwer  jwt



urlpatterns = [
    path('', home),
    path('home/', HomeView.as_view(), name="home" ),
    path('admin/', admin.site.urls),
    path('api/category/', include('category.api.url')),
    path('api/posts/', include('posts.api.url')),


    #FOR SECURITY 
     path('token', 
          MyTokenObtainPairView.as_view(), 
          name ='token_obtain_pair'),
     path('token/refresh', 
          jwt_views.TokenRefreshView.as_view(), 
          name ='token_refresh'),

    path('logout/', LogoutView.as_view(), name='logout')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
