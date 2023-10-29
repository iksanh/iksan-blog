from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from category.models import Category

# Create your models here.

class Posts(models.Model):
  title = models.CharField(max_length=255)
  desc = models.TextField()
  img= models.FileField()
  create_at= models.DateTimeField(auto_now=True, null=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)

  class Meta:
    db_table =  "blog_posts"