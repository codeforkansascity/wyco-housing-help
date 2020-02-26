from django.db import models

#represents property lot
class Lot(models.Model):
    address = models.CharField(max_length=100, unique=True)
    city = models.CharField(max_length=50)
    zipcode = models.IntegerField()
    area = models.IntegerField()
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)