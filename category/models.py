from django.db import models

# Create your models here.

class Category(models.Model):
  name = models.CharField(max_length=100)

  class Meta:
    db_table = 'blog_category'